import './App.css';
import Provider from './Context/globalContext/Provider';
import Rotas from './Routes/Routes';

function App() {
  return (
    <div className="App">
      <Provider>
        <Rotas />
      </Provider>
    </div>
  );
}

export default App;
