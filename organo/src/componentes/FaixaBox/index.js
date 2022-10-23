import './FaixaBox.css'
import React from 'react'
import Box from '../Box'
import dadosPessoaDb from '../Db'
// import dadosPessoaDb from '../Db/db.js'

// const dadosPessoasNaFaixa = [
//     { 'nome': 'Ana', 'profissao': 'Deenvolvedor', 'imagem': 'https://img.elo7.com.br/product/original/3EECB71/desenho-personalizado-para-usar-de-foto-de-perfil-e-etc-personalizado.jpg' },
//     { 'nome': 'João', 'profissao': 'Designer', 'imagem': 'https://img.elo7.com.br/product/main/3E26D20/desenho-personalizado-para-perfil-desenho-personalizado.jpg' },
//     { 'nome': 'João', 'profissao': 'Designer', 'imagem': 'https://img.freepik.com/vetores-premium/imagem-de-perfil-de-personagem-de-desenho-animado-avatar-jovem_18591-55058.jpg?w=2000' }
// ]

const FaixaBox = () => {
    // console.log(JSON.stringify(dadosPessoaDb))
    return (
        <div>
            <h2>Desenvolvimento</h2>
            <div className='faixaBoxDiv'>
                <div>
                    {
                        dadosPessoaDb.map((dadosPessoa) => {
                            return (
                                <Box key={dadosPessoa.nome} nomePessoa={dadosPessoa.nome} profissao={dadosPessoa.profissao} imagemPerfil={dadosPessoa.imagem} />
                            )
                        })
                    }
                </div>
                {/* <section>
                <Box nomePessoa="Laura" profissao='Quality Assurance' imagemPerfil='https://img.elo7.com.br/product/original/3EECB71/desenho-personalizado-para-usar-de-foto-de-perfil-e-etc-personalizado.jpg' />
                <Box nomePessoa="Denise" profissao='Product Owner' imagemPerfil='https://img.elo7.com.br/product/main/3E26D20/desenho-personalizado-para-perfil-desenho-personalizado.jpg' />
                <Box nomePessoa="Patrick" profissao='Product Manager' imagemPerfil='https://img.freepik.com/vetores-premium/imagem-de-perfil-de-personagem-de-desenho-animado-avatar-jovem_18591-55058.jpg?w=2000' />
                <Box nomePessoa="Alexandre" profissao='Desenvolvedor' imagemPerfil='https://img.freepik.com/vetores-premium/imagem-de-perfil-de-personagem-de-desenho-animado-avatar-jovem_18591-55054.jpg?w=2000' />
            </section> */}
            </div>
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


