import React from 'react'

import { Provider } from 'react-redux'

import App from './App'

import { store } from '../store'

function Root() {
    return (
        /* 
          Estamos envolvendo toda a aplicação (componente App) dentro de um Provider e passando como prop
          o "store" que foi criado, para que os dados possam ser compartilhados com 
          toda a aplicação.
        */
        <Provider store={store}>
            <App />
        </Provider>
    )
}

export default Root
