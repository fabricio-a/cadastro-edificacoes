import Cadastro from './cadastro/Cadastro';
import Mapa from './mapa/Mapa';

import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/styles';


//import '../components/css/App.css'

const useStyles = makeStyles({
    app: {
        backgroundColor: '#E6E6E6',
        fontFamily: 'Roboto, sans-serif',
        padding: 0,
    }
});

export default function MainView() {
    const classes = useStyles();

    return (
        <Grid 
            container
            direction='row'
            justify='center'
            alignItems='center'
            className={classes.app}
        >
            <Grid container item xs={3}>
                <Cadastro />
            </Grid>
            <Grid container item xs={9}>
                <Mapa />
            </Grid>
        </Grid>
    );
}
