import { createStore } from 'redux'

import { reducers } from './reducers'

/* 
   Objeto onde serão guardados todos so estados que serão 
   usados globalmente na aplicação.
 */
const store = createStore(reducers)

export { store }