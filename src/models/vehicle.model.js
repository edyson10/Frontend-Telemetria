const vehicleStatus = {
  MOVING: 'MOVING',
  STOPPED: 'STOPPED',
}

export function createVehicle(data) {
  return {
    vehicleId: data.vehicleId,
    latitude: data.lat,
    longitude: data.lng,
    timestamp: data.timestamp,
    status: data.status,
  }
}

export { vehicleStatus }