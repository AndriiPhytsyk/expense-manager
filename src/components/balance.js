import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';
import '../styles/balance.css'

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: [],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 0.5,
        },
    ],
}

export default function Balance() {
    return (
        <div className="balance">
            <h2 className="title">Balance &#x24;</h2>
            <Doughnut data={data}/>
            <p class="font-11">As a day</p>
        </div>

    )
}
