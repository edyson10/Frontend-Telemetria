import './RecentAlerts.css'

function getAlertPresentation(type) {
  switch (type) {
    case 'VEHICLE_STOPPED':
      return {
        icon: 'Ⅱ',
        cssType: 'stopped',
      }

    case 'SPEED':
      return {
        icon: '⚠',
        cssType: 'speed',
      }

    case 'ROUTE':
      return {
        icon: '⌁',
        cssType: 'route',
      }

    default:
      return {
        icon: '!',
        cssType: 'default',
      }
  }
}

function formatAlertTime(timestamp) {
  if (!timestamp) {
    return '—'
  }

  const date = new Date(timestamp)

  if (Number.isNaN(date.getTime())) {
    return '—'
  }

  return date.toLocaleTimeString('es-CO', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })
}

function RecentAlerts({
  alerts = [],
  loading = false,
  error = null,
}) {
  return (
    <section className="recent-alerts">
      <div className="recent-alerts__header">
        <h2>Últimas alertas</h2>

        <button type="button">
          Ver todas
          <span>→</span>
        </button>
      </div>

      <div className="recent-alerts__list">
        {loading && (
          <p>Cargando alertas...</p>
        )}

        {!loading && error && (
          <p>No fue posible cargar las alertas.</p>
        )}

        {!loading && !error && alerts.length === 0 && (
          <p>No hay alertas recientes.</p>
        )}

        {!loading &&
          !error &&
          alerts.map((alert, index) => {
            const presentation = getAlertPresentation(alert.type)

            return (
              <article
                key={`${alert.vehicleId}-${alert.timestamp}-${index}`}
                className={`recent-alert recent-alert--${presentation.cssType}`}
              >
                <div className="recent-alert__icon">
                  {presentation.icon}
                </div>

                <div className="recent-alert__content">
                  <div className="recent-alert__title">
                    {alert.message}
                  </div>

                  <div className="recent-alert__vehicle">
                    {alert.vehicleId}
                  </div>
                </div>

                <div className="recent-alert__information">
                  <span>
                    {formatAlertTime(alert.timestamp)}
                  </span>

                  <strong>
                    —
                  </strong>
                </div>
              </article>
            )
          })}
      </div>
    </section>
  )
}

export default RecentAlerts