import React, { useState , useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import '../css/Cadastro.css'
import '../css/Mapa.css'

import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'

import cadastrarEdificacao from '../../store/actions/cadastrarEdificacao'

export default function Cadastro() {
    const cadastro = useSelector(state => state.data) 
    const dispatch = useDispatch()

    function cadastrar() {
        dispatch(cadastrarEdificacao(cadastro))
    }

    return (
        <div className='cadastro'>
            <h2>Cadastro de Edificações</h2>     

            {cadastro.selectItens.map(s => 
                <div>
                    <InputLabel id={s}>{s}</InputLabel>
                    <Select
                    labelId={s}
                    id={s+'_'}
                    required
                    label={s}
                    variant='outlined'
                    >
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={10}>Testin</MenuItem>
                        <MenuItem value={20}>Neh</MenuItem>
                        <MenuItem value={30}>Negah</MenuItem>
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
    )
}