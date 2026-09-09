import {
  AlertTriangle,
  Car,
  GitBranch,
  Pause,
} from 'lucide-react'

export const dashboardStats = [
  {
    id: 'active-vehicles',
    title: 'Vehículos activos',
    value: 12,
    trend: '3%',
    trendDirection: 'up',
    icon: 'vehicle',
    variant: 'primary',
  },
  {
    id: 'active-alerts',
    title: 'Alertas activas',
    value: 5,
    trend: '2',
    trendDirection: 'up',
    icon: 'alert',
    variant: 'danger',
  },
  {
    id: 'active-routes',
    title: 'Rutas en ejecución',
    value: 8,
    trend: '3',
    trendDirection: 'up',
    icon: 'route',
    variant: 'primary',
  },
  {
    id: 'stopped-vehicles',
    title: 'Vehículos detenidos',
    value: 2,
    icon: 'stop',
    variant: 'purple',
  },
]

export const dashboardVehicles = [
  {
    id: 'VH-001',
    latitude: 6.2442,
    longitude: -75.5812,
    status: 'MOVING',
  },
  {
    id: 'VH-002',
    latitude: 6.2512,
    longitude: -75.5748,
    status: 'MOVING',
  },
  {
    id: 'VH-003',
    latitude: 6.2388,
    longitude: -75.5895,
    status: 'STOPPED',
  },
  {
    id: 'VH-004',
    latitude: 6.2601,
    longitude: -75.5705,
    status: 'ALERT',
  },
]

export const recentAlerts = [
  {
    id: 1,
    type: 'SPEED',
    title: 'Exceso de velocidad',
    vehicleId: 'VH-ALERT-001',
    value: '120 km/h',
    time: '15:01',
  },
  {
    id: 2,
    type: 'STOPPED',
    title: 'Vehículo detenido',
    vehicleId: 'VH-STOP-002',
    value: '> 10 min',
    time: '14:58',
  },
  {
    id: 3,
    type: 'ROUTE',
    title: 'Fuera de ruta',
    vehicleId: 'VH-ALERT-003',
    value: 'Zona no permitida',
    time: '14:45',
  },
  {
    id: 4,
    type: 'SPEED',
    title: 'Exceso de velocidad',
    vehicleId: 'VH-ALERT-004',
    value: '110 km/h',
    time: '14:32',
  },
  {
    id: 5,
    type: 'STOPPED',
    title: 'Vehículo detenido',
    vehicleId: 'VH-STOP-005',
    value: '> 15 min',
    time: '14:20',
  },
]