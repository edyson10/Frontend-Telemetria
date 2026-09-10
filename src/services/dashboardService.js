import vehicleService from './vehicleService'
import alertService from './alertService'

async function getDashboardStats() {
  const [vehicles, alerts] = await Promise.all([
    vehicleService.getVehicles(),
    alertService.getRecentAlerts(20),
  ])

  const activeVehicles = vehicles.filter(
    (vehicle) => vehicle.status === 'MOVING',
  ).length

  const stoppedVehicles = vehicles.filter(
    (vehicle) => vehicle.status === 'STOPPED',
  ).length

  return {
    activeVehicles,
    recentAlerts: alerts.length,
    runningRoutes: null,
    stoppedVehicles,
  }
}

const dashboardService = {
  getDashboardStats,
}

export default dashboardService