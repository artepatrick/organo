import './Box.css'
import React from 'react'
import fotoPerfil from './perfil-baixa.jpg'

// const dadosPessoas = [
//     { 'nomePessoa': 'Alexandre Krabbe', 'cargoPessoa': 'Desenvolvedor', 'foto': 'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg' }
// ]

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

