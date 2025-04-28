"use client";
import React, { useEffect, useState } from "react";
import dynamic from 'next/dynamic';
import "leaflet/dist/leaflet.css";

// Dynamically import the map components to avoid SSR issues
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);

type DiningLocation = {
  name: string;
  position: [number, number];
  link: string;
};

export default function MapSection({ diningLocations }: { diningLocations: DiningLocation[] }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Fix for default marker icons in Leaflet
    const fixLeafletIcons = async () => {
      const L = (await import('leaflet')).default;
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: '/leaflet/marker-icon-2x.png',
        iconUrl: '/leaflet/marker-icon.png',
        shadowUrl: '/leaflet/marker-shadow.png',
      });
    };

    fixLeafletIcons();
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[500px] xl:h-[500px] bg-gray-800 rounded-xl animate-pulse" />
    );
  }

  return (
    <div className="mb-12">
      <MapContainer
        center={[32.8797, -117.237]}
        zoom={16}
        scrollWheelZoom={false}
        style={{
          height: "300px",
          width: "100%",
          borderRadius: "1rem",
          border: "2px solid #1f2937",
        }}
        className="sm:h-[400px] md:h-[500px] lg:h-[500px] xl:h-[500px]"
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution="&copy; <a href='https://carto.com/attributions'>CARTO</a>"
        />
        {/* Event Pin */}
        <Marker position={[32.88045364967893, -117.23755937290522]}>
          <Popup>
            <span className="font-bold text-red-500">Event Location</span>
          </Popup>
        </Marker>
        {/* Pins for each restaurant */}
        {diningLocations.map(({ name, position, link }) => (
          <Marker key={name} position={position}>
            <Popup>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline font-bold"
              >
                {name}
              </a>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
} 