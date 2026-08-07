import { Order, Vehicle, Driver, TrafficEvent, OptimizationResponse, SimulationResponse, AnalyticsMetrics } from './types';
import { MOCK_ORDERS, MOCK_VEHICLES, MOCK_DRIVERS, MOCK_TRAFFIC_EVENTS, MOCK_OPTIMIZED_ROUTES, MOCK_ANALYTICS } from './mockData';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

async function fetchWithFallback<T>(endpoint: string, fallbackData: T): Promise<T> {
  try {
    const res = await fetch(${API_BASE_URL}, { cache: 'no-store' });
    if (!res.ok) throw new Error(HTTP );
    return await res.json();
  } catch (err) {
    console.warn(Backend endpoint  offline, using fallback mock data., err);
    return fallbackData;
  }
}

export const api = {
  getOrders: () => fetchWithFallback<Order[]>('/orders', MOCK_ORDERS),
  getVehicles: () => fetchWithFallback<Vehicle[]>('/vehicles', MOCK_VEHICLES),
  getDrivers: () => fetchWithFallback<Driver[]>('/drivers', MOCK_DRIVERS),
  getTrafficEvents: () => fetchWithFallback<TrafficEvent[]>('/traffic-events', MOCK_TRAFFIC_EVENTS),
  
  optimizeRoutes: async (ordersOverride?: Order[]): Promise<OptimizationResponse> => {
    try {
      const res = await fetch(${API_BASE_URL}/optimize, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orders_override: ordersOverride }),
      });
      if (!res.ok) throw new Error('Optimization failed');
      return await res.json();
    } catch {
      return {
        routes: MOCK_OPTIMIZED_ROUTES,
        unassigned_orders: [],
        total_distance_saved_km: 18.5,
        total_fuel_saved_liters: 4.2,
        total_time_saved_mins: 38.0,
        optimization_score: 96.4,
      };
    }
  },

  simulateDisruption: async (eventType: string, targetId?: string): Promise<SimulationResponse> => {
    try {
      const res = await fetch(${API_BASE_URL}/simulate, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ event_type: eventType, target_id: targetId }),
      });
      if (!res.ok) throw new Error('Simulation failed');
      return await res.json();
    } catch {
      return {
        event_id: EVT-,
        event_type: eventType,
        affected_vehicle_id: targetId || 'VH-101',
        affected_stops: ['ORD-8002', 'ORD-8003'],
        ai_recommendation: Re-route vehicle  via Madison St detour to avoid bottleneck.,
        confidence_score: 95.8,
        business_impact: {
          time_saved_mins: 22.5,
          fuel_saved_liters: 3.4,
          cost_delta_usd: -42.0,
          delay_mitigated_pct: 92.0,
        },
        recalculated_routes: MOCK_OPTIMIZED_ROUTES,
      };
    }
  },

  getAnalytics: () => fetchWithFallback<AnalyticsMetrics>('/analytics', MOCK_ANALYTICS),
};
