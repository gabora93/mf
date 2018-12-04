import React, { Component} from 'react';
import './SideBar.css';
import LogoGray from '../Logo/Logogray';
import { FaUser, FaChartLine, FaFileInvoice, FaWallet, FaExchangeAlt, FaCalendar, FaBriefcase, FaQuestionCircle, FaFile, FaFileInvoiceDollar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

class SideBar extends Component{

    render(){
        return(
          <div className="sidebar-wrapper">
            <ul className="sidebar-nav">
                <li className="sidebar-brand">
                    <a href="/">
                        <LogoGray/>
                    </a>
                </li>
                <li>
                    <Link to='/'><FaUser /> Mi Perfil </Link>
                </li>
                <li>
                    <a href="/"><FaChartLine/> Dashboard</a>
                </li>
                <li>
                    <a href="/"><FaFileInvoice/> Comprar Facturas</a>
                </li>
                <li>
                    <a href="/"><FaWallet/> Mis Fondos</a>
                </li>
                <li>
                    <a href="/"><FaExchangeAlt/> Mis movimientos</a>
                </li>
                <li>
                    <a href="/"><FaFile/> Estados de cuenta</a>
                </li>
                <li>
                    <a href="/"><FaFileInvoiceDollar/> Comprobantes fiscales</a>
                </li>
                <li>
                    <a href="/"><FaCalendar/> Mi calendario</a>
                </li>
                <li>
                    <a href="/"><FaBriefcase/> Mi portafolio</a>
                </li>
                <li>
                    <a href="/"><FaQuestionCircle/> Ayuda</a>
                </li>
                <li>
                    <a href="/">Miguel-bot</a>
                </li>
            </ul>
        </div>
        )
    }

}

export default SideBar;