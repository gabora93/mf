import React from 'react';
import Spinner from '../../../Spinner/Spinner';

const Portafoliotable = (props) => {
     console.log(props.DataFromApi)
    if (props.DataFromApi !== null) {

        let table =
            //change the title and location key based on your API
            (
                <div>
                    <table className="table">
                        <thead>
                            <tr>

                                <th scope="col">Fecha</th>
                                <th scope="col">Plazo</th>
                                <th scope="col">Taza</th>
                                <th scope="col">Monto</th>
                                <th scope="col">Pagador</th>
                                <th scope="col">Estatus</th>

                            </tr>
                        </thead>
                        <tbody>
                            {props.DataFromApi.map((element,index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{element.fecha}</td>
                                        <td>{element.plazo}</td>
                                        <td>{element.taza}</td>
                                        <td>{element.monto}</td>
                                        <td>{element.pagador}</td>
                                        <td>{element.estatus}</td>
                                    </tr>
                                )
                            })}
                           
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

export default Portafoliotable