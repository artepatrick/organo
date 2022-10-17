import './ListaSuspensa.css'
import React from 'react'
import ReactDOM from 'react-dom'

const ListaSuspensa = (props) => {
    return (
        <div>
            <label>{props.label}</label>
            <select>
                {props.item.map(item => {
                    return <option key={item}>{item}</option>)
                    }}
            </select>
        </div>
    )
}

export default ListaSuspensa