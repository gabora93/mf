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
import MiInversion from './MiInversion/MiInversion';
import Rendimiento from './Rendimiento/Rendimiento';
import Proyeccion from './Rendimiento/Proyeccion';
import axios from 'axios';
ReactChartkick.addAdapter(Chart)

class Dashboard extends Component {

    state = {
        DataFromApi: null,
        togle: 'page-content-wrapper',
        show: false
    }


    componentDidMount() {

        //FAKING THE API
        setTimeout(() => {
            this.setState({ DataFromApi: data })
        }, 1000);

        //COMO SE VERIA LA PETICION A LA API
        
        // axios.get('/api/vi/data/user/',data).then((resp)=>{
        //     if(resp.status === 200){
        //         this.setState({DataFromApi: resp})
        //     }else{
        //         console.log(resp.data)
        //     }
        // }).catch((err)=>{
        //     console.log(err)
        // })
        

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
                <div className='d-flex flex-row justify-content-between'>
                    <Portafoliotable DataFromApi={this.state.DataFromApi.portafolio} />

                </div>
            )


            return table
        } else {
            return (
                <div><Spinner /></div>
            )
        }
    }

    renderInversiones = () => {
        if (this.state.DataFromApi !== null) {

            let inversiones = (
                <MiInversion DataFromApi={this.state.DataFromApi.inversiones} />
            )


            return inversiones
        } else {
            return (
                <div><Spinner /></div>
            )
        }
    }

    renderRendimiento = () => {
        if (this.state.DataFromApi !== null) {

            if (this.state.show == 'rendimiento') {
                let dataToShow = (
                    <Rendimiento DataFromApi={this.state.DataFromApi.rendimiento} />
                )
                return dataToShow
            } else if (this.state.show == 'proyeccion') {
                let dataToShow = (
                    <Proyeccion DataFromApi={this.state.DataFromApi.proyeccion} />
                )
                return dataToShow
            }




        } else {
            return (
                <div><Spinner /></div>
            )
        }
    }

    renderRendi = () => {
        if (this.state.DataFromApi !== null) {

            let inversiones = (
                <div>
                    {this.state.show ? <Rendimiento DataFromApi={this.state.DataFromApi.rendimiento} /> : <Proyeccion DataFromApi={this.state.DataFromApi.proyeccion} />}
                </div>

            )


            return inversiones
        } else {
            return (
                <div><Spinner /></div>
            )
        }
    }

    changeRendi = () => {
        const currentState = this.state.show
        this.setState({ show: !currentState })
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

                                        {this.renderInversiones()}
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <div className='container'>
                                            {this.state.show ? <button className='btn btn-block' onClick={this.changeRendi}>Rendimiento Real Anualizado</button> : <button className='btn btn-block' onClick={this.changeRendi}>Proyección</button> }
                                            {/* <button className='btn btn-block' onClick={this.changeRendi}>Rendimiento Real Anualizado</button>
                                            <button className='btn btn-block' onClick={this.changeRendi}>Proyección</button> */}
                                        </div>

                                        {this.renderRendi()}
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Dashboard;