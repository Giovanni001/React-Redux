import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { actions } from '../actions/counter'

function Counter() {
    /* 
        Com o useSelector temos acesso as informações dos reducers, logo ao retornar 
        o state emos acesso a todo o state que esta dentro dos reducers.
    */
    const counter = useSelector(state => state.counterReducers.counter)

    /* 
        Função que manda o novo estado ja tratado para o reducer pelas actions.
    */
    const dispatch = useDispatch()

    const handleIncrement = () => dispatch(actions.increment())
    const handleDecrement = () => dispatch(actions.decrement())

    return (
        <>
            <h1>Counter: {counter}</h1>
            <ul>
                <li>
                    <button onClick={handleIncrement}>Increment</button>
                </li>
                <li>
                    <button onClick={handleDecrement}>Decrement</button>
                </li>
            </ul>
        </>
    )
}



export default Counter
