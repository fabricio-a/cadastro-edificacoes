import express from 'express';
import statics from './routes/statics';
import dbRoutes from './routes/dbRoutes';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', statics);
app.use('/', dbRoutes);

app.listen(5000, () => {
    console.log('Servidor Rodando na Porta 5000');
});