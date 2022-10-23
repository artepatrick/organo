import './Formulário.css'
import CampoTexto from '../CampoTexto'
import React from 'react'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'

const Formulário = () => {

    const times = [
        'Desenvolvimento',
        'UX',
        'Produto',
        'QA'
    ]

    const labels = [
        'Nome',
        'Cargo',
        'email',
        'Imagem',
    ]

    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                {labels.map((label) => {
                    return <CampoTexto key={label} label={label} placeholder={`digite seu ${label}`} />
                })}
                {
                    /* 
                    <CampoTexto label="Nome" placeholder="digite seu nome" />
                    <CampoTexto label="Cargo" placeholder="digite seu cargo" />
                    <CampoTexto label="email" placeholder="digite seu email" />
                    <CampoTexto label="Imagem" placeholder="digite o endereço da sua imagem" /> */
                }
                <ListaSuspensa label="Selecione seu time" itens={times} />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulário





// //faixa.js
// const Pessoas = [
//     { 'nome': 'julia', 'funcao': 'desenvolvedora' },
//     { 'nome': 'Alonso', 'funcao': 'QA' },
//     { 'nome': 'Daniel', 'funcao': 'PO' }
// ]

// pessoas.map((pessoa, i) => {
//     return (
//         <div>
//             <div className={props.corHeaderCard}/>
//             <CardPessoa key={`${i}-pessoas-${pessoa.nome}`} nome={pessoa.nome} funcao={pessoa.funcao} />
//         </div>
//     )
// })





// //pagina
// const settings = [
//     { 'corFundo': '#ffgghh', 'corHeaderCard': '.cor1', 'titulo': 'Programação' },
//     { 'corFundo': '#ffgghh', 'corHeaderCard': '.cor1', 'titulo': 'DevOps' },
//     { 'corFundo': '#ffgghh', 'corHeaderCard': '.cor3', 'titulo': 'UX e Design' },
// ]

// settings.map((setting) => {
//     return (
//         <div>
//            <h2>{setting.titulo}</h2>
//            <hr></hr>
//            <Faixa corfundo={setting.corfundo} corHeaderCard={setting.corHeaderCard} />
//         </div>
//     )
// })
