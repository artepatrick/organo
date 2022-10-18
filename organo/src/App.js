import Banner from './componentes/Banner';
import Formulário from './componentes/Formulário';
import React from 'react'
import Box from './componentes/Box';

function App(props) {
  console.log(props);
  return (
    <body>
      <div className="App">
        <Banner />
        <Formulário />
        <header className="App-header">
        </header>
      </div>
      <section>
        <Box nomePessoa="Patrick" profissao='Product Manager' />
      </section>
    </body>
  );
}
export default App;