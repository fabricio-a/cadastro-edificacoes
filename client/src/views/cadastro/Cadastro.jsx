import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';

import cadastrarEdificacao from '../../store/actions/cadastrarEdificacao';

const useStyles = makeStyles({
    cadastro: {
        backgroundColor: '#00BFA5',
        borderRadius: '6px',
        border: 'solid 1px white',
        color: 'white',
        overflow: 'auto',
        boxSizing: 'border-box',
        height: '99vh',
        padding: '5px',
        margin: '0.5vh',
    },

    formControl: {
        minWidth: 250
    }
});

export default function Cadastro() {
    const cadastro = useSelector(state => state.data);
    const dispatch = useDispatch();

    const classes = useStyles();

    function cadastrar() {
        dispatch(cadastrarEdificacao(cadastro));
    }

    function clean() {

    }

    return (
        <div className={classes.cadastro}>
            <Grid
                container
                spacing={1}
                direction='column'
                justify='space-between'
                alignItems='flex-start'
            >
                <Grid item xs={12} sm={2}>
                    <h2>Cadastro de Edificações</h2> 
                </Grid> 

                {cadastro.inputBlockedItens.map(input => 
                    <Grid item xs={12} sm={1}>
                        <TextField id={input.id} value='valor padrao' label={input.name} variant='outlined' size='small' className={classes.formControl} disabled/>
                    </Grid>
                )}

                {cadastro.selectItens.map(select => 
                    <Grid item xs={12} sm={1}>
                        <FormControl variant='outlined' size='small' className={classes.formControl}>
                            <InputLabel id={select.id+"-label"}>{select.name}</InputLabel>
                            <Select
                                labelId={select.id+"-label"}
                                id={select.id}
                                required
                                label={select.name}
                            >
                                <MenuItem value=""><em>None</em></MenuItem>
                                {select.menuItens.map(item => 
                                    <MenuItem value={item.id}>{item.name}</MenuItem>
                                )}

                            </Select>
                        </FormControl>
                    </Grid>
                )}

                {cadastro.inputItens.map(input => 
                    <Grid item xs={12} sm={1}>
                        <TextField id={input.id} label={input.name} variant='outlined' size='small' className={classes.formControl}/>
                    </Grid>
                )}

                <Grid item>
                    <Button variant='contained' color='default' onClick={clean}>Limpar</Button>
                    <Button variant='contained' color='default' onClick={cadastrar}>Salvar</Button>
                </Grid>
            </Grid>
        </div>
    );
}