import './Formulario.css'
import CampoTexto from '../CampoTexto'
import React, { useState } from 'react'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'

const times = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'
]

/*const labels = [
    'Nome',
    'Cargo',
    'email',
    'Imagem',
]*/



const Formulário = (props) => {
    
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoCadastrarColaborador({
            nome,
            cargo,
            imagem,
            time
        })
        /* console.log("setNome ", nome)
        console.log("setCargo ", cargo)
        console.log("setTime ", time, "<= Lista suspensa") */
    }
    
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                {/*labels.map((label) => {
                    return <CampoTexto key={label} label={label} placeholder={`digite seu ${label}`} />
                })*/}

                <CampoTexto 
                    label={'Nome'} 
                    placeholder={`digite seu Nome`} 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />

                <CampoTexto 
                    label={'Cargo'} 
                    placeholder={`digite seu Cargo`} 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />

                <CampoTexto 
                    label={'Imagem'} 
                    placeholder={`digite sua Imagem`} 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                
                <ListaSuspensa 
                    valor={time} 
                    aoAlterado={valor => setTime(valor)}
                    label="Selecione seu time" 
                    itens={times} 
                />
                <Botao>
                    <div>
                        <img className='imagem-botao' src="https://thispersondoesnotexist.com/image" />
                        Criar Card
                    </div>
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
