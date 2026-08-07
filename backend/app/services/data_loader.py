import os
import pandas as pd
from typing import List
from app.models.schemas import Order, Vehicle, Driver, TrafficEvent

DATA_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../../data'))

class DataLoader:
    @staticmethod
    def get_orders() -> List[Order]:
        path = os.path.join(DATA_DIR, 'orders.csv')
        if not os.path.exists(path):
            return []
        df = pd.read_csv(path)
        return [Order(**row) for row in df.to_dict(orient='records')]

    @staticmethod
    def get_vehicles() -> List[Vehicle]:
        path = os.path.join(DATA_DIR, 'vehicles.csv')
        if not os.path.exists(path):
            return []
        df = pd.read_csv(path)
        return [Vehicle(**row) for row in df.to_dict(orient='records')]

    @staticmethod
    def get_drivers() -> List[Driver]:
        path = os.path.join(DATA_DIR, 'drivers.csv')
        if not os.path.exists(path):
            return []
        df = pd.read_csv(path)
        return [Driver(**row) for row in df.to_dict(orient='records')]

    @staticmethod
    def get_traffic_events() -> List[TrafficEvent]:
        path = os.path.join(DATA_DIR, 'traffic_events.csv')
        if not os.path.exists(path):
            return []
        df = pd.read_csv(path)
        return [TrafficEvent(**row) for row in df.to_dict(orient='records')]
