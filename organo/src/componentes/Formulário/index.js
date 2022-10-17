import './Formulário.css'
import CampoTexto from '../CampoTexto'
import React from 'react'
import ReactDOM from 'react-dom'
import ListaSuspensa from '../ListaSuspensa'

const Formulário = () => {

    const times = [
        'Programação',
        'Front-ending',
        'DevOps'
    ]
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="digite seu nome" />
                <CampoTexto label="Cargo" placeholder="digite seu cargo" />
                <CampoTexto label="email" placeholder="digite seu email" />
                <CampoTexto label="Imagem" placeholder="digite o endereço da sua imagem" />
                <ListaSuspensa itens={times} />
            </form>
        </section>
    )
}

export default Formulário