import './ListaSuspensa.css'
import React from 'react'


const ListaSuspensa = (props) => {

    const aoAlterar = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className='lista-Suspensa'>
            <label>{props.label}</label>
            <select required={props.obrigatorio} value={props.valor} onChange={aoAlterar}>
                {props.itens.map((item, index) => {
                    return <option key={`${index}-${item}`}>{item}</option>
                }
                )}
            </select>
        </div>

    )

}
export default ListaSuspensa
