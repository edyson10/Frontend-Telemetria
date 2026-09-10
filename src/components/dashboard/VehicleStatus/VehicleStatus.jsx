import './VehicleStatus.css'

function getStatusLabel(status) {
  if (status === 'STOPPED') {
    return 'Detenido'
  }

  return 'En movimiento'
}

function VehicleStatus({
  vehicles = [],
  loading = false,
  error = null,
}) {
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
            {loading && (
              <tr>
                <td colSpan="5">
                  Cargando vehículos...
                </td>
              </tr>
            )}

            {!loading && error && (
              <tr>
                <td colSpan="5">
                  No fue posible cargar los vehículos.
                </td>
              </tr>
            )}

            {!loading && !error && vehicles.length === 0 && (
              <tr>
                <td colSpan="5">
                  No hay vehículos registrados.
                </td>
              </tr>
            )}

            {!loading &&
              !error &&
              vehicles.map((vehicle) => (
                <tr key={vehicle.vehicleId}>
                  <td className="vehicle-status__vehicle">
                    {vehicle.vehicleId}
                  </td>

                  <td>
                    <span
                      className={`vehicle-status__status vehicle-status__status--${(vehicle.status || 'MOVING').toLowerCase()}`}
                    >
                      <span className="vehicle-status__status-dot" />
                      {getStatusLabel(vehicle.status)}
                    </span>
                  </td>

                  <td>
                    {vehicle.latitude}, {vehicle.longitude}
                  </td>

                  <td>
                    —
                  </td>

                  <td>
                    —
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