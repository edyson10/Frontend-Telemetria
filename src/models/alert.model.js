export function createAlert(data) {
  return {
    message: data.message,
    timestamp: data.timestamp,
    type: data.type,
    vehicleId: data.vehicleId,
  }
}