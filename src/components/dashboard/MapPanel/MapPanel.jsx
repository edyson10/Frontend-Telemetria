import './MapPanel.css'

function getVehiclePosition(vehicle, index) {
  /*
   * El mapa actual es una representación visual del área.
   * Convertimos las coordenadas reales a una posición dentro
   * del área visual del mapa.
   *
   * El padding evita que el marcador quede pegado a los bordes.
   */
  const mapBounds = {
    minLat: 4.45,
    maxLat: 6.35,
    minLng: -75.75,
    maxLng: -73.95,
  }

  const latitude = Number(vehicle.latitude)
  const longitude = Number(vehicle.longitude)

  if (
    Number.isNaN(latitude) ||
    Number.isNaN(longitude)
  ) {
    return {
      left: `${20 + index * 20}%`,
      top: `${30 + (index % 2) * 30}%`,
    }
  }

  const longitudePercentage =
    ((longitude - mapBounds.minLng) /
      (mapBounds.maxLng - mapBounds.minLng)) *
    100

  const latitudePercentage =
    ((mapBounds.maxLat - latitude) /
      (mapBounds.maxLat - mapBounds.minLat)) *
    100

  return {
    left: `${Math.min(Math.max(longitudePercentage, 5), 95)}%`,
    top: `${Math.min(Math.max(latitudePercentage, 5), 95)}%`,
  }
}

function MapPanel({ vehicles = [] }) {
  return (
    <section className="map-panel">
      <div className="map-panel__header">
        <div>
          <h2>Mapa en tiempo real</h2>
          <span>Ubicación actual de la flota</span>
        </div>

        <span className="map-panel__update">
          Última actualización: hace unos segundos
        </span>
      </div>

      <div className="map-panel__map">
        <div className="map-panel__controls">
          <button type="button" aria-label="Acercar mapa">
            +
          </button>

          <button type="button" aria-label="Alejar mapa">
            −
          </button>
        </div>

        <div className="map-panel__location-label map-panel__location-label--usaquen">
          USAQUÉN
        </div>

        <div className="map-panel__location-label map-panel__location-label--chapinero">
          CHAPINERO
        </div>

        <div className="map-panel__location-label map-panel__location-label--teusaquillo">
          TEUSAQUILLO
        </div>

        <div className="map-panel__location-label map-panel__location-label--kennedy">
          KENNEDY
        </div>

        <div className="map-panel__city">
          Bogotá
        </div>

        {vehicles.map((vehicle) => (
          <div
            key={vehicle.vehicleId}
            className={`map-panel__vehicle map-panel__vehicle--${(
              vehicle.status || 'MOVING'
            ).toLowerCase()}`}
            style={getVehiclePosition(vehicle)}
            title={`${vehicle.vehicleId} - ${vehicle.latitude}, ${vehicle.longitude}`}
          >
            <span>🚗</span>
          </div>
        ))}
      </div>

      <div className="map-panel__legend">
        <div>
          <span className="map-panel__legend-dot map-panel__legend-dot--moving" />
          <span>En movimiento</span>
        </div>

        <div>
          <span className="map-panel__legend-dot map-panel__legend-dot--stopped" />
          <span>Detenido</span>
        </div>

        <div>
          <span className="map-panel__legend-dot map-panel__legend-dot--alert" />
          <span>Alerta</span>
        </div>
      </div>
    </section>
  )
}

export default MapPanel