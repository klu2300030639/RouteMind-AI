import { Order, Vehicle, Driver, TrafficEvent, OptimizedRoute, AnalyticsMetrics } from './types';

export const MOCK_ORDERS: Order[] = [
  { order_id: 'ORD-8001', customer_name: 'Metro Logistics Hub', address: '101 Industrial Pkwy, Chicago, IL', latitude: 41.8781, longitude: -87.6298, weight_kg: 450, time_window_start: '08:00', time_window_end: '12:00', priority: 'HIGH', status: 'PENDING' },
  { order_id: 'ORD-8002', customer_name: 'Apex Retail Store #14', address: '540 N Michigan Ave, Chicago, IL', latitude: 41.8923, longitude: -87.6241, weight_kg: 120, time_window_start: '09:00', time_window_end: '13:00', priority: 'NORMAL', status: 'PENDING' },
  { order_id: 'ORD-8003', customer_name: 'Summit Pharma Distribution', address: '220 W Adams St, Chicago, IL', latitude: 41.8795, longitude: -87.6352, weight_kg: 85, time_window_start: '08:30', time_window_end: '11:00', priority: 'URGENT', status: 'PENDING' },
  { order_id: 'ORD-8004', customer_name: 'Global Foods Market', address: '1200 S Wabash Ave, Chicago, IL', latitude: 41.8671, longitude: -87.6259, weight_kg: 680, time_window_start: '10:00', time_window_end: '15:00', priority: 'NORMAL', status: 'PENDING' },
  { order_id: 'ORD-8005', customer_name: 'Midwest Electronics Hub', address: '900 W Madison St, Chicago, IL', latitude: 41.8818, longitude: -87.6501, weight_kg: 310, time_window_start: '11:00', time_window_end: '16:00', priority: 'HIGH', status: 'PENDING' },
  { order_id: 'ORD-8006', customer_name: 'Horizon Medical Supply', address: '1700 W Van Buren St, Chicago, IL', latitude: 41.8762, longitude: -87.6698, weight_kg: 140, time_window_start: '09:30', time_window_end: '12:30', priority: 'URGENT', status: 'PENDING' },
  { order_id: 'ORD-8007', customer_name: 'Urban Outfitters Depot', address: '1500 N Damen Ave, Chicago, IL', latitude: 41.9087, longitude: -87.6774, weight_kg: 290, time_window_start: '12:00', time_window_end: '17:00', priority: 'NORMAL', status: 'PENDING' },
  { order_id: 'ORD-8008', customer_name: 'Lincoln Park Market', address: '2000 N Clark St, Chicago, IL', latitude: 41.9182, longitude: -87.6375, weight_kg: 420, time_window_start: '10:00', time_window_end: '14:00', priority: 'HIGH', status: 'PENDING' },
];

export const MOCK_VEHICLES: Vehicle[] = [
  { vehicle_id: 'VH-101', model: 'Freightliner Custom Van', driver_id: 'DRV-01', capacity_kg: 1200, max_distance_km: 350, fuel_type: 'DIESEL', status: 'IN_TRANSIT', current_lat: 41.8781, current_lng: -87.6298 },
  { vehicle_id: 'VH-102', model: 'Ford E-Transit Electric', driver_id: 'DRV-02', capacity_kg: 1000, max_distance_km: 250, fuel_type: 'ELECTRIC', status: 'IN_TRANSIT', current_lat: 41.8818, current_lng: -87.6501 },
  { vehicle_id: 'VH-103', model: 'Isuzu NPR Box Truck', driver_id: 'DRV-03', capacity_kg: 2500, max_distance_km: 500, fuel_type: 'DIESEL', status: 'IN_TRANSIT', current_lat: 41.8671, current_lng: -87.6259 },
  { vehicle_id: 'VH-104', model: 'Mercedes Sprinter EV', driver_id: 'DRV-04', capacity_kg: 1100, max_distance_km: 280, fuel_type: 'ELECTRIC', status: 'MAINTENANCE', current_lat: 41.9087, current_lng: -87.6774 },
  { vehicle_id: 'VH-105', model: 'Volvo VNR Electric Heavy', driver_id: 'DRV-05', capacity_kg: 4000, max_distance_km: 450, fuel_type: 'HYBRID', status: 'ACTIVE', current_lat: 41.8762, current_lng: -87.6698 },
];

export const MOCK_DRIVERS: Driver[] = [
  { driver_id: 'DRV-01', name: 'Marcus Vance', phone: '+1 (312) 555-0142', shift_start: '07:30', shift_end: '16:30', rating: 4.90, vehicle_assigned: 'VH-101', status: 'ON_ROUTE' },
  { driver_id: 'DRV-02', name: 'Elena Rostova', phone: '+1 (312) 555-0188', shift_start: '08:00', shift_end: '17:00', rating: 4.95, vehicle_assigned: 'VH-102', status: 'ON_ROUTE' },
  { driver_id: 'DRV-03', name: 'David Kalu', phone: '+1 (312) 555-0219', shift_start: '07:00', shift_end: '16:00', rating: 4.85, vehicle_assigned: 'VH-103', status: 'ON_ROUTE' },
  { driver_id: 'DRV-04', name: 'Sarah Chen', phone: '+1 (312) 555-0311', shift_start: '09:00', shift_end: '18:00', rating: 4.78, vehicle_assigned: 'VH-104', status: 'OFF_DUTY' },
  { driver_id: 'DRV-05', name: 'Carlos Mendez', phone: '+1 (312) 555-0455', shift_start: '08:00', shift_end: '17:00', rating: 4.92, vehicle_assigned: 'VH-105', status: 'ON_ROUTE' },
];

export const MOCK_TRAFFIC_EVENTS: TrafficEvent[] = [
  { event_id: 'EVT-901', type: 'CONSTRUCTION', severity: 'HIGH', latitude: 41.8850, longitude: -87.6300, radius_km: 1.2, delay_mins: 25, description: 'I-90 Express Lane Closure for Paving', status: 'ACTIVE' },
  { event_id: 'EVT-902', type: 'ACCIDENT', severity: 'CRITICAL', latitude: 41.8750, longitude: -87.6400, radius_km: 0.8, delay_mins: 40, description: 'Multi-vehicle collision on Eisenhower Expy', status: 'ACTIVE' },
  { event_id: 'EVT-903', type: 'WEATHER', severity: 'MEDIUM', latitude: 41.9100, longitude: -87.6700, radius_km: 2.5, delay_mins: 15, description: 'Localized Heavy Rainfall & Low Visibility', status: 'ACTIVE' },
];

export const MOCK_OPTIMIZED_ROUTES: OptimizedRoute[] = [
  {
    vehicle_id: 'VH-101',
    driver_name: 'Marcus Vance',
    stops: [
      { sequence: 1, order_id: 'ORD-8001', customer_name: 'Metro Logistics Hub', address: '101 Industrial Pkwy, Chicago', lat: 41.8781, lng: -87.6298, arrival_time: '08:45', weight_kg: 450, status: 'DELIVERED' },
      { sequence: 2, order_id: 'ORD-8003', customer_name: 'Summit Pharma Distribution', address: '220 W Adams St, Chicago', lat: 41.8795, lng: -87.6352, arrival_time: '09:30', weight_kg: 85, status: 'IN_TRANSIT' },
      { sequence: 3, order_id: 'ORD-8002', customer_name: 'Apex Retail Store #14', address: '540 N Michigan Ave, Chicago', lat: 41.8923, lng: -87.6241, arrival_time: '10:15', weight_kg: 120, status: 'PENDING' },
    ],
    total_distance_km: 28.4,
    total_time_mins: 110,
    total_weight_kg: 655,
    capacity_utilization_pct: 54.5,
    status: 'ON_SCHEDULE',
  },
  {
    vehicle_id: 'VH-102',
    driver_name: 'Elena Rostova',
    stops: [
      { sequence: 1, order_id: 'ORD-8005', customer_name: 'Midwest Electronics Hub', address: '900 W Madison St, Chicago', lat: 41.8818, lng: -87.6501, arrival_time: '09:10', weight_kg: 310, status: 'IN_TRANSIT' },
      { sequence: 2, order_id: 'ORD-8006', customer_name: 'Horizon Medical Supply', address: '1700 W Van Buren St, Chicago', lat: 41.8762, lng: -87.6698, arrival_time: '10:00', weight_kg: 140, status: 'PENDING' },
      { sequence: 3, order_id: 'ORD-8007', customer_name: 'Urban Outfitters Depot', address: '1500 N Damen Ave, Chicago', lat: 41.9087, lng: -87.6774, arrival_time: '11:20', weight_kg: 290, status: 'PENDING' },
    ],
    total_distance_km: 34.2,
    total_time_mins: 135,
    total_weight_kg: 740,
    capacity_utilization_pct: 74.0,
    status: 'OPTIMIZED',
  },
];

export const MOCK_ANALYTICS: AnalyticsMetrics = {
  fleet_utilization_pct: 88.4,
  active_deliveries: 42,
  on_time_delivery_rate: 96.8,
  total_fuel_saved_liters: 342.5,
  co2_reduction_kg: 890.2,
  weekly_efficiency_trend: [
    { day: 'Mon', efficiency: 91.2, fuel: 48 },
    { day: 'Tue', efficiency: 93.5, fuel: 52 },
    { day: 'Wed', efficiency: 94.8, fuel: 45 },
    { day: 'Thu', efficiency: 96.1, fuel: 41 },
    { day: 'Fri', efficiency: 97.4, fuel: 38 },
  ],
};
