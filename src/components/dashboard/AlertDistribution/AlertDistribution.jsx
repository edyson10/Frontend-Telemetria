import { alertDistributionData } from '../../../mocks/dashboard.mock'

import './AlertDistribution.css'

function AlertDistribution() {
  const total = alertDistributionData.reduce(
    (sum, item) => sum + item.value,
    0,
  )

  const radius = 42
  const circumference = 2 * Math.PI * radius

  let accumulated = 0

  const segments = alertDistributionData.map((item) => {
    const percentage = item.value / total

    const segment = {
      ...item,
      percentage,
      offset: accumulated,
    }

    accumulated += percentage

    return segment
  })

  return (
    <section className="alert-distribution">
      <div className="alert-distribution__header">
        <h2>Distribución de alertas</h2>
      </div>

      <div className="alert-distribution__content">
        <div className="alert-distribution__chart">
          <svg viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r={radius}
              fill="none"
              stroke="currentColor"
              strokeWidth="14"
              className="alert-distribution__background"
            />

            {segments.map((segment, index) => (
              <circle
                key={segment.label}
                cx="50"
                cy="50"
                r={radius}
                fill="none"
                stroke="currentColor"
                strokeWidth="14"
                strokeDasharray={`${segment.percentage * circumference} ${circumference}`}
                strokeDashoffset={-segment.offset * circumference}
                className={`alert-distribution__segment alert-distribution__segment--${index}`}
                transform="rotate(-90 50 50)"
              />
            ))}
          </svg>

          <div className="alert-distribution__total">
            <strong>{total}</strong>
            <span>Total</span>
          </div>
        </div>

        <div className="alert-distribution__legend">
          {alertDistributionData.map((item, index) => (
            <div key={item.label}>
              <span
                className={`alert-distribution__legend-dot alert-distribution__legend-dot--${index}`}
              />

              <span>{item.label}</span>

              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AlertDistribution