import React, { Component } from 'react';
import './TopNav.css';
import { FaBell, FaComments } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';


class TopNav extends Component {

    state={
        barsClasses : false
    }

    change=()=>{
            this.props.click()
            const currentState = this.state.barsClasses
            this.setState({barsClasses: !currentState})

    }

    render() {

        

        return (
            <div className="d-flex justify-content-between  mb-3 topnav" >
                <div className={!this.state.barsClasses ? 'p-2' : 'p-2 change'} onClick={this.change}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
                <div className="p-2 ">
                    <a className='rightNavItems' href="#search"><FaBell /></a>
                    <a className='rightNavItems' href="#search"><FaComments /></a>
                    <a className='rightNavItems' href="#about"><FiLogOut /></a>
                </div>

            </div>






        )
    }

}

export default TopNav;

//   {/* <div className="topnav">
//                 <div class="container" onClick={() => console.log('hola')}>
//                     <div class="bar1"></div>
//                     <div class="bar2"></div>
//                     <div class="bar3"></div>
//                 </div>
//                 <div className="topnav-right">
//                     <a href="#search"><FaComments /></a>
//                     <a href="#search"><FaBell /></a>
//                     <a href="#about"><FiLogOut /></a>
//                 </div>
//             </div> */}