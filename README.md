# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Para probar con el siguiente comando

```powershell
npm run dev
```

```powershell
frontend-telemetria/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   │
│   │   ├── layout/
│   │   │   ├── Sidebar/
│   │   │   │   ├── Sidebar.jsx
│   │   │   │   └── Sidebar.css
│   │   │   │
│   │   │   └── Header/
│   │   │       ├── Header.jsx
│   │   │       └── Header.css
│   │   │
│   │   └── dashboard/
│   │       ├── StatCard/
│   │       │   ├── StatCard.jsx
│   │       │   └── StatCard.css
│   │       │
│   │       ├── FleetMap/
│   │       │   ├── FleetMap.jsx
│   │       │   └── FleetMap.css
│   │       │
│   │       ├── AlertList/
│   │       │   ├── AlertList.jsx
│   │       │   └── AlertList.css
│   │       │
│   │       ├── VehicleStatusTable/
│   │       │   ├── VehicleStatusTable.jsx
│   │       │   └── VehicleStatusTable.css
│   │       │
│   │       ├── SpeedChart/
│   │       │   ├── SpeedChart.jsx
│   │       │   └── SpeedChart.css
│   │       │
│   │       └── AlertDistribution/
│   │           ├── AlertDistribution.jsx
│   │           └── AlertDistribution.css
│   ├── pages/
│   │   └── Dashboard/
│   │       ├── Dashboard.jsx
│   │       └── Dashboard.css
│   │
│   ├── mocks/
│   │   ├── vehicles.mock.js
│   │   ├── alerts.mock.js
│   │   └── dashboard.mock.js
│   ├── services/
│   │   ├── vehicleService.js
│   │   ├── telemetryService.js
│   │   ├── alertService.js
│   │   └── routeService.js
│   ├── models/
│   │   ├── vehicle.js
│   │   ├── alert.js
│   │   ├── route.js
│   │   └── telemetry.js
│   ├── styles/
│   │   ├── variables.css
│   │   ├── reset.css
│   │   └── global.css
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── .env.local
├── .env.server
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```