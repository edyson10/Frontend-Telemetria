import StatCard from "../../components/dashboard/StatCard/StatCard";
import MapPanel from "../../components/dashboard/MapPanel/MapPanel";
import RecentAlerts from "../../components/dashboard/RecentAlerts/RecentAlerts";

import VehicleStatus from "../../components/dashboard/VehicleStatus/VehicleStatus";
import AverageSpeed from "../../components/dashboard/AverageSpeed/AverageSpeed";
import AlertDistribution from "../../components/dashboard/AlertDistribution/AlertDistribution";

import { useEffect, useState } from "react";
import vehicleService from "../../services/vehicleService";
import alertService from "../../services/alertService";

import "./Dashboard.css";

function Dashboard() {
  const [vehicles, setVehicles] = useState([]);
  const [loadingVehicles, setLoadingVehicles] = useState(true);
  const [vehiclesError, setVehiclesError] = useState(null);

  const [alerts, setAlerts] = useState([]);
  const [loadingAlerts, setLoadingAlerts] = useState(true);
  const [alertsError, setAlertsError] = useState(null);

  const [dashboardStatsData, setDashboardStatsData] = useState({
    activeVehicles: 0,
    recentAlerts: 0,
    runningRoutes: null,
    stoppedVehicles: 0,
  });

  useEffect(() => {
    async function loadVehicles() {
      try {
        setLoadingVehicles(true);
        setVehiclesError(null);

        const data = await vehicleService.getVehicles();

        console.log("Vehículos recibidos:", data);

        setVehicles(data);
        setDashboardStatsData((current) => ({
          ...current,
          activeVehicles: data.filter((vehicle) => vehicle.status === "MOVING")
            .length,
          stoppedVehicles: data.filter(
            (vehicle) => vehicle.status === "STOPPED",
          ).length,
        }));
      } catch (error) {
        console.error("Error loading vehicles:", error);
        setVehiclesError(error);
      } finally {
        setLoadingVehicles(false);
      }
    }

    loadVehicles();
  }, []);

  useEffect(() => {
    async function loadAlerts() {
      try {
        setLoadingAlerts(true);
        setAlertsError(null);

        const data = await alertService.getRecentAlerts(20);

        setAlerts(data);
        setDashboardStatsData((current) => ({
          ...current,
          recentAlerts: data.length,
        }));
      } catch (error) {
        console.error("Error loading alerts:", error);
        setAlertsError(error);
      } finally {
        setLoadingAlerts(false);
      }
    }

    loadAlerts();
  }, []);

  return (
    <section className="dashboard">
      <div className="dashboard__heading">
        <div>
          <h1>¡Hola, Juan!</h1>
          <p>Monitorea tu flota en tiempo real</p>
        </div>
      </div>

      <div className="dashboard__stats">
        <StatCard
          title="Vehículos activos"
          value={dashboardStatsData.activeVehicles}
          trend=""
          trendDirection="up"
          icon="vehicle"
          variant="primary"
        />

        <StatCard
          title="Alertas recientes"
          value={dashboardStatsData.recentAlerts}
          trend=""
          trendDirection="up"
          icon="alert"
          variant="danger"
        />

        <StatCard
          title="Rutas en ejecución"
          value={dashboardStatsData.runningRoutes ?? "—"}
          trend=""
          trendDirection="up"
          icon="route"
          variant="primary"
        />

        <StatCard
          title="Vehículos detenidos"
          value={dashboardStatsData.stoppedVehicles}
          trend=""
          trendDirection="up"
          icon="stop"
          variant="purple"
        />
      </div>

      <div className="dashboard__monitoring">
        <MapPanel vehicles={vehicles} />
        <RecentAlerts
          alerts={alerts}
          loading={loadingAlerts}
          error={alertsError}
        />
      </div>

      <div className="dashboard__bottom">
        <VehicleStatus
          vehicles={vehicles}
          loading={loadingVehicles}
          error={vehiclesError}
        />

        <div className="dashboard__charts">
          <AverageSpeed />
          <AlertDistribution alerts={alerts} />
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
