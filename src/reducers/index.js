import { combineReducers } from 'redux'

import { reducers as counterReducers } from './counter'
/* 
    combineReducers(): Cria um objeto com todos os estados e faz a ligação 
    com os reducers para que a store possa guarda-los.
*/
const reducers = combineReducers({
    counterReducers
})

export { reducers }