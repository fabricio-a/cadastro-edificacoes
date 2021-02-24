import express from 'express';
import statics from './routes/statics';
import dbRoutes from './routes/dbRoutes';
import cors from 'cors';
import adAuth from './auth/Ad';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', statics);
app.use('/', dbRoutes);
app.use('/', adAuth);

app.listen(5000, () => {
    console.log('Servidor Rodando na Porta 5000');
});