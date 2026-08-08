'use client';

import React, { useEffect, useRef, useState } from 'react';

interface SatelliteLeafletMapProps {
  height?: string;
  center?: [number, number];
  zoom?: number;
  showControls?: boolean;
}

export default function SatelliteLeafletMap({
  height = '420px',
  center = [40.7128, -74.0060], // NYC Depot
  zoom = 12,
  showControls = true,
}: SatelliteLeafletMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const tileLayerRef = useRef<any>(null);
  const [mapType, setMapType] = useState<'satellite' | 'streets' | 'dark'>('satellite');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const element = mapContainerRef.current;
    if (!element) return;

    import('leaflet').then((L) => {
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      });

      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
      }

      const map = L.map(element, { zoomControl: false }).setView(center, zoom);
      mapInstanceRef.current = map;

      // Add Zoom Control at bottom right
      L.control.zoom({ position: 'bottomright' }).addTo(map);

      // Tile Layer URLs
      const tileUrls = {
        satellite: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        streets: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        dark: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
      };

      const tileLayer = L.tileLayer(tileUrls[mapType], {
        attribution: '&copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
        maxZoom: 19,
      }).addTo(map);
      tileLayerRef.current = tileLayer;

      // Distribution Depot HQ Marker
      const depotIcon = L.divIcon({
        className: 'custom-depot-marker',
        html: `<div style="background-color:#2563eb; color:white; width:36px; height:36px; border-radius:12px; display:flex; align-items:center; justify-content:center; box-shadow: 0 4px 14px rgba(37,99,235,0.6); font-weight:900; font-size:12px; border:2px solid white;">HQ</div>`,
        iconSize: [36, 36],
        iconAnchor: [18, 18],
      });
      L.marker(center, { icon: depotIcon })
        .addTo(map)
        .bindPopup('<div style="font-family:Inter,sans-serif;"><b>RouteMind HQ Depot</b><br/>Distribution Center Alpha<br/><span style="color:#10b981; font-weight:bold;">● 342 Fleet Vehicles Online</span></div>');

      // Sample Delivery Stops with Coordinates
      const stops: [number, number, string, string, string][] = [
        [40.7589, -73.9851, 'Stop 1: Times Square Depot', 'TRK-442 (Van)', 'On-Time'],
        [40.7829, -73.9654, 'Stop 2: Central Park Hub', 'TRK-109 (Heavy)', 'Delayed +15m'],
        [40.7061, -74.0088, 'Stop 3: Wall Street Financial Center', 'TRK-299 (Van)', 'On-Time'],
        [40.7282, -73.9942, 'Stop 4: Union Square Market', 'VAN-08 (Sprinter)', 'In Transit'],
      ];

      const routePoints: [number, number][] = [center];

      stops.forEach(([lat, lng, name, vehicle, status], index) => {
        routePoints.push([lat, lng]);
        const color = status.includes('Delayed') ? '#f59e0b' : '#10b981';
        const stopIcon = L.divIcon({
          className: 'custom-stop-marker',
          html: `<div style="background-color:${color}; color:white; width:28px; height:28px; border-radius:50%; display:flex; align-items:center; justify-content:center; border:2px solid white; font-weight:800; font-size:12px; box-shadow:0 3px 8px rgba(0,0,0,0.4);">${index + 1}</div>`,
          iconSize: [28, 28],
          iconAnchor: [14, 14],
        });
        L.marker([lat, lng], { icon: stopIcon })
          .addTo(map)
          .bindPopup(`<div style="font-family:Inter,sans-serif;"><b>${name}</b><br/>Vehicle: ${vehicle}<br/><span style="color:${color}; font-weight:bold;">● ${status}</span></div>`);
      });

      routePoints.push(center);

      // Draw Polyline Route Arc
      L.polyline(routePoints, {
        color: '#3b82f6',
        weight: 5,
        opacity: 0.9,
        dashArray: '6, 8',
      }).addTo(map);
    });

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [center, zoom, mapType]);

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-sm relative group">
      {/* Layer Toggle Controls */}
      {showControls && (
        <div className="absolute top-3 right-3 z-[400] bg-slate-900/90 backdrop-blur-md p-1 rounded-xl border border-slate-700/80 flex items-center gap-1 shadow-lg">
          <button
            onClick={() => setMapType('satellite')}
            className={`px-3 py-1.5 rounded-lg text-xs font-extrabold transition cursor-pointer ${
              mapType === 'satellite' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            🛰️ Satellite
          </button>
          <button
            onClick={() => setMapType('streets')}
            className={`px-3 py-1.5 rounded-lg text-xs font-extrabold transition cursor-pointer ${
              mapType === 'streets' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            🗺️ Map
          </button>
          <button
            onClick={() => setMapType('dark')}
            className={`px-3 py-1.5 rounded-lg text-xs font-extrabold transition cursor-pointer ${
              mapType === 'dark' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            🌙 Dark
          </button>
        </div>
      )}

      <div ref={mapContainerRef} style={{ height }} className="w-full z-10" />
    </div>
  );
}
