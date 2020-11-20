import React from 'react'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import CloseIcon from '@material-ui/icons/Close';
import FormControl from '@material-ui/core/FormControl';

import theme from '../styles/theme'
import NavBar from '../components/Navbar'
import BigNavbar from '../components/BigNavbar'
import Button from '@material-ui/core/Button';

import MachineMan from '../public/svg/machineman.svg'
import HeroText from '../public/svg/herotext.svg'
import MobileDesign from '../public/svg/mobiledesign.svg'
import SEOPerf from '../public/svg/seoperf.svg'

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import StarIcon from '@material-ui/icons/StarBorder';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import appText from '../components/appText'

function Copyright() {
  return (
    <Typography variant="body2" align="center">
      {'Copyright © '}
      <Link href="https://ginogarcia.dev">
        WebDoctor
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const useStyles = makeStyles({
  index: {
    maxWidth: 1024,
    margin: "auto"
  },
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
    flexGrow: 1,
    fontSize: 24
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
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  hero: {
    border: "1px #575757 solid",
    margin: "auto"
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.primary.main
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
    fullHeightCard: {
      height: "100%",
    },
  },
})

export default function Home() {
  const classes = useStyles()
  const thema = useTheme();
  const matches = useMediaQuery(thema.breakpoints.up('sm'));

  const [top, setTop] = React.useState(false);

  const toggleDrawer = () => {
    setTop(!top)
  }

  const list = () => (
    <div
      role="presentation"
    >
      <ListItem onClick={toggleDrawer} onKeyDown={toggleDrawer}>
        <ListItemIcon>
          <CloseIcon />
        </ListItemIcon>
      </ListItem>
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  const tiers = appText.en.tiers
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.index}>
        <div className={classes.root}>
          {matches ? <BigNavbar classes={classes} /> : <NavBar classes={classes} setTop={setTop} />}
        </div>
        <Drawer anchor="top" open={top} onClose={toggleDrawer}>
          {list()}
        </Drawer>
        <div className={classes.hero}>
          <Grid container>
            <Grid xs={12} sm={6} item style={{ backgroundColor: "#F7F2E7", padding: 60 }}>
              <MachineMan />
            </Grid>
            <Grid xs={12} sm={6} item style={{ padding: 40 }}>
              <HeroText />
            </Grid>
          </Grid>
          <Grid container>
            <Grid xs={12} sm={6} item style={{ padding: 40 }}>
              <MobileDesign />
            </Grid>
            <Grid xs={12} sm={6} item style={{ backgroundColor: "#D9E4DD", padding: 40 }}>
              <SEOPerf />
            </Grid>
          </Grid>
        </div>

        <Container maxWidth="sm" component="main" className={classes.heroContent}>
          <Typography component="h1" variant="h2" align="center" gutterBottom>
            Pricing
        </Typography>
          <Typography variant="h5" align="center" component="p">
            {appText.en.pricing.subTitle}
          </Typography>
        </Container>
        <Container maxWidth="md" component="main">
          <Grid container>
            {tiers.map((tier) => (
              <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4} component={Card} style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}>
                <div>
                  <CardHeader
                    title={tier.title}
                    subheader={tier.subheader}
                    titleTypographyProps={{ align: 'center' }}
                    subheaderTypographyProps={{ align: 'center' }}
                    action={tier.title === 'Pro' ? <StarIcon /> : null}
                    className={classes.cardHeader}
                  />
                  <CardContent >
                    <div className={classes.cardPricing}>
                      <Typography component="h2" variant="h3">
                        ${tier.price}
                      </Typography>
                      <Typography variant="h6" align="center">
                        /mo
                    </Typography>
                    </div>
                    <ul>
                      {tier.description.map((line) => (
                        <Typography component="li" variant="subtitle1" align="left" key={line} >
                          {line}
                        </Typography>
                      ))}
                    </ul>
                  </CardContent>
                </div>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant} color="secondary">
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Grid>
            ))}
          </Grid>
        </Container>
        <h2 style={{ padding: 10 }}>Contact</h2>
      
          <TextField type="text" name="name" label="Name" fullWidth variant="outlined" color="secondary"/>
            
              <TextField name="email" type="email" label="Email" fullWidth variant="outlined" />

            
              <TextField name="subject" type="text" label="Subject" fullWidth variant="outlined" />
            
              <TextField name="message" type="text" label="Message" fullWidth variant="outlined" multiline rows={4} />
            
            
              <Button type="submit" fullWidth variant="outlined" style={{ backgroundColor: "#d9e4dd", color: "#575757" }}>Send</Button>

            
              <Button type="reset" fullWidth variant="outlined" style={{ backgroundColor: "#f7f2e7", color: "#575757" }}>Clear</Button>

           
              <h6>{appText.en.contact.place}</h6>
              <h6>{appText.en.contact.phone}</h6>
              <h6>{appText.en.contact.email}</h6>
    
        <Box mt={5}>
          <Copyright />
        </Box>
      </div>
    </ThemeProvider>
  )
}
