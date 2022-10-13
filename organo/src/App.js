import Banner from './componentes/Banner';
import Formulário from './componentes/Formulário';

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


