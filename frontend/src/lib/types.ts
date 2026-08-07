export interface Order {
  order_id: string;
  customer_name: string;
  address: string;
  latitude: number;
  longitude: number;
  weight_kg: number;
  time_window_start: string;
  time_window_end: string;
  priority: 'NORMAL' | 'HIGH' | 'URGENT';
  status: 'PENDING' | 'ASSIGNED' | 'DELIVERED';
}

export interface Vehicle {
  vehicle_id: string;
  model: string;
  driver_id: string;
  capacity_kg: number;
  max_distance_km: number;
  fuel_type: string;
  status: 'ACTIVE' | 'IN_TRANSIT' | 'MAINTENANCE' | 'IDLE';
  current_lat: number;
  current_lng: number;
}

export interface Driver {
  driver_id: string;
  name: string;
  phone: string;
  shift_start: string;
  shift_end: string;
  rating: number;
  vehicle_assigned: string;
  status: 'ON_ROUTE' | 'AVAILABLE' | 'OFF_DUTY';
}

export interface TrafficEvent {
  event_id: string;
  type: 'TRAFFIC' | 'ACCIDENT' | 'CONSTRUCTION' | 'WEATHER' | 'ROADBLOCK';
  severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  latitude: number;
  longitude: number;
  radius_km: number;
  delay_mins: number;
  description: string;
  status: 'ACTIVE' | 'RESOLVED';
}

export interface RouteStop {
  sequence: number;
  order_id: string;
  customer_name: string;
  address: string;
  lat: number;
  lng: number;
  arrival_time: string;
  weight_kg: number;
  status: string;
}

export interface OptimizedRoute {
  vehicle_id: string;
  driver_name: string;
  stops: RouteStop[];
  total_distance_km: number;
  total_time_mins: number;
  total_weight_kg: number;
  capacity_utilization_pct: number;
  status: string;
}

export interface OptimizationResponse {
  routes: OptimizedRoute[];
  unassigned_orders: string[];
  total_distance_saved_km: number;
  total_fuel_saved_liters: number;
  total_time_saved_mins: number;
  optimization_score: number;
}

export interface SimulationResponse {
  event_id: string;
  event_type: string;
  affected_vehicle_id?: string;
  affected_stops: string[];
  ai_recommendation: string;
  confidence_score: number;
  business_impact: {
    time_saved_mins: number;
    fuel_saved_liters: number;
    cost_delta_usd: number;
    delay_mitigated_pct: number;
  };
  recalculated_routes: OptimizedRoute[];
}

export interface AnalyticsMetrics {
  fleet_utilization_pct: number;
  active_deliveries: number;
  on_time_delivery_rate: number;
  total_fuel_saved_liters: number;
  co2_reduction_kg: number;
  weekly_efficiency_trend: Array<{ day: string; efficiency: number; fuel: number }>;
}

export type NavTab = 
  | 'dashboard'
  | 'route-planner'
  | 'live-routes'
  | 'route-comparison'
  | 'ai-command'
  | 'event-simulator'
  | 'ai-insights'
  | 'analytics'
  | 'reports'
  | 'settings';
