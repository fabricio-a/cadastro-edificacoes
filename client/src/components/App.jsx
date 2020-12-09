import React from 'react'
import { Provider } from 'react-redux'
import './css/App.css'
import './css/Mapa.css'
import './css/Cadastro.css'

import Mapa from './mapa/Mapa'
import Cadastro from './cadastro/Cadastro'

import store from '../store'

export default function App() {
    return (
        <Provider store={store}>
            <div className="app">
                <Cadastro />
                <Mapa />
            </div>
        </Provider>
    )
}