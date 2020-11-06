import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

import theme from '../styles/theme'
import NavBar from '../components/Navbar'
import BigNavbar from '../components/BigNavbar'
import Worker from "../public/svg/worker.svg"
import Wrapper from '../components/Wrapper'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  card: {
    maxWidth: 600,
    margin: 'auto',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
  title: {
    padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
    color: theme.palette.openTitle,
    flexGrow: 1
  },
  media: {
    minHeight: 400
  },
  credit: {
    padding: 10,
    textAlign: 'right',
    backgroundColor: '#ededed',
    borderBottom: '1px solid #d0d0d0',
    '& a': {
      color: '#3f4771'
    }
  }
})

export default function Home() {
  const classes = useStyles()
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <>
      <div className={classes.root}>

        {matches ? <BigNavbar classes={classes}/> : <AppBar position="relative" color="inherit">
          <NavBar classes={classes}/>
        </AppBar>}
      </div>
      <div>
        <Wrapper/>
      </div>
    {/* <Card className={classes.card}>
      <Typography variant="h6" className={classes.title}>
        Home Page
          </Typography>
      <CardMedia className={classes.media} title="Unicorn Bicycle" >
        <img src="unicornbike.jpg" height="500"/>
      </CardMedia>
      <Typography variant="body2" component="p" className={classes.credit} color="textSecondary">Photo by <a href="https://unsplash.com/@boudewijn_huysmans" target="_blank" rel="noopener noreferrer">Boudewijn Huysmans</a> on Unsplash</Typography>
      <CardContent>
        <Typography variant="body1" component="p">
          Welcome to the MERN Skeleton home page.
            </Typography>
      </CardContent>
    </Card> */}
    </>
  )
}
