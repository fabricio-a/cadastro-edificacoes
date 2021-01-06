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
                camadas: [0, 1, 2, 3, 4]
            }
        ],

        selectItens: [
            {
                name: 'Classe', 
                id: '1-CLASSE',
                menuItens: [
                    { name: '1 - Casa', id: '1-CLASSE'},
                    { name: '2 - Apartamento', id: '1-CLASSE'},
                    { name: '3 - Sobrado', id: '1-CLASSE'},
                    { name: '4 - Galpão', id: '1-CLASSE'},
                    { name: '5 - Salão', id: '1-CLASSE'},
                    { name: '6 - Garagem', id: '1-CLASSE'},
                    { name: '7 - Outros', id: '1-CLASSE'},
                    { name: '8 - Edícula', id: '1-CLASSE'},
                ]
            },
            {
                name: 'Dominio', 
                id: '1-DOMINIO',
                menuItens: [
                    { name: '1 - Própria', id: '1-CLASSE'}
                ]
            },
            {
                name: 'Padrão', 
                id: '1-PADRAO',
                menuItens: [
                    { name: '1 - Alto', id: '1-CLASSE'},
                    { name: '2 - Médio', id: '1-CLASSE'},
                    { name: '3 - Baixo', id: '1-CLASSE'}
                ]
            },
            {
                name: 'Utilização', 
                id: '1-UTILIZAC',
                menuItens: [
                    { name: '1 - Residencial', id: '1-CLASSE'},
                    { name: '2 - Comercial', id: '1-CLASSE'},
                    { name: '3 - Industrial/Armazéns', id: '1-CLASSE'},
                    { name: '4 - Oficinas/Depósitos', id: '1-CLASSE'},
                    { name: '5 - Especiais', id: '1-CLASSE'},
                    { name: '6 - Outros', id: '1-CLASSE'}
                ]
            },
            {
                name: 'Construção', 
                id: '1-CONSTRUC',
                menuItens: [
                    { name: '1 - Alvenaria', id: '1-CLASSE'},
                    { name: '2 - Madeira', id: '1-CLASSE'},
                    { name: '3 - Mista', id: '1-CLASSE'},
                    { name: '4 - Concreto', id: '1-CLASSE'},
                    { name: '5 - Especiais', id: '1-CLASSE'},
                    { name: '6 - Barraco/Favela', id: '1-CLASSE'}
                ]
            },
            {
                name: 'Tipo', 
                id: '1-TIPO',
                menuItens: [
                    { name: '1 - Horizontal', id: '1-CLASSE'},
                    { name: '2 - Vertical', id: '1-CLASSE'}
                ]
            }
        ],

        inputItens: [
            { name: 'Ano da Construção', id: 'ANO_CONSTR'},
            { name: 'Observações', id: 'OBSERVACAO'},
        ]        
    }
}

function storeCadastro(state = INITIAL_CADASTRO, action) {
    return {
        ...state
    }
}

export default createStore(storeCadastro)
