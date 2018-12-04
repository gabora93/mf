import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';
import SideBar from './SideBar/SideBar';
import TopNav from './TopNav/TopNav';
import Dashi from './Dashboard/Dashi';
import posed, { PoseGroup } from 'react-pose';
import Logini from './Login/Logini';
import { spring, AnimatedSwitch } from 'react-router-transition';



class Routes extends Component {


    openNav = () => {
        console.log('Funciona sidenav')
        document.getElementById("mySidenav").style.width = "250px";
    }

    closeNav = () => {
        document.getElementById("mySidenav").style.width = "0";
    }



    render() {
        function mapStyles(styles) {
            return {
                opacity: styles.opacity,
                transform: `scale(${styles.scale})`,
            };
        }

        function bounce(val) {
            return spring(val, {
                stiffness: 330,
                damping: 22,
            });
        }
        const bounceTransition = {
            // start in a transparent, upscaled state
            atEnter: {
                opacity: 0,
                scale: 1.2,
            },
            // leave in a transparent, downscaled state
            atLeave: {
                opacity: bounce(0),
                scale: bounce(0.8),
            },
            // and rest at an opaque, normally-scaled state
            atActive: {
                opacity: bounce(1),
                scale: bounce(1),
            },
        };
        return (
            <Router>
                <div>

                    <SideBar openNav={this.openNav} closeNav={this.closeNav} />
                    <AnimatedSwitch
                        atEnter={bounceTransition.atEnter}
                        atLeave={bounceTransition.atLeave}
                        atActive={bounceTransition.atActive}
                        mapStyles={mapStyles}
                        className="route-wrapper"
                    >
                        <Route exact path='/' component={Login} />
                        <Route
                            exact
                            path='/dashboard'
                            render={(props) => <Dashboard {...props} click={this.props.click} />}
                        />
                    </AnimatedSwitch>
                </div>
            </Router>
        )
    }
}

export default Routes;