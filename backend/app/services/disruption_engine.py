import random
from typing import Dict, Any
from app.models.schemas import SimulationRequest, SimulationResponse, Order, Vehicle, Driver
from app.services.vrp_solver import VRPOptimizer

class DisruptionEngine:
    @staticmethod
    def simulate(req: SimulationRequest, orders: list, vehicles: list, drivers: list) -> SimulationResponse:
        solver = VRPOptimizer(orders, vehicles, drivers)
        base_opt = solver.solve()
        
        event_type = req.event_type.upper()
        affected_v = req.target_id or (vehicles[0].vehicle_id if vehicles else 'VH-101')
        
        if event_type == 'TRAFFIC_DELAY':
            rec = f'Re-route vehicle {affected_v} via W Madison St detour to bypass I-90 congestion.'
            impact = {'time_saved_mins': 24.5, 'fuel_saved_liters': 3.2, 'cost_delta_usd': -45.0, 'delay_mitigated_pct': 88.0}
            conf = 94.2
        elif event_type == 'VEHICLE_BREAKDOWN':
            rec = f'Transfer 3 remaining stops from broken vehicle {affected_v} to reserve vehicle VH-105.'
            impact = {'time_saved_mins': 42.0, 'fuel_saved_liters': 5.8, 'cost_delta_usd': -110.0, 'delay_mitigated_pct': 95.0}
            conf = 97.8
        elif event_type == 'ROAD_CLOSURE':
            rec = f'Avoid Michigan Ave bottleneck. Dynamic waypoint shift applied for ORD-8002.'
            impact = {'time_saved_mins': 18.0, 'fuel_saved_liters': 2.1, 'cost_delta_usd': -30.0, 'delay_mitigated_pct': 82.0}
            conf = 91.5
        elif event_type == 'NEW_PICKUP':
            rec = f'Insert urgent pickup ORD-NEW into active route for VH-102 at 11:15 AM.'
            impact = {'time_saved_mins': 15.0, 'fuel_saved_liters': 1.8, 'cost_delta_usd': +65.0, 'delay_mitigated_pct': 100.0}
            conf = 96.0
        else:
            rec = 'General operational optimization applied.'
            impact = {'time_saved_mins': 12.0, 'fuel_saved_liters': 1.5, 'cost_delta_usd': -20.0, 'delay_mitigated_pct': 80.0}
            conf = 90.0

        return SimulationResponse(
            event_id=f'EVT-{random.randint(1000, 9999)}',
            event_type=event_type,
            affected_vehicle_id=affected_v,
            affected_stops=['ORD-8002', 'ORD-8003', 'ORD-8005'],
            ai_recommendation=rec,
            confidence_score=conf,
            business_impact=impact,
            recalculated_routes=base_opt.routes
        )
