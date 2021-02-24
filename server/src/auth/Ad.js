import { Router } from 'express';
import ActiveDirectory from 'activedirectory';

const authRoutes = Router();

const authHandle = (req, res) => {
    const user = req.body.user;
    const psw = req.body.psw;

    console.log(user, psw)

    new Promise((resolve, reject) => {
        const config = {
            url: 'ldap://SRVMATRIZ.senocwb.com',
            baseDN: 'dc=senocwb,dc=com',
            username: 'administrator@senocwb.com',
            password: 'Pandora%1414'
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

