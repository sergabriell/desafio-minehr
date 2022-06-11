import Chart from "react-apexcharts";
import './styles.css';
import IconInfo from '../../assets/icon-info.svg';

function BarCharts() {
    const options = {
        plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: true,
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
                'United States', 'China', 'Germany'
            ],
        },
        title: {
            text: 'Barras',
            align: 'left',
            style: {
                color: '#5D405C',
                fontSize: '16px',
                fontWeight: '700'
            }
        }
    };
    return (
        <div className="content-bar-chart">
            <Chart
                className='bar-chart'
                type="bar"
                height='360'
                series={[{
                    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1350]
                }]}
                options={options}
                img={IconInfo}
            />
            <img src={IconInfo} alt="info" />
        </div>
    )
}

export default BarCharts;