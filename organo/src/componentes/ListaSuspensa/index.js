import './ListaSuspensa.css'
import React from 'react'

const ListaSuspensa = (props) => {
    return (
        <div>
            <label>{props.label}</label>
            <select className='DropDown'>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                }
                )}
            </select>
        </div>
    )
}
export default ListaSuspensa
