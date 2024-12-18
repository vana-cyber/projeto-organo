import { Banner } from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Botao from './componentes/Botao';

function App() {
  return (
    <div className="App">
      <Banner />
      <Formulario />
      <Botao texto="Criar card"/>
    </div>
  );
}

export default App;