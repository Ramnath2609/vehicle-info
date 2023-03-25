import { Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
  } from 'chart.js'

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
  )

export function PieChart({ data }) {
    const items = data.reduce((acc, curr) => {
        if(!acc[curr.vehicle.age]) {
            acc[curr.vehicle.age] = 1;
            return acc;
        }
        acc[curr.vehicle.age] += 1;
        return acc;
    }, {})
    return (
        <div className="pie">
            <Pie
            data={{
                labels: Object.keys(items).map((i) => `Age: ${i}`),
                datasets: [{
                    label: 'No. of verhicles',
                    data: Object.values(items),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                      ],
                      borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                      ],
                }]
            }}  
             />
        </div>
    );
}