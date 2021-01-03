import React from 'react'
import { Line } from '@reactchartjs/react-chart.js'

const data = {
  labels: [
    '一月',
    '二月',
    '三月',
    '四月',
    '五月',
    '六月',
    '七月',
    '八月',
    '九月',
    '十月',
    '十一月',
    '十二月',
  ],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
}

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
}

const LineChart = () => (
  <>
    <div className="header">
      <div className="links"></div>
    </div>
    <Line data={data} options={options} />
  </>
)

export default LineChart
