import Cadastro from '../components/cadastro/Cadastro';
import Mapa from '../components/mapa/Mapa';
import { makeStyles } from '@material-ui/styles';

//import '../components/css/App.css'

const useStyles = makeStyles({
    app: {
        backgroundColor: '#E6E6E6',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        boxSizing: 'border-box',
        fontFamily: 'Roboto-Light',
        height: '100vh',
        padding: 0,
    }
});

export default function() {
    const classes = useStyles();

    return (
        <div className={classes.app}>
            <Cadastro />
            <Mapa />
        </div>
    );
}
