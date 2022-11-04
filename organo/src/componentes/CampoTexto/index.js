import './CampoTexto.css'
import React, { useState } from 'react'

const CampoTexto = (props) => {
    // console.log(props.label)
    // console.log(props.placeholder)
    // let valor = 'teste'

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)     
    }

    const placeholdermodificada = `${props.placeholder}...`
    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>

            <input value={props.valor} onChange={aoDigitado} placeholder={placeholdermodificada} />
        </div>
    )
}

export default CampoTexto