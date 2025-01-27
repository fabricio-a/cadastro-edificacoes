import { Router } from 'express';
import ActiveDirectory from 'activedirectory';

const authRoutes = Router();

const authHandle = (req, res) => {
    const user = req.body.user;
    const psw = req.body.psw;

    console.log(user, psw)

    new Promise((resolve, reject) => {
        const config = {
            url: 'ldap://SERVER_URL',
            baseDN: 'dc=DOMINIO,dc=com',
            username: 'ADMIN_USER@DOMINIO.COM',
            password: 'PSW'
        };
    
        const ad = new ActiveDirectory(config);
    
        ad.authenticate(user, psw, function(err, auth) {
            if(auth) resolve();
            else if(err) reject();
        });
    })
        .then(() => {
            console.log()
            res.status(200).send('auth');
        })
        .catch(() => {
            res.status(200).send('fail');
        })
}

authRoutes.post('/auth', authHandle);

export default authRoutes;

