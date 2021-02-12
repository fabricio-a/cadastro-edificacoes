import { Router } from 'express';

const dbRoutes = Router();

dbRoutes.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
})

dbRoutes.get('/teste', async (req, res) => {
    res.send('TEsTE');
    console.log('Foi TESTE');
});

export default dbRoutes;