export interface VrpSolveRequest {
  vehicles: number;
  capacity: number;
  stops: Array<{ id: string; lat: number; lng: number; demand: number }>;
}

export interface VrpSolveResponse {
  status: string;
  total_distance: number;
  routes: Array<{ vehicle_id: string; stop_ids: string[]; distance: number }>;
}

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || 'https://routemind-ai-xpe2.onrender.com';

export const api = {
  solveVrp: async (data: VrpSolveRequest): Promise<VrpSolveResponse> => {
    try {
      const res = await fetch(`${BACKEND_URL}/api/vrp/solve`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('API Error');
      return await res.json();
    } catch {
      return { status: 'mocked', total_distance: 124.8, routes: [] };
    }
  },
  getOrders: async () => [],
  getVehicles: async () => [],
  getDrivers: async () => [],
  getFleetTelemetry: async () => [],
  getTrafficEvents: async () => [],
};
