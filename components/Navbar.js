import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Contact from '../public/svg/contact.svg'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const NavBar = ({classes}) => (
    <Toolbar style={{display:"fixed"}}>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
        </IconButton>
        <Typography variant="h3" style={{ color: "#575757" }} className={classes.title}>
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
    </Toolbar>
)

export default NavBar