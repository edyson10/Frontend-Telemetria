import { averageSpeedData } from '../../../mocks/dashboard.mock'

import './AverageSpeed.css'

function AverageSpeed() {
  const maxValue = 120

  const points = averageSpeedData
    .map((item, index) => {
      const x =
        (index / (averageSpeedData.length - 1)) * 100

      const y =
        100 - (item.value / maxValue) * 100

      return `${x},${y}`
    })
    .join(' ')

  return (
    <section className="average-speed">
      <div className="average-speed__header">
        <div>
          <h2>Velocidad promedio</h2>
          <span>Últimas 24 horas</span>
        </div>

        <select defaultValue="24h">
          <option value="24h">Últimas 24 horas</option>
          <option value="7d">Últimos 7 días</option>
        </select>
      </div>

      <div className="average-speed__chart">
        <div className="average-speed__y-axis">
          <span>120</span>
          <span>90</span>
          <span>60</span>
          <span>30</span>
          <span>0</span>
        </div>

        <div className="average-speed__graph">
          <div className="average-speed__grid-line average-speed__grid-line--120" />
          <div className="average-speed__grid-line average-speed__grid-line--90" />
          <div className="average-speed__grid-line average-speed__grid-line--60" />
          <div className="average-speed__grid-line average-speed__grid-line--30" />
          <div className="average-speed__grid-line average-speed__grid-line--0" />

          <svg
            className="average-speed__svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polyline
              points={points}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <div className="average-speed__highlight">
            <strong>92 km/h</strong>
            <span>12:00</span>
          </div>
        </div>

        <div className="average-speed__x-axis">
          {averageSpeedData
            .filter((_, index) => index % 2 === 0)
            .map((item) => (
              <span key={item.time}>
                {item.time}
              </span>
            ))}
        </div>
      </div>
    </section>
  )
}

export default AverageSpeed