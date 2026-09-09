import { dashboardVehicles } from '../../../mocks/dashboard.mock'

import './MapPanel.css'

function MapPanel() {
  return (
    <section className="map-panel">
      <div className="map-panel__header">
        <div>
          <h2>Mapa en tiempo real</h2>
          <span>Ubicación actual de la flota</span>
        </div>

        <span className="map-panel__update">
          Última actualización: hace 10 segundos
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

        {dashboardVehicles.map((vehicle, index) => (
          <div
            key={vehicle.id}
            className={`map-panel__vehicle map-panel__vehicle--${vehicle.status.toLowerCase()}`}
            style={{
              left: `${20 + index * 20}%`,
              top: `${30 + (index % 2) * 30}%`,
            }}
            title={vehicle.id}
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