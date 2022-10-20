import Banner from './componentes/Banner';
import Formulário from './componentes/Formulário';
import React from 'react'
import './index.css'
import FaixaBox from './componentes/FaixaBox';
import nomePessoaDb from './componentes/Db';

function App(props) {
  // console.log(props);
  // console.log(JSON.stringify(nomePessoaDb))
  return (
    <div>
      <Banner />
      <div className="boxFormulário">
        <Formulário />
      </div>
      <div className='faixaBoxes'>
        <FaixaBox />
      </div>
    </div>
  );
}
export default App;