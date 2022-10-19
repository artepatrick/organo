import Banner from './componentes/Banner';
import Formulário from './componentes/Formulário';
import React from 'react'
import Box from './componentes/Box';
import './index.css'

function App(props) {
  console.log(props);
  return (
    <div>
      <Banner />
      <div className="boxFormulário">
        <Formulário />
      </div>
      <div className='faixaBoxes'>
        <h2>Desenvolvimento</h2>
        <section>
          <Box nomePessoa="Laura" profissao='Quality Assurance' imagemPerfil='https://img.elo7.com.br/product/original/3EECB71/desenho-personalizado-para-usar-de-foto-de-perfil-e-etc-personalizado.jpg' />
          <Box nomePessoa="Denise" profissao='Product Owner' imagemPerfil='https://img.elo7.com.br/product/main/3E26D20/desenho-personalizado-para-perfil-desenho-personalizado.jpg' />
          <Box nomePessoa="Patrick" profissao='Product Manager' imagemPerfil='https://img.freepik.com/vetores-premium/imagem-de-perfil-de-personagem-de-desenho-animado-avatar-jovem_18591-55058.jpg?w=2000' />
          <Box nomePessoa="Alexandre" profissao='Desenvolvedor' imagemPerfil='https://img.freepik.com/vetores-premium/imagem-de-perfil-de-personagem-de-desenho-animado-avatar-jovem_18591-55054.jpg?w=2000' />
        </section>
      </div>
    </div>
  );
}
export default App;