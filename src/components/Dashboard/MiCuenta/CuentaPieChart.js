import React from 'react';
import Spinner from '../../../Spinner/Spinner';
import {PieChart} from 'react-chartkick';

const CuentaChart = (props) => {
    console.log(props)
    if (props.DataFromApi !== null) {
        let chart = (
            <div>

                <PieChart colors={["#4F97D7", "#56B89D", "#915DB1"]}width="auto" height="auto" data={{ 'Disponible': props.DataFromApi.mxn.disponible, 'Invertido': props.DataFromApi.mxn.invertido, 'Demora': props.DataFromApi.mxn.demora }} />
            </div>
        )
        return chart
    } else {
        return (
            <div><Spinner /></div>
        )
    }
}


export default CuentaChart;