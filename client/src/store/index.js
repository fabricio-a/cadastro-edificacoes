import { createStore } from 'redux';

const INITIAL_CADASTRO = {
    data: {
        layers: {
            tile: [
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
            ],

            vector: [
                {
                    url: 'http://localhost:5000/dados/LOTES_CADASTRO.json'
                },
                {
                    url: 'http://localhost:5000/dados/EDIFICACOES_CADASTRO.json'
                }
            ]
        },

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
                id: '1-DOMINIO',
                menuItens: [
                    { name: '1 - Própria', id: 'propria'}
                ]
            },
            {
                name: 'Padrão', 
                id: '1-PADRAO',
                menuItens: [
                    { name: '1 - Alto', id: 'alto'},
                    { name: '2 - Médio', id: 'medio'},
                    { name: '3 - Baixo', id: 'baixo'}
                ]
            },
            {
                name: 'Utilização', 
                id: '1-UTILIZAC',
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
                id: '1-CONSTRUC',
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
                id: '1-TIPO',
                menuItens: [
                    { name: '1 - Horizontal', id: 'horizontal'},
                    { name: '2 - Vertical', id: 'vertical'}
                ]
            }
        ],

        inputItens: [
            { name: 'Ano da Construção', id: 'ANO_CONSTR'},
            { name: 'Observações', id: 'OBSERVACAO'},
        ]        
    }
};

function storeCadastro(state = INITIAL_CADASTRO, action) {
    return {
        ...state
    };
}

export default createStore(storeCadastro);
