import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';
import SideBar from './SideBar/SideBar';
import TopNav from './TopNav/TopNav';



class Routes extends Component {


    openNav = () => {
        console.log('Funciona sidenav')
        document.getElementById("mySidenav").style.width = "250px";
    }
    
    closeNav = () => {
      document.getElementById("mySidenav").style.width = "0";
    }
    

    render() {
        return (
            <Router>
                <div>
                    {/* <TopNav openNav={this.openNav} closeNav={this.closeNav} /> */}
                    <SideBar openNav={this.openNav} closeNav={this.closeNav} />
                    <Route exact path='/' component={Login} />
                    {/* <Route exact path='/dashboard' component={Dashboard} click={this.props.click} /> */}
                    <Route 
                        exact 
                        path='/dashboard'
                        render={(props)=> <Dashboard {...props} click={this.props.click} />}
                        />
                </div>
            </Router>
        )
    }
}

export default Routes;