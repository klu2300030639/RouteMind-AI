from pydantic import BaseModel, Field
from typing import List, Optional, Dict, Any

class Order(BaseModel):
    order_id: str
    customer_name: str
    address: str
    latitude: float
    longitude: float
    weight_kg: float
    time_window_start: str = '08:00'
    time_window_end: str = '17:00'
    priority: str = 'NORMAL'
    status: str = 'PENDING'

class Vehicle(BaseModel):
    vehicle_id: str
    model: str
    driver_id: str
    capacity_kg: float
    max_distance_km: float
    fuel_type: str
    status: str
    current_lat: float
    current_lng: float

class Driver(BaseModel):
    driver_id: str
    name: str
    phone: str
    shift_start: str
    shift_end: str
    rating: float
    vehicle_assigned: str
    status: str

class TrafficEvent(BaseModel):
    event_id: str
    type: str
    severity: str
    latitude: float
    longitude: float
    radius_km: float
    delay_mins: float
    description: str
    status: str

class RouteStop(BaseModel):
    sequence: int
    order_id: str
    customer_name: str
    address: str
    lat: float
    lng: float
    arrival_time: str
    weight_kg: float
    status: str

class OptimizedRoute(BaseModel):
    vehicle_id: str
    driver_name: str
    stops: List[RouteStop]
    total_distance_km: float
    total_time_mins: float
    total_weight_kg: float
    capacity_utilization_pct: float
    status: str

class OptimizationRequest(BaseModel):
    max_vehicles: Optional[int] = 5
    minimize_cost: Optional[bool] = True
    consider_time_windows: Optional[bool] = True
    orders_override: Optional[List[Order]] = None

class OptimizationResponse(BaseModel):
    routes: List[OptimizedRoute]
    unassigned_orders: List[str]
    total_distance_saved_km: float
    total_fuel_saved_liters: float
    total_time_saved_mins: float
    optimization_score: float

class SimulationRequest(BaseModel):
    event_type: str  # TRAFFIC_DELAY, VEHICLE_BREAKDOWN, ROAD_CLOSURE, NEW_PICKUP
    target_id: Optional[str] = None
    severity: Optional[str] = 'HIGH'
    additional_order: Optional[Order] = None

class SimulationResponse(BaseModel):
    event_id: str
    event_type: str
    affected_vehicle_id: Optional[str]
    affected_stops: List[str]
    ai_recommendation: str
    confidence_score: float
    business_impact: Dict[str, Any]
    recalculated_routes: List[OptimizedRoute]
