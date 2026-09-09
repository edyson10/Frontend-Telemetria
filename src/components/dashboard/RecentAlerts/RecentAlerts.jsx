import { recentAlerts } from '../../../mocks/dashboard.mock'

import './RecentAlerts.css'

function getAlertIcon(type) {
  switch (type) {
    case 'SPEED':
      return '⚠'

    case 'STOPPED':
      return 'Ⅱ'

    case 'ROUTE':
      return '⌁'

    default:
      return '!'
  }
}

function RecentAlerts() {
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
        {recentAlerts.map((alert) => (
          <article
            key={alert.id}
            className={`recent-alert recent-alert--${alert.type.toLowerCase()}`}
          >
            <div className="recent-alert__icon">
              {getAlertIcon(alert.type)}
            </div>

            <div className="recent-alert__content">
              <div className="recent-alert__title">
                {alert.title}
              </div>

              <div className="recent-alert__vehicle">
                {alert.vehicleId}
              </div>
            </div>

            <div className="recent-alert__information">
              <span>{alert.time}</span>
              <strong>{alert.value}</strong>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default RecentAlerts