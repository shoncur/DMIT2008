import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

export default function NavBar() {
    return <AppBar position='static' color='primary'>
        <Toolbar variant='dense'>
            <Typography>
                Assignment 2
            </Typography>
        </Toolbar>
    </AppBar>
}