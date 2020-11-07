import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';

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

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://ginogarcia.dev">
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
    margin: "auto",
    paddingLeft:20,
    paddingRight:20
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
    fontSize: 48
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
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
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
  },
})

const tiers = [
  {
    title: 'Free',
    price: '0',
    description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '15',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: '30',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
];

export default function Home() {
  const classes = useStyles()
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <div className={classes.index}>
      <div className={classes.root}>

        {matches ? <BigNavbar classes={classes} /> : <NavBar classes={classes} />}
      </div>
      <Grid container >
        <Grid xs={12} sm={6} item style={{ backgroundColor:"#F7F2E7",padding:40}}>
          <MachineMan />
        </Grid>
        <Grid xs={12} sm={6} item style={{padding:40}}>
          <HeroText />
        </Grid>
      </Grid>
      <Grid container>
        <Grid xs={12} sm={6} item style={{ padding: 40 }}>
          <MobileDesign />
        </Grid>
        <Grid xs={12} sm={6} item style={{ backgroundColor: "#D9E4DD", padding: 40}}>
          <SEOPerf />
        </Grid>
      </Grid>
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" gutterBottom>
          Pricing
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          Quickly build an effective pricing table for your potential customers with this layout.
          It&apos;s built with default Material-UI components with little customization.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textSecondary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      /mo
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography color="textSecondary" component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant} color="textSecondary">
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <form method="post" style={{marginTop:50}}>
        <Grid container spacing={2}>
          <Grid xs={12} item>
            <TextField type="text" name="name" label="Name" fullWidth variant="outlined" />
          </Grid>
          <Grid xs={12} item>
            <TextField name="email" type="email" label="Email" fullWidth variant="outlined" />

          </Grid>
          <Grid xs={12} item>
            <TextField name="subject" type="text" label="Subject" fullWidth variant="outlined" />
          </Grid>
          <Grid xs={12} item>
            <TextField name="message" type="text" label="Message" fullWidth variant="outlined" multiline rows={4} />
          </Grid>
          <Grid xs={12} item>
            <Button type="submit" fullWidth variant="outlined" color="textSecondary">Send</Button>

          </Grid>
          <Grid xs={12} item>
            <Button type="reset" fullWidth variant="outlined" color="textSecondary">Clear</Button>

          </Grid>
          <Grid item>
            <h6>Chicago, US</h6>
            <h6>Phone: +00 151515</h6>
            <h6>Email: mail@mail.com</h6>
          </Grid >
        </Grid>
      </form>
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
    <Box mt={5}>
        <Copyright />
    </Box>
    </div>
  )
}
