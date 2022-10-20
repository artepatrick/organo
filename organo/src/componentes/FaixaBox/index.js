import './FaixaBox.css'
import React from 'react'
import Box from '../Box'
import nomePessoaDb from '../Db'
// import nomePessoaDb from '../Db/db.js'

// const dadosPessoasNaFaixa = [
//     { 'nome': 'Ana', 'profissao': 'Deenvolvedor', 'imagem': 'https://img.elo7.com.br/product/original/3EECB71/desenho-personalizado-para-usar-de-foto-de-perfil-e-etc-personalizado.jpg' },
//     { 'nome': 'João', 'profissao': 'Designer', 'imagem': 'https://img.elo7.com.br/product/main/3E26D20/desenho-personalizado-para-perfil-desenho-personalizado.jpg' },
//     { 'nome': 'João', 'profissao': 'Designer', 'imagem': 'https://img.freepik.com/vetores-premium/imagem-de-perfil-de-personagem-de-desenho-animado-avatar-jovem_18591-55058.jpg?w=2000' }
// ]

const FaixaBox = () => {
    console.log(JSON.stringify(nomePessoaDb))
    return (
        <div>
            <h2>Desenvolvimento</h2>
            {/* <div>
                {
                    nomePessoaDb.map((nomePessoa) => {
                        return (
                            <Box key={nomePessoa} nomePessoa={nomePessoa} profissao='Quality Assurance' imagemPerfil='https://img.elo7.com.br/product/original/3EECB71/desenho-personalizado-para-usar-de-foto-de-perfil-e-etc-personalizado.jpg' />
                        )
                    })
                }
            </div> */}
            <section>
                <Box nomePessoa="Laura" profissao='Quality Assurance' imagemPerfil='https://img.elo7.com.br/product/original/3EECB71/desenho-personalizado-para-usar-de-foto-de-perfil-e-etc-personalizado.jpg' />
                <Box nomePessoa="Denise" profissao='Product Owner' imagemPerfil='https://img.elo7.com.br/product/main/3E26D20/desenho-personalizado-para-perfil-desenho-personalizado.jpg' />
                <Box nomePessoa="Patrick" profissao='Product Manager' imagemPerfil='https://img.freepik.com/vetores-premium/imagem-de-perfil-de-personagem-de-desenho-animado-avatar-jovem_18591-55058.jpg?w=2000' />
                <Box nomePessoa="Alexandre" profissao='Desenvolvedor' imagemPerfil='https://img.freepik.com/vetores-premium/imagem-de-perfil-de-personagem-de-desenho-animado-avatar-jovem_18591-55054.jpg?w=2000' />
            </section>
        </div>
    )
}

export default FaixaBox


// dadosPessoasNaFaixa.map( () => {
//         return {
//             < Box nomePessoa = "Laura" profissao = 'Quality Assurance' imagemPerfil = `${dadosPessoasNaFaixa.nome}` />
//         }
//     }
// )


