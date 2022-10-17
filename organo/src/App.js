import Banner from './componentes/Banner';
import Formulário from './componentes/Formulário';
import React from 'react'
import ReactDOM from 'react-dom'

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <Banner />
      <Formulário />
      <header className="App-header">
      </header>
    </div>
  );
}
export default App;