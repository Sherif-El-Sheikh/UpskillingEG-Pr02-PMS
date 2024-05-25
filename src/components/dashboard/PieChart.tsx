/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js'

ChartJS.register(Tooltip, Legend, ArcElement)

const PieChart = ({ data, title }: { data: any; title: string }) => {
  const options = {
    responsive: true,
    // maintainAspectRatio: false,
    aspectRatio: 1.5,
    plugins: {
      legend: {
        fontColor: 'black',
        title: {
          display: true,
          text: title,
        },
      },
    },
  }
  return (
    <>
      <Pie options={options} data={data} />
    </>
  )
}

export default PieChart
