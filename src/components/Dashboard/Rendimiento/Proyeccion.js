import React from 'react';
import {ColumnChart } from 'react-chartkick';
import Spinner from '../../../Spinner/Spinner';


const Proyeccion = (props)=>{
    console.log(props)
    if (props.DataFromApi !== null) {

        let table =
            //change the title and location key based on your API
            (
                <div>
                    <ColumnChart  data={props.DataFromApi} width="auto" height="auto"/>
                </div>

            )


        return table
    } else {
        return (
            <div><Spinner /></div>
        )
    }

}

export default Proyeccion;