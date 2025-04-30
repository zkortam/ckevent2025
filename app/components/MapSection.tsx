"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import Leaflet components to avoid SSR issues
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);

interface MapSectionProps {
  diningLocations: {
    name: string;
    position: [number, number];
    link: string;
  }[];
}

export default function MapSection({ diningLocations }: MapSectionProps) {
  const [mounted, setMounted] = useState(false);
  const [defaultIcon, setDefaultIcon] = useState<any>(null);
  const [eventIcon, setEventIcon] = useState<any>(null);
  const [parkingIcon, setParkingIcon] = useState<any>(null);

  // Parking locations
  const parkingLocations = [
    {
      name: "Gilman Parking Structure",
      position: [32.87749701972811, -117.2336739868915] as [number, number],
    },
    {
      name: "Hopkins Parking Structure",
      position: [32.88368796027937, -117.23932682488514] as [number, number],
    },
  ];

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      const L = require('leaflet');
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: '/leaflet/marker-icon-2x.png',
        iconUrl: '/leaflet/marker-icon.png',
        shadowUrl: '/leaflet/marker-shadow.png',
      });

      // Default icon for food locations
      setDefaultIcon(L.icon({
        iconUrl: '/leaflet/marker-icon.png',
        iconRetinaUrl: '/leaflet/marker-icon-2x.png',
        shadowUrl: '/leaflet/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      }));

      // Custom event icon with larger size and different color
      setEventIcon(L.divIcon({
        className: 'custom-event-icon',
        html: `
          <div style="
            background: linear-gradient(135deg, #ef4444, #dc2626);
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 3px solid white;
            box-shadow: 0 0 10px rgba(239, 68, 68, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: 20px;
            transform: translate(-50%, -50%);
          ">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        `,
        iconSize: [40, 40],
        iconAnchor: [20, 20],
        popupAnchor: [0, -20]
      }));

      // Custom parking icon
      setParkingIcon(L.divIcon({
        className: 'custom-parking-icon',
        html: `
          <div style="
            background: linear-gradient(135deg, #3b82f6, #2563eb);
            width: 35px;
            height: 35px;
            border-radius: 50%;
            border: 2px solid white;
            box-shadow: 0 0 8px rgba(59, 130, 246, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: 16px;
            transform: translate(-50%, -50%);
          ">
            P
          </div>
        `,
        iconSize: [35, 35],
        iconAnchor: [17.5, 17.5],
        popupAnchor: [0, -17.5]
      }));
    }
  }, []);

  if (!mounted || !defaultIcon || !eventIcon || !parkingIcon) {
    return (
      <div className="h-[500px] w-full bg-gray-800 rounded-xl animate-pulse" />
    );
  }

  return (
    <div className="h-[500px] w-full rounded-xl overflow-hidden relative z-0">
      <MapContainer
        center={[32.878918733249186, -117.23622113473242]}
        zoom={16}
        style={{ height: "100%", width: "100%" }}
        className="z-0"
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />
        {/* Event Location Marker */}
        <Marker
          position={[32.878918733249186, -117.23622113473242]}
          icon={eventIcon}
        >
          <Popup>
            <div className="text-center">
              <h3 className="font-bold text-red-500">Charlie Kirk Event</h3>
              <p>UCSD Town Square</p>
            </div>
          </Popup>
        </Marker>

        {/* Parking Location Markers */}
        {parkingLocations.map((location) => (
          <Marker
            key={location.name}
            position={location.position}
            icon={parkingIcon}
          >
            <Popup>
              <div className="text-center">
                <h3 className="font-bold text-blue-500">{location.name}</h3>
                <p className="text-sm text-gray-600">Parking Structure</p>
              </div>
            </Popup>
          </Marker>
        ))}

        {/* Dining Location Markers */}
        {diningLocations.map((location) => (
          <Marker
            key={location.name}
            position={location.position}
            icon={defaultIcon}
          >
            <Popup>
              <div className="text-center">
                <h3 className="font-bold">{location.name}</h3>
                <a
                  href={location.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View on Google Maps
                </a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
} 