import apiClient from '../core/http/apiClient'
import { createVehicle } from '../models/vehicle.model'

async function getVehicles() {
  const response = await apiClient.get('/api/v1/vehicles')

  if (!Array.isArray(response)) {
    throw new Error('La respuesta de vehículos no tiene un formato válido')
  }

  return response.map(createVehicle)
}

const vehicleService = {
  getVehicles,
}

export default vehicleService