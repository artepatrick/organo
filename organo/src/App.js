import Banner from './componentes/Banner';
import Formulário from './componentes/Formulário';
import React, { useState } from 'react'
import './index.css'
import FaixaBox from './componentes/FaixaBox';
import nomePessoaDb from './componentes/Db';

function App(props) {
  
  const [colaboradores, setColaborador] = useState([]);

  const TesteFuncao = (colaborador) => {
    setColaborador([...colaboradores, colaborador])
    console.log(colaboradores)
  }

  const times = [
    {'time':'Programação', 'cor':'#57C278'},
    {'time':'Front End', 'cor':'#82CFFA'},
    
  ]

  return (
    <div>
      <Banner />
      <div className="boxFormulário">

        <Formulário 
          valor={colaboradores} 
          aoCadastrarColaborador={colaborador => TesteFuncao(colaborador)} 
        />

      </div>
      <div className='faixaBoxes'>
        {
          times.map((time) =>{
           return (<FaixaBox time={times.nome} cor={times.cor} />)})
        }
      </div>
    </div>
  );
}
export default App;