import { vehicleStatusData } from '../../../mocks/dashboard.mock'

import './VehicleStatus.css'

function getStatusLabel(status) {
  if (status === 'STOPPED') {
    return 'Detenido'
  }

  return 'En movimiento'
}

function VehicleStatus() {
  return (
    <section className="vehicle-status">
      <div className="vehicle-status__header">
        <h2>Estado de vehículos</h2>

        <button type="button">
          Ver todos
          <span>→</span>
        </button>
      </div>

      <div className="vehicle-status__table-wrapper">
        <table className="vehicle-status__table">
          <thead>
            <tr>
              <th>Vehículo</th>
              <th>Estado</th>
              <th>Última ubicación</th>
              <th>Velocidad</th>
              <th>Batería</th>
            </tr>
          </thead>

          <tbody>
            {vehicleStatusData.map((vehicle) => (
              <tr key={vehicle.id}>
                <td className="vehicle-status__vehicle">
                  {vehicle.id}
                </td>

                <td>
                  <span
                    className={`vehicle-status__status vehicle-status__status--${vehicle.status.toLowerCase()}`}
                  >
                    <span className="vehicle-status__status-dot" />
                    {getStatusLabel(vehicle.status)}
                  </span>
                </td>

                <td>
                  {vehicle.location}
                </td>

                <td>
                  {vehicle.speed} km/h
                </td>

                <td>
                  <div className="vehicle-status__battery">
                    <div className="vehicle-status__battery-track">
                      <div
                        className={`vehicle-status__battery-value ${
                          vehicle.battery <= 60
                            ? 'vehicle-status__battery-value--low'
                            : ''
                        }`}
                        style={{ width: `${vehicle.battery}%` }}
                      />
                    </div>

                    <span>{vehicle.battery}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default VehicleStatus