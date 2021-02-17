import { createStore } from 'redux';

const INITIAL_CADASTRO = {
    data: {
        inputBlockedItens: [
            { name: 'Inscriçao', id: 'INSCRICAO'},
            { name: 'Área da Inscrição', id: 'AREA_INSCR'},
            { name: 'Unidade', id: 'UNIDADE'},
            { name: 'Área da Unidade', id: 'AREA_UNIDA'},
        ],

        selectItens: [
            {
                name: 'Classe', 
                id: '1-CLASSE',
                menuItens: [
                    { name: '1 - Casa', id: 'casa'},
                    { name: '2 - Apartamento', id: 'apartamento'},
                    { name: '3 - Sobrado', id: 'sobrado'},
                    { name: '4 - Galpão', id: 'galpao'},
                    { name: '5 - Salão', id: 'salao'},
                    { name: '6 - Garagem', id: 'garagem'},
                    { name: '7 - Outros', id: 'outros'},
                    { name: '8 - Edícula', id: 'edicula'},
                ]
            },
            {
                name: 'Dominio', 
                id: '2-DOMINIO',
                menuItens: [
                    { name: '1 - Própria', id: 'propria'}
                ]
            },
            {
                name: 'Padrão', 
                id: '3-PADRAO',
                menuItens: [
                    { name: '1 - Alto', id: 'alto'},
                    { name: '2 - Médio', id: 'medio'},
                    { name: '3 - Baixo', id: 'baixo'}
                ]
            },
            {
                name: 'Utilização', 
                id: '4-UTILIZAC',
                menuItens: [
                    { name: '1 - Residencial', id: 'residencial'},
                    { name: '2 - Comercial', id: 'comercial'},
                    { name: '3 - Industrial/Armazéns', id: 'industrial/armazens'},
                    { name: '4 - Oficinas/Depósitos', id: 'oficinas/depositos'},
                    { name: '5 - Especiais', id: 'especiais'},
                    { name: '6 - Outros', id: 'outros'}
                ]
            },
            {
                name: 'Construção', 
                id: '5-CONSTRUC',
                menuItens: [
                    { name: '1 - Alvenaria', id: 'alvenaria'},
                    { name: '2 - Madeira', id: 'madeira'},
                    { name: '3 - Mista', id: 'mista'},
                    { name: '4 - Concreto', id: 'concreto'},
                    { name: '5 - Especiais', id: 'especiais'},
                    { name: '6 - Barraco/Favela', id: 'barraco/favela'}
                ]
            },
            {
                name: 'Tipo', 
                id: '6-TIPO',
                menuItens: [
                    { name: '1 - Horizontal', id: 'horizontal'},
                    { name: '2 - Vertical', id: 'vertical'}
                ]
            }
        ],

        inputItens: [
            { name: 'Ano da Construção', id: 'ANO_CONSTR'},
            { name: 'Observações', id: 'OBSERVACAO'},
        ],
        
        form: {
            'INSCRICAO': '',
            'AREA_INSCR': '',
            'UNIDADE': '',
            'AREA_UNIDA': '',
            '1-CLASSE': '',
            '2-DOMINIO': '',
            '3-PADRAO': '',
            '4-UTILIZAC': '',
            '5-CONSTRUC': '',
            '6-TIPO': '',
            'ANO_CONSTR': '',
            'OBSERVACAO': ''
        }
    },

    layers: {
        tile: [
            {
                url: 'https://www.senocwb.com/senoportal/rest/services/SJP/Mosaico_urbano/MapServer',
                zIndex: 0,
                camadas: [0]
            },
            {
                url: 'https://www.senocwb.com/senoportal/rest/services/SJP/SJP/MapServer',
                zIndex: 1,
                camadas: [0]
            }
        ],

        vector: [
           // {
           //     url: 'http://localhost:5000/dados/LOTES.geojson'
           // },
            {
                url: 'http://localhost:5000/dados/EDIFICACOES.geojson'
            }
        ]
    },
};

function storeCadastro(state = INITIAL_CADASTRO, action) {
    switch(action.type) {
        case 'CADASTRAR_EDIFICACAO':
            return { ...state};
        case 'SET_DATA_ON_FORM':
            return { ...state, data: { ...state.data, form: { ...state.data.form, ...action.payload } }};
        default:
            return state;
    }
}

export default createStore(storeCadastro);
