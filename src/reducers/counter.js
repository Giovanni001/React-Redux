import { actionsTypes } from "../constants/counter";

const INITIAL_STATE = {
    counter: 0
}

/* 
  O reducers atualizam o estado dos componentes, eles notificam o store que o
  state foi alterado, assim essa notificação é repassada para todos os outros componentes 
*/
const reducers = (state = INITIAL_STATE, action) => {
    /* 
      Atraves da action, nós temos acesso as actions que foram criadas no projeto,
      com isso podemos verificar qual é o tipo dela, se é o increment ou o decrement
      (increment e decrement, ambos estão criados no arquivo "actions.js")
     */
    switch (action.type) {
        case actionsTypes.COUNTER_DECREMENT:
            /* 
              No redux, nós não podemos alterar o estado atual, por isso fazemos uma
              copia do estado existente, pegamos todo o estado ja existente atraves do
              ...state e criamos uma copia para modifica-lo 
            */
            return { ...state, counter: state.counter - 1 }
        case actionsTypes.COUNTER_INCREMENT:
            return { ...state, counter: state.counter + 1 }
        default:
            return state
    }
}

export { reducers }