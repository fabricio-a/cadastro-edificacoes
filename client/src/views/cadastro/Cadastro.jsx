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
    root: {
        boxSizing: 'border-box',
        overflow: 'hidden',
        height: '100vh',
    }, 
    cadastro: {
        backgroundColor: '#00BFA5',
        borderRadius: '6px',
        border: 'solid 1px white',
        color: 'white',
        overflow: 'auto',
        padding: '0.5vh',
        margin: '0.5vh',
        height: '90%',
        boxSizing: 'border-box',
    },

    select: {
        minWidth: 290,
        height: 30
    },

    input: {
        minWidth: 262,
        height: 8
    }
});

export default function Cadastro() {
    const cadastro = useSelector(state => state.data);
    const dispatch = useDispatch();
    const classes = useStyles();

    const cadastrar = () => {
        const body = {
            ...cadastro.form,
            data: '',
            usuario: 'fabricio'
        }

        fetch(cadastro.server.urlDb + '/cadastrar', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
            .then((res) => {
                alert(res)
            })
            .catch((err) => {
                alert('falha ao cadastrar');
            })
    }

    const clean = () => {
        dispatch(setDataOnForm(Object.keys(cadastro.form), 'clear'));
    }

    const onInputChange = (e, s_id) => {
        dispatch(setDataOnForm(s_id, e.target.value));
    }

    return (
        <Grid 
            container
            className={classes.root}
        >
            <Controles />

            <Grid
                container
                direction='column'
                justify='flex-start'
                spacing={1}
                alignItems='center'
                className={classes.cadastro}
            >
                <Grid item>
                    Cadastrar Edificação
                </Grid> 

                {cadastro.inputBlockedItens.map(input => 
                    <Grid item key={input.id+'-grid'}>
                        <TextField 
                            id={input.id} label={input.name} 
                            variant='outlined' size='small' InputProps={{ classes: { input: classes.input } }} disabled
                            value={cadastro.form[input.id]}
                            onChange={(e) => onInputChange(e, input.id)}
                        />
                    </Grid>
                )}

                {cadastro.selectItens.map(select => 
                    <Grid item key={select.id+'-grid'}>
                        <FormControl  key={select.id+'-form'} variant='outlined' size='small'>
                            <InputLabel key={select.id+"-label"}>{select.name}</InputLabel>
                            <Select
                                labelId={select.id+'-label'}
                                key={select.id}
                                required
                                label={select.name}
                                value={cadastro.form[select.id]}
                                onChange={(e) => onInputChange(e, select.id)}
                                className={classes.select}
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
                    <Grid item key={input.id+'-grid'}>
                        <TextField 
                            id={input.id} label={input.name} 
                            variant='outlined' size='small'  InputProps={{ classes: { input: classes.input } }}
                            value={cadastro.form[input.id]}
                            onChange={(e) => onInputChange(e, input.id)}
                        />
                    </Grid>
                )}

                <Grid item container justify='space-evenly'>
                    <Button variant='contained' color='default' size='small' onClick={clean}>Limpar</Button>
                    <Button variant='contained' color='default' size='small' onClick={cadastrar}>Salvar</Button>
                </Grid>
            </Grid>
        </Grid>

    );
}