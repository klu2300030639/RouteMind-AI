from fastapi import APIRouter, UploadFile, File, HTTPException
from typing import List, Dict, Any
from app.models.schemas import Order, Vehicle, Driver, TrafficEvent, OptimizationRequest, OptimizationResponse, SimulationRequest, SimulationResponse
from app.services.data_loader import DataLoader
from app.services.vrp_solver import VRPOptimizer
from app.services.disruption_engine import DisruptionEngine

router = APIRouter()

@router.get('/health')
def health_check():
    return {'status': 'healthy', 'service': 'RouteMind AI Backend', 'version': '1.0.0'}

@router.get('/orders', response_model=List[Order])
def get_orders():
    return DataLoader.get_orders()

@router.get('/vehicles', response_model=List[Vehicle])
def get_vehicles():
    return DataLoader.get_vehicles()

@router.get('/drivers', response_model=List[Driver])
def get_drivers():
    return DataLoader.get_drivers()

@router.get('/traffic-events', response_model=List[TrafficEvent])
def get_traffic_events():
    return DataLoader.get_traffic_events()

@router.post('/optimize', response_model=OptimizationResponse)
def optimize_routes(req: OptimizationRequest = OptimizationRequest()):
    orders = req.orders_override if req.orders_override else DataLoader.get_orders()
    vehicles = DataLoader.get_vehicles()
    drivers = DataLoader.get_drivers()
    
    solver = VRPOptimizer(orders, vehicles, drivers)
    return solver.solve()

@router.post('/simulate', response_model=SimulationResponse)
def simulate_disruption(req: SimulationRequest):
    orders = DataLoader.get_orders()
    vehicles = DataLoader.get_vehicles()
    drivers = DataLoader.get_drivers()
    return DisruptionEngine.simulate(req, orders, vehicles, drivers)

@router.get('/analytics')
def get_analytics_metrics():
    return {
        'fleet_utilization_pct': 88.4,
        'active_deliveries': 42,
        'on_time_delivery_rate': 96.8,
        'total_fuel_saved_liters': 342.5,
        'co2_reduction_kg': 890.2,
        'weekly_efficiency_trend': [
            {'day': 'Mon', 'efficiency': 91.2, 'fuel': 48},
            {'day': 'Tue', 'efficiency': 93.5, 'fuel': 52},
            {'day': 'Wed', 'efficiency': 94.8, 'fuel': 45},
            {'day': 'Thu', 'efficiency': 96.1, 'fuel': 41},
            {'day': 'Fri', 'efficiency': 97.4, 'fuel': 38},
        ]
    }
