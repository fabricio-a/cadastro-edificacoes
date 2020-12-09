import { createStore } from 'redux'

const INITIAL_CADASTRO = {
    data: {
        tileLayers: [
            {
                url: 'https://www.senocwb.com/senoportal/rest/services/SJP/Mosaico_urbano/MapServer',
                zIndex: 1,
                camadas: [0]
            },
            {
                url: 'https://www.senocwb.com/senoportal/rest/services/SJP/SJP/MapServer',
                zIndex: 2,
                camadas: [0]
            }
        ]
    }
}

function storeCadastro(state = INITIAL_CADASTRO, action) {
    return {
        ...state
    }
}

export default createStore(storeCadastro)
