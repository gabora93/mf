import React from 'react';

import Spinner from '../../../Spinner/Spinner';

const CuentaTable = (props) => {
    console.log(props)
    if (props.DataFromApi !== null) {

        let table =
            //change the title and location key based on your API
            (
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col"></th>

                                <th scope="col">MXN</th>
                                <th scope="col">USD</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Disponible</th>
                                <td>{props.DataFromApi.mxn.disponible}</td>
                                <td>{props.DataFromApi.usd.disponible}</td>

                            </tr>
                            <tr>
                                <th scope="row">Invertido</th>
                                <td>{props.DataFromApi.mxn.invertido}</td>
                                <td>{props.DataFromApi.usd.invertido}</td>

                            </tr>
                            <tr>
                                <th scope="row">Demora</th>
                                <td>{props.DataFromApi.mxn.demora}</td>
                                <td>{props.DataFromApi.usd.demora}</td>

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

export default CuentaTable;