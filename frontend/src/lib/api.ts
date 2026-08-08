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

export const api = {
  solveVrp: async (data: VrpSolveRequest): Promise<VrpSolveResponse> => {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/vrp/solve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
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
