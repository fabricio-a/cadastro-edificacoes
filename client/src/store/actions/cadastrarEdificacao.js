export default function cadastrarEdificacao(cadastro) {
    alert('EDIFICACAO CADASTRADA');

    return(
        {
            type: 'CADASTRAR_EDIFICACAO',
            payload: {
                cadastro
            }
        }
    );
}