import apiClient from '../core/http/apiClient'
import { createAlert } from '../models/alert.model'

async function getRecentAlerts(limit = 20) {
  const response = await apiClient.get(`/api/v1/alerts?limit=${limit}`)

  if (!Array.isArray(response)) {
    throw new Error('La respuesta de alertas no tiene un formato válido')
  }

  return response.map(createAlert)
}

const alertService = {
  getRecentAlerts,
}

export default alertService