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

export default function() {
    const classes = useStyles();

    return (
        <Grid 
            container
            direction='row'
            justify='space-between'
            alignItems='stretch'
            className={classes.app}
        >
            <Grid item>
                <Cadastro xs={3}/>
            </Grid>
            <Grid item>
                <Mapa xs={9}/>
            </Grid>
        </Grid>
    );
}
