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

      setDefaultIcon(L.icon({
        iconUrl: '/leaflet/marker-icon.png',
        iconRetinaUrl: '/leaflet/marker-icon-2x.png',
        shadowUrl: '/leaflet/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      }));

      setEventIcon(L.icon({
        iconUrl: '/leaflet/marker-icon-red.png',
        iconRetinaUrl: '/leaflet/marker-icon-2x.png',
        shadowUrl: '/leaflet/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      }));
    }
  }, []);

  if (!mounted || !defaultIcon || !eventIcon) {
    return (
      <div className="h-[500px] w-full bg-gray-800 rounded-xl animate-pulse" />
    );
  }

  return (
    <div className="h-[500px] w-full rounded-xl overflow-hidden">
      <MapContainer
        center={[32.88039547516385, -117.2375514080194]}
        zoom={16}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />
        {/* Event Location Marker */}
        <Marker
          position={[32.88039547516385, -117.2375514080194]}
          icon={eventIcon}
        >
          <Popup>
            <div className="text-center">
              <h3 className="font-bold text-red-500">Charlie Kirk Event</h3>
              <p>Geisel Library</p>
            </div>
          </Popup>
        </Marker>
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