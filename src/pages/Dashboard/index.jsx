import './styles.css';
import IconFilter from '../../assets/icon-filter.svg';

function Dashboard() {
    return (
        <div className="dashboard">

            <header className="dashboard-header">
            </header>

            <div className="content-dashboard">
                <div className="title">
                    <div className="left">
                        <h1>Dashboard</h1>
                        <span>Desafio Técnico Frontend</span>
                    </div>
                    <div className="right">
                        <img src={IconFilter} alt="icon-filter" />
                        <span>Filtrar</span>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Dashboard;