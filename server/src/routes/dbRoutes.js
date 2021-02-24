import { Router } from 'express';
import pool from '../connect/postgres';
import moment from 'moment';

const dbRoutes = Router();

const getAllCadastro = (req, res) => {
    pool.query(
        'SELECT * FROM cadastro_sjp ORDER BY id ASC',
        (err, results) => {
            if(err) throw err;

            res.status(200).json(results.rows);
        }
    );
} 

const getCadastro = (req, res) => {
    const edificacao = req.params;

    pool.query(
        'SELECT * FROM cadastro_sjp WHERE INSCRICAO=$1 AND UNIDADE=$2',
        [edificacao.INSCRICAO, edificacao.UNIDADE],
        (err, results) => {
            if(err) throw err;

            res.status(200).json(results.rows);
        }
    );
} 

const putCadastro = (req, res) => {
    console.log('testetetetettetet');
    const edificacao = req.body;
    edificacao = { ...edificacao, data: moment().format('Do MM YYYY, h:mm:ss')};
    console.log(edificacao);

    pool.query(
        `INSERT INTO cadastro_sjp 
        (area_unida, unidade, area_inscr, 1-classe, 2-dominio, 3-padrao, 4-utilizac, 5-construc, 6-tipo, ano_constr, observacao, data, usuario, inscricao)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)`,
        Object.values(edificacao),
        (err, results) => {
            if(err) throw err;

            res.status(200).send('Cadastrado com sucesso!');
        }
    )
} 

const updateCadastro = (req, res) => {
    const edificacao = req.body;

    pool.query(
        `UPDATE cadastro_sjp 
        SET ${edificacao.set} 
        WHERE ${edificacao.where}`,
        edificacao.values,
        (err, results) => {
            if(err) throw err;

            res.status(200).send('Atualizado com sucesso!');
        }
    )
} 

dbRoutes.get('/get_cadastro', getAllCadastro);
dbRoutes.get('/get_cadastro/:INSCRICAO/:UNIDADE', getCadastro);
dbRoutes.post('/cadastrar', putCadastro);
dbRoutes.put('/cadastrar', updateCadastro);

export default dbRoutes;