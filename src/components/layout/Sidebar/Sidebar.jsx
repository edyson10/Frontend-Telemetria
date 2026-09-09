import {
  Bell,
  Car,
  FileText,
  Gauge,
  Map,
  Route,
  Settings,
  Truck,
} from 'lucide-react'

import './Sidebar.css'

const navigationItems = [
  {
    label: 'Dashboard',
    icon: Gauge,
    active: true,
  },
  {
    label: 'Vehículos',
    icon: Car,
  },
  {
    label: 'Mapa',
    icon: Map,
  },
  {
    label: 'Alertas',
    icon: Bell,
  },
  {
    label: 'Rutas',
    icon: Route,
  },
  {
    label: 'Reportes',
    icon: FileText,
  },
  {
    label: 'Configuración',
    icon: Settings,
  },
]

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <div className="sidebar__brand-icon">
          <Truck size={24} strokeWidth={2} />
        </div>

        <span className="sidebar__brand-name">
          Fleet Telemetry
        </span>
      </div>

      <nav className="sidebar__navigation" aria-label="Navegación principal">
        {navigationItems.map((item) => {
          const Icon = item.icon

          return (
            <button
              key={item.label}
              type="button"
              className={`sidebar__navigation-item ${
                item.active ? 'sidebar__navigation-item--active' : ''
              }`}
            >
              <Icon size={20} strokeWidth={2} />

              <span>{item.label}</span>
            </button>
          )
        })}
      </nav>

      <div className="sidebar__user">
        <div className="sidebar__user-avatar">
          JD
        </div>

        <div className="sidebar__user-information">
          <span className="sidebar__user-name">
            Juan Díaz
          </span>

          <span className="sidebar__user-role">
            Administrador
          </span>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar