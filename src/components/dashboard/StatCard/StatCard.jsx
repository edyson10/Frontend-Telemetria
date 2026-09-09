import {
  Car,
  TriangleAlert,
  Route,
  Pause,
} from 'lucide-react'

import './StatCard.css'

const iconMap = {
  vehicle: Car,
  alert: TriangleAlert,
  route: Route,
  stop: Pause,
}

function StatCard({
  title,
  value,
  trend,
  trendDirection,
  icon,
  variant = 'primary',
}) {
  const Icon = iconMap[icon]

  return (
    <article className={`stat-card stat-card--${variant}`}>
      <div className="stat-card__icon">
        {Icon && <Icon size={22} strokeWidth={2} />}
      </div>

      <div className="stat-card__content">
        <span className="stat-card__title">
          {title}
        </span>

        <strong className="stat-card__value">
          {value}
        </strong>

        {trend && (
          <span
            className={`stat-card__trend stat-card__trend--${trendDirection}`}
          >
            {trendDirection === 'up' ? '↗' : '↘'} {trend}
          </span>
        )}
      </div>
    </article>
  )
}

export default StatCard