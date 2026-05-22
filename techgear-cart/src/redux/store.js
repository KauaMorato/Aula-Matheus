// Importa a ferramenta para criar a Store
import { legacy_createStore as createStore } from 'redux';
import cartReducer from './cartReducer';

// Cria o baú mágico e conecta o robozinho a ele!
const store = createStore(cartReducer);

export default store;