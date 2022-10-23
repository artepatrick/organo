import './ListaSuspensa.css'
import React from 'react'


const ListaSuspensa = (props) => {

    return (
        <div className='lista-Suspensa'>
            <label>{props.label}</label>
            <select>
                {props.itens.map((item, index) => {
                    return <option key={`${index}-${item}`}>{item}</option>
                }
                )}
            </select>
        </div>

    )

}
export default ListaSuspensa
