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

export const vehicleStatusData = [
  {
    id: 'VH-ALERT-001',
    status: 'MOVING',
    location: 'Chapinero',
    speed: 85,
    battery: 85,
  },
  {
    id: 'VH-STOP-002',
    status: 'STOPPED',
    location: 'Usaquén',
    speed: 0,
    battery: 60,
  },
  {
    id: 'VH-ALERT-003',
    status: 'MOVING',
    location: 'Teusaquillo',
    speed: 72,
    battery: 90,
  },
  {
    id: 'VH-004',
    status: 'MOVING',
    location: 'Kennedy',
    speed: 65,
    battery: 75,
  },
  {
    id: 'VH-005',
    status: 'STOPPED',
    location: 'Fontibón',
    speed: 0,
    battery: 50,
  },
]

export const averageSpeedData = [
  { time: '00:00', value: 48 },
  { time: '02:00', value: 52 },
  { time: '04:00', value: 61 },
  { time: '06:00', value: 58 },
  { time: '08:00', value: 72 },
  { time: '10:00', value: 68 },
  { time: '12:00', value: 92 },
  { time: '14:00', value: 85 },
  { time: '16:00', value: 76 },
  { time: '18:00', value: 64 },
  { time: '20:00', value: 61 },
  { time: '22:00', value: 63 },
]

export const alertDistributionData = [
  {
    label: 'Exceso de velocidad',
    value: 8,
  },
  {
    label: 'Vehículo detenido',
    value: 5,
  },
  {
    label: 'Fuera de ruta',
    value: 3,
  },
  {
    label: 'Otros',
    value: 2,
  },
]