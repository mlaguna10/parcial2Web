import './App.css';
import ListarBandas from './components/ListarBandas';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FormattedMessage} from 'react-intl';

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-light bg-light">
        <FormattedMessage id="bandas musicales" />
        <span class="navbar-brand mb-0 h1">Bandas Musicales</span>
      </nav>
      <ListarBandas></ListarBandas>
    </div>
  );
}

export default App;
