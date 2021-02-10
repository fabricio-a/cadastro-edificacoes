import Cadastro from './cadastro/Cadastro';
import Mapa from './mapa/Mapa';

import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/styles';


//import '../components/css/App.css'

const useStyles = makeStyles({
    app: {
        backgroundColor: '#E6E6E6',
        fontFamily: 'Roboto, sans-serif',
        height: '100vh',
        padding: 0,
    }
});

export default function() {
    const classes = useStyles();

    return (
        <Grid 
            container
            direction='row'
            justify='space-around'
            alignItems='center'
            className={classes.app}
        >
            <Grid item xs={12} sm={3}>
                <Cadastro />
            </Grid>
            <Grid item xs={12} sm={9}>
                <Mapa />
            </Grid>

        </Grid>
    );
}
