"use client";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

type DiningLocation = {
  name: string;
  position: [number, number];
  link: string;
};

export default function MapSection({ diningLocations }: { diningLocations: DiningLocation[] }) {
  // Create icons here (client-only)
  const defaultIcon = new L.Icon({
    iconUrl: '/leaflet/marker-icon.png',
    shadowUrl: '/leaflet/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
  const eventIcon = new L.Icon({
    iconUrl: '/leaflet/marker-icon-red.png',
    shadowUrl: '/leaflet/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

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
        <Marker position={[32.88045364967893, -117.23755937290522]} icon={eventIcon}>
          <Popup>
            <span className="font-bold text-red-500">Event Location</span>
          </Popup>
        </Marker>
        {/* Pins for each restaurant */}
        {diningLocations.map(({ name, position, link }) => (
          <Marker key={name} position={position as [number, number]} icon={defaultIcon}>
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