'use client';

import React, { useEffect, useRef } from 'react';

interface LeafletMapProps {
  height?: string;
  center?: [number, number];
  zoom?: number;
}

export default function LeafletMap({
  height = '400px',
  center = [40.7128, -74.0060],
  zoom = 12,
}: LeafletMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

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

      const map = L.map(element).setView(center, zoom);
      mapInstanceRef.current = map;

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 19,
      }).addTo(map);

      const depotIcon = L.divIcon({
        className: 'custom-depot-marker',
        html: '<div style="background-color:#2563eb; color:white; width:32px; height:32px; border-radius:10px; display:flex; align-items:center; justify-content:center; box-shadow: 0 4px 12px rgba(37,99,235,0.4); font-weight:bold; font-size:12px;">HQ</div>',
        iconSize: [32, 32],
        iconAnchor: [16, 16],
      });
      L.marker(center, { icon: depotIcon })
        .addTo(map)
        .bindPopup('<b>RouteMind Logistics HQ</b><br/>Distribution Center Alpha');

      const stops: [number, number, string][] = [
        [40.7589, -73.9851, 'Stop 1: Times Square Depot'],
        [40.7829, -73.9654, 'Stop 2: Central Park Hub'],
        [40.7061, -74.0088, 'Stop 3: Wall Street Financial Center'],
        [40.7282, -73.9942, 'Stop 4: Union Square Market'],
      ];

      const routePoints: [number, number][] = [center];

      stops.forEach(([lat, lng, name], index) => {
        routePoints.push([lat, lng]);
        const stopIcon = L.divIcon({
          className: 'custom-stop-marker',
          html: `<div style="background-color:#10b981; color:white; width:26px; height:26px; border-radius:50%; display:flex; align-items:center; justify-content:center; border:2px solid white; font-weight:bold; font-size:11px; box-shadow:0 2px 6px rgba(0,0,0,0.2);">${index + 1}</div>`,
          iconSize: [26, 26],
          iconAnchor: [13, 13],
        });
        L.marker([lat, lng], { icon: stopIcon })
          .addTo(map)
          .bindPopup(`<b>${name}</b><br/>ETA: 10:${15 + index * 20} AM`);
      });

      routePoints.push(center);

      L.polyline(routePoints, {
        color: '#2563eb',
        weight: 4,
        opacity: 0.8,
        dashArray: '8, 8',
      }).addTo(map);
    });

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [center, zoom]);

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm relative">
      <div ref={mapContainerRef} style={{ height }} className="w-full z-10" />
    </div>
  );
}
