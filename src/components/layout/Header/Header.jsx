import {
  Bell,
  CalendarDays,
  Search,
} from 'lucide-react'

import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header__search">
        <Search size={19} strokeWidth={2} />

        <input
          type="search"
          placeholder="Buscar vehículo, placa o ruta..."
          aria-label="Buscar vehículo, placa o ruta"
        />
      </div>

      <div className="header__actions">
        <button
          type="button"
          className="header__notification"
          aria-label="Ver notificaciones"
        >
          <Bell size={21} strokeWidth={2} />

          <span className="header__notification-badge">
            3
          </span>
        </button>

        <div className="header__realtime">
          <span className="header__realtime-indicator" />

          <span>
            Tiempo real
          </span>
        </div>

        <div className="header__date">
          <CalendarDays size={17} strokeWidth={2} />

          <div className="header__date-information">
            <span>08 Sep 2026</span>
            <span>15:02:02</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header