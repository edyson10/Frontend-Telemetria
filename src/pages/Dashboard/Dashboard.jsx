import StatCard from '../../components/dashboard/StatCard/StatCard'
import MapPanel from '../../components/dashboard/MapPanel/MapPanel'
import RecentAlerts from '../../components/dashboard/RecentAlerts/RecentAlerts'

import { dashboardStats } from '../../mocks/dashboard.mock'

import './Dashboard.css'

function Dashboard() {
  return (
    <section className="dashboard">
      <div className="dashboard__heading">
        <div>
          <h1>¡Hola, Juan!</h1>
          <p>
            Monitorea tu flota en tiempo real
          </p>
        </div>
      </div>

      <div className="dashboard__stats">
        {dashboardStats.map((stat) => (
          <StatCard
            key={stat.id}
            title={stat.title}
            value={stat.value}
            trend={stat.trend}
            trendDirection={stat.trendDirection}
            icon={stat.icon}
            variant={stat.variant}
          />
        ))}
      </div>

      <div className="dashboard__monitoring">
        <MapPanel />
        <RecentAlerts />
      </div>

    </section>
  )
}

export default Dashboard