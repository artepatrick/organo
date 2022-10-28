import './CampoTexto.css'
import React from 'react'

const CampoTexto = (props) => {
    // console.log(props.label)
    // console.log(props.placeholder)
    let valor = 'teste'

    const aoDigitado = (evento) => {
        console.log(valor)
        valor = evento.target.value
    }

    const placeholdermodificada = `${props.placeholder}...`
    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>

            <input onChange={aoDigitado} placeholder={placeholdermodificada} />
        </div>
    )
}

export default CampoTexto