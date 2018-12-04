import React from 'react';
import Spinner from '../../../Spinner/Spinner';
import  './Miinversion.css';
const MiInversion = (props) => {
    console.log(props)
    if (props.DataFromApi !== null) {

        let table =
            //change the title and location key based on your API
            (
                <div>
                    <table className="table tabli">
                        <thead>
                            <tr>
                                <th scope="col">Mi inversión</th>

                                <th scope="col">Industrias</th>
                      

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" >Industria Automotriz</th>
                                <td height="5px">{props.DataFromApi.automotriz}%</td>
                        

                            </tr>
                            <tr>
                                <th scope="row">Inmobiliaria</th>
                                <td>{props.DataFromApi.inmobiliaria}%</td>
                        

                            </tr>
                            <tr>
                                <th scope="row">Ganaderia</th>
                                <td>{props.DataFromApi.ganaderia}%</td>
                          

                            </tr>
                            <tr>
                                <th scope="row">Financieras</th>
                                <td>{props.DataFromApi.financieras}%</td>
                          

                            </tr>
                            <tr>
                                <th scope="row">Construcción</th>
                                <td>{props.DataFromApi.construccion}%</td>
                          

                            </tr>
                        </tbody>
                    </table>

                </div>

            )


        return table
    } else {
        return (
            <div><Spinner /></div>
        )
    }

}

export default MiInversion;