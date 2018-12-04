import React, { Component } from 'react';
import './Dashboard.css';
import TopNav from '../TopNav/TopNav';
import data from '../../FakeDataAPI';


class Dashboard extends Component {

    state = {
        DataFromApi: null,
        togle: 'page-content-wrapper'
    }
    
    
    componentDidMount(){
        this.setState({DataFromApi:data})
    }

    clickHandler = (e) => {
        e.preventDefault();
        console.log('gola')
        // $("#wrapper").toggleClass("toggled");
    }

    render() {

        console.log(this.state.DataFromApi)
        return (
            <div>
                <TopNav click={this.props.click} />
                <div className='page-content-wrapper d-flex justify-content-center'>
                    {/* <div>
               <button onClick={this.props.click} >Menu</button>
                <div class="topnav-right">
                    <a href="#search">Search</a>
                    <a href="#about">About</a>
                </div>
            </div> */}
                    <div className='column'>
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Mi cuenta</h4>
                                <p className="card-text">Some example text. Some example text.</p>
                                <a href="#" className="card-link">Card link</a>
                                <a href="#" className="card-link">Another link</a>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Mi portafolio</h4>
                                <p className="card-text">Some example text. Some example text.</p>
                                <a href="#" className="card-link">Card link</a>
                                <a href="#" className="card-link">Another link</a>
                            </div>
                        </div>
                    </div>

                    <div className='column'>
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
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">Some example text. Some example text.</p>
                                <a href="#" className="card-link">Card link</a>
                                <a href="#" className="card-link">Another link</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Dashboard;