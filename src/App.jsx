import Sidebar from './components/layout/Sidebar/Sidebar'
import Header from './components/layout/Header/Header'
import Dashboard from './pages/Dashboard/Dashboard'

function App() {
  return (
    <div className="app">
      <Sidebar />

      <div className="app__content">
        <Header />

        <main className="app__main">
          <Dashboard />
        </main>
      </div>
    </div>
  )
}

export default App