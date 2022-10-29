import './FaixaBox.css'
import React from 'react'
import Box from '../Box'
import dadosPessoaDb from '../Db'


const FaixaBox = () => {
    // console.log(JSON.stringify(dadosPessoaDb))
    return (
        <div>
            <h2>Desenvolvimento</h2>
            <div className='faixaBoxDiv'>
                    {
                        dadosPessoaDb.map((dadosPessoa) => {
                            return (<Box key={dadosPessoa.nome} nomePessoa={dadosPessoa.nome} profissao={dadosPessoa.profissao} imagemPerfil={dadosPessoa.imagem} />)
                        })
                    }
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