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
    { 'nome': 'Desenvolvedores', 'time': 'Programação', 'cor': '#57C278' },
    { 'nome': 'UX', 'time': 'Front End', 'cor': '#82CFFA' },
  ]

  console.log('teste 2', times.map(() => { return times }))
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
          times.map((i) => {
            return (<FaixaBox time={times.nome} cor={times.cor} />)
          })
        }
      </div>
    </div>
  );
}
export default App;