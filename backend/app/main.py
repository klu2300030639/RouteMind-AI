import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.endpoints import router as api_router

app = FastAPI(
    title='RouteMind AI Enterprise Logistics API',
    description='Google OR-Tools powered Vehicle Routing Problem (VRP) & Disruption AI Engine',
    version='1.0.0'
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

app.include_router(api_router, prefix='/api')

@app.get('/')
def root():
    return {'message': 'RouteMind AI FastAPI Service is Running', 'docs': '/docs'}

if __name__ == '__main__':
    uvicorn.run('main:app', host='0.0.0.0', port=8000, reload=True)
