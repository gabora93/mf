import React, { Component } from 'react';
import './Dashboard.css';
import TopNav from '../TopNav/TopNav';
import data from '../../FakeDataAPI';
import ReactChartkick, { PieChart } from 'react-chartkick';
import Chart from 'chart.js';
import Spinner from '../../Spinner/Spinner';
import Portafoliotable from './Portafolio/Portafolio';
import CuentaPieChart from './MiCuenta/CuentaPieChart';
import CuentaTable from './MiCuenta/CuentaTable';
ReactChartkick.addAdapter(Chart)

class Dashi extends Component {

    state = {
        DataFromApi: null,
        togle: 'page-content-wrapper'
    }


    componentDidMount() {
        this.setState({ DataFromApi: data })
    }

    clickHandler = (e) => {
        e.preventDefault();
        console.log('gola')
        // $("#wrapper").toggleClass("toggled");
    }

    renderAccountChart = () => {

        if (this.state.DataFromApi !== null) {
            let chart = (
                <div className='d-flex flex-row justify-content-between'>
                    <CuentaTable DataFromApi={this.state.DataFromApi.account} />
                    <CuentaPieChart DataFromApi={this.state.DataFromApi.account} />
                </div>
            )
            return chart
        } else {
            return (
                <div><Spinner /></div>
            )
        }
    }

    renderPortafolioTable = () => {
        if (this.state.DataFromApi !== null) {

            let table = (
                <Portafoliotable DataFromApi={this.state.DataFromApi.portafolio} />
            )


            return table
        } else {
            return (
                <div><Spinner /></div>
            )
        }
    }

    render() {
        console.log(this.state.DataFromApi)


        return (
            <div>
                <TopNav click={this.props.click} />
                <div className='page-content-wrapper d-flex justify-content-center'>


                    <div className='container'>
                        <div className='row'>
                            <div className='col'>

                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Mi cuenta</h4>
                                        <div>
                                            {this.renderAccountChart()}
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Mi portafolio</h4>
                                        <div className='d-flex flex-row'>
                                            {this.renderPortafolioTable()}
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className='col'>

                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Card title</h4>
                                        <p className="card-text">Some example text. Some example text.</p>
                                        <a href="#" className="card-link">Card link</a>
                                        <a href="#" className="card-link">Another link</a>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Mi inversión</h4>
                                        <p className="card-text">Some example text. Some example text.</p>
                                        <a href="#" className="card-link">Card link</a>
                                        <a href="#" className="card-link">Another link</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* // portafolio */}



                </div>
            </div >
        )
    }
}

export default Dashi;