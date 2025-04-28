"use client";
import React, { useEffect, useState } from "react";
import dynamic from 'next/dynamic';
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default marker icons
const icon = L.icon({
  iconUrl: '/leaflet/marker-icon.png',
  iconRetinaUrl: '/leaflet/marker-icon-2x.png',
  shadowUrl: '/leaflet/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

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

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[500px] xl:h-[500px] bg-gray-800 rounded-xl animate-pulse" />
    );
  }

  return (
    <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[500px] xl:h-[500px] rounded-xl overflow-hidden">
      <MapContainer
        center={[32.8797, -117.2362]}
        zoom={16}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />
        {/* Event Location Marker */}
        <Marker position={[32.8797, -117.2362]} icon={icon}>
          <Popup>
            <div className="text-center">
              <h3 className="font-bold text-lg">Charlie Kirk Event</h3>
              <p>Geisel Library, UCSD</p>
              <a
                href="https://www.google.com/maps/place/Geisel+Library/@32.8797,-117.2362,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View on Google Maps
              </a>
            </div>
          </Popup>
        </Marker>
        {/* Dining Location Markers */}
        {diningLocations.map((location, index) => (
          <Marker key={index} position={location.position} icon={icon}>
            <Popup>
              <div className="text-center">
                <h3 className="font-bold text-lg">{location.name}</h3>
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