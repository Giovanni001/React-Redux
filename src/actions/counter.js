import { actionsTypes } from '../constants/counter'

/* 
  Ações que serão enviadas do seu componente para
  acionar os reducers.
 */
const actions = {
    increment: () => ({
        type: actionsTypes.COUNTER_INCREMENT
    }),
    decrement: () => ({
        type: actionsTypes.COUNTER_DECREMENT
    })
}

export { actions }