import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Cart from '../public/svg/cart.svg'
import Person from '../public/svg/person.svg'
import IconButton from '@material-ui/core/IconButton';
import Logo from '../public/svg/logo.svg';
import Contact from '../public/svg/contact.svg';

const NavBar = ({ classes }) => (
    <Toolbar style={{ display: "fixed" }}>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Logo />
        </IconButton >
        <Typography className={classes.title} variant="h5" style={{ color:"#575757"}}>
            WebDoctor
          </Typography>
        <IconButton
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
        >
            <Contact />
        </IconButton>
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