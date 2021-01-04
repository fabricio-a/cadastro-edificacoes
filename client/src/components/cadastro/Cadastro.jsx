import React, { useState , useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import '../css/Cadastro.css'
import '../css/Mapa.css'

import { Button } from '@material-ui/core'

import cadastrarEdificacao from '../../store/actions/cadastrarEdificacao'

export default function Cadastro() {
    const cadastro = useSelector(state => state.data) 
    const dispatch = useDispatch()

    function cadastrar() {
        dispatch(cadastrarEdificacao(cadastro))
    }

    return (
        <div id='cadastro' className='cadastro'>
            <h2>Cadastro de Edificações</h2>                                                         

            <Button variant='contained' color='default' onClick={cadastrar}>
                Limpar
            </Button>
            <Button variant='contained' color='default' onClick={cadastrar}>
                Salvar
            </Button>
        </div>
    )
}