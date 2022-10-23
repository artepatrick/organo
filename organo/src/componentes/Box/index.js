import './Box.css'
import React from 'react'


const Box = (props) => {
    return (
        <div className='bigBox'>
            <div className='faixaBox'></div>
            <section className='sectionTexto'>
                <img className='foto-redonda' src={props.imagemPerfil} />
                <h3>{props.nomePessoa}</h3>
                <p>{props.profissao}</p>
            </section>
        </div>
    )
}

export default Box

