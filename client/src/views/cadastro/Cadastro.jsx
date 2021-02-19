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
import setDataOnForm from '../../store/actions/setDataOnForm';

import Controles from './Controles';

const useStyles = makeStyles({
    cadastro: {
        backgroundColor: '#00BFA5',
        borderRadius: '6px',
        border: 'solid 1px white',
        color: 'white',
        overflow: 'auto',
        padding: '5px',
        margin: '0.5vh',
        boxSizing: 'border-box',
        height: '75vh'
    },

    formControl: {
        minWidth: 250
    },


});

export default function Cadastro() {
    const cadastro = useSelector(state => state.data);
    const dispatch = useDispatch();
    const classes = useStyles();

    const cadastrar = () => {
        dispatch(cadastrarEdificacao(cadastro));
    }

    const clean = () => {
        dispatch(setDataOnForm(Object.keys(cadastro.form), 'clear'));
    }

    const onInputChange = (e, s_id) => {
        dispatch(setDataOnForm(s_id, e.target.value));
    }

    return (
        <Grid >
            <Controles />

            <Grid
                container
                direction='column'
                justify='space-between'
                alignItems='center'
                className={classes.cadastro}
            >
                <Grid>
                    <h2>Cadastro de Edificações</h2> 
                </Grid> 

                {cadastro.inputBlockedItens.map(input => 
                    <Grid key={input.id+'-grid'}>
                        <TextField 
                            id={input.id} label={input.name} 
                            variant='outlined' size='small' className={classes.formControl} disabled
                            value={cadastro.form[input.id]}
                            onChange={(e) => onInputChange(e, input.id)}
                        />
                    </Grid>
                )}

                {cadastro.selectItens.map(select => 
                    <Grid key={select.id+'-grid'}>
                        <FormControl  key={select.id+'-form'} variant='outlined' size='small' className={classes.formControl}>
                            <InputLabel key={select.id+"-label"}>{select.name}</InputLabel>
                            <Select
                                labelId={select.id+'-label'}
                                key={select.id}
                                required
                                label={select.name}
                                value={cadastro.form[select.id]}
                                onChange={(e) => onInputChange(e, select.id)}
                            >
                                <MenuItem value=''><em>None</em></MenuItem>
                                {select.menuItens.map(item => 
                                    <MenuItem key={item.id+'-key'} value={item.id}>{item.name}</MenuItem>
                                )}
                            </Select>
                        </FormControl>
                    </Grid>
                )}

                {cadastro.inputItens.map(input => 
                    <Grid key={input.id+'-grid'}>
                        <TextField 
                            id={input.id} label={input.name} 
                            variant='outlined' size='small' className={classes.formControl}
                            value={cadastro.form[input.id]}
                            onChange={(e) => onInputChange(e, input.id)}
                        />
                    </Grid>
                )}

                <Grid container justify='space-evenly'>
                    <Button variant='contained' color='default' onClick={clean}>Limpar</Button>
                    <Button variant='contained' color='default' onClick={cadastrar}>Salvar</Button>
                </Grid>
            </Grid>
        </Grid>

    );
}