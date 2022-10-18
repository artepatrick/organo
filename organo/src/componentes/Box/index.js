import './Box.css'
import React from 'react'

const dadosPessoas = [
    { 'nomePessoa': 'Alexandre Krabbe', 'cargoPessoa': 'Desenvolvedor', 'foto': 'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg' }
]

const Box = (props) => {
    return (
        <div className='bigBox'>
            <div className='faixaBox' />
            <div>

            </div>
            <div>
                <h3>{props.nomePessoa}</h3>
                <p>{props.profissão}</p>
            </div>
        </div>
    )
}

export default Box