import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Cart from '../public/svg/cart.svg'
import Person from '../public/svg/person.svg'
import IconButton from '@material-ui/core/IconButton';
import Logo from '../public/svg/logo.svg';

const NavBar = ({ classes }) => (
    <Toolbar style={{ display: "fixed" }}>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Logo />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
            WebDoctor
          </Typography>
        <IconButton
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
        >
            <Cart />
        </IconButton>
        <IconButton
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
        >
            <Person />
        </IconButton>
    </Toolbar>
)

export default NavBar