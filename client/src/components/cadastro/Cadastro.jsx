import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/styles';

import cadastrarEdificacao from '../../store/actions/cadastrarEdificacao';

const useStyles = makeStyles({
    cadastro: {
        flexGrow: 1,
        padding: '5px',
        height: 'calc(100% - 4px)',
        width: '100px',
        boxSizing: 'border-box',
        backgroundColor: '#00BFA5',
        borderRadius: '6px',
        margin: '2px',
        border: 'solid 1px white',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
    }
});

export default function Cadastro() {
    const cadastro = useSelector(state => state.data);
    const dispatch = useDispatch();

    const classes = useStyles();

    function cadastrar() {
        dispatch(cadastrarEdificacao(cadastro));
    }

    return (
        <div className={classes.cadastro}>
            <h2>Cadastro de Edificações</h2>     

            {cadastro.selectItens.map(select => 
                <div>
                    <InputLabel id={select.id}>{select.name}</InputLabel>
                    <Select
                    labelId={select.id}
                    id={select.id+'_'}
                    required
                    label={select.name}
                    variant='outlined'
                    >
                        <MenuItem value=""><em>None</em></MenuItem>
                        {select.menuItens.map(item => 
                            <MenuItem value={item.id}>{item.name}</MenuItem>
                        )}

                    </Select>
                </div>
            )}

            

            <Button variant='contained' color='default' onClick={cadastrar}>
                Limpar
            </Button>
            <Button variant='contained' color='default' onClick={cadastrar}>
                Salvar
            </Button>
        </div>
    );
}