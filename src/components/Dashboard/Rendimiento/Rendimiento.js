import React from 'react';
import {LineChart} from 'react-chartkick';
import Spinner from '../../../Spinner/Spinner';


const Rendimiento = (props)=>{
    console.log(props)
    if (props.DataFromApi !== null) {

        let table =
            //change the title and location key based on your API
            (
                <div>
                    <LineChart data={props.DataFromApi} width="auto" height="auto"/>
                </div>

            )


        return table
    } else {
        return (
            <div><Spinner /></div>
        )
    }

}

export default Rendimiento;