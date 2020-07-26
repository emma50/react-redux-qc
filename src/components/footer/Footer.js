import React, { useState } from 'react';
// import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

function Copyright() {
  return (
    <div style={{'backgroundColor': '#ede7f6'}}>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </div>
  );
}

function SimpleBottomNavigation() {
  const [value, setValue] = useState(0);
  return (
    <BottomNavigation 
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels 
      style={{
        // 'width': 500,
        'display': 'flex',
        'justifyContent': 'center',
        'background': '#ede7f6',     
      }}
    >
      <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    </BottomNavigation>
    
  );
}

const useStyles = makeStyles((theme) => ({
  cta: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 0,
    marginBottom: '20px',
    [theme.breakpoints.up('sm')]: {
      marginTop: '-50px',
    },
  },
  ctaButton: {
    fontWeight: 'bold', 
    textTransform: 'uppercase',
    [theme.breakpoints.up('sm')]: {
      fontSize: 'x-large'
    }, 
  },
  root: {
    display: 'flex',
    backgroundColor: '#ede7f6',
    // overflowX: 'hidden',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  paper: {
    // maxWidth: 400,
    margin: `${theme.spacing(1)}px`,
    padding: theme.spacing(2),
    border: 'none',
    backgroundColor: '#ede7f6',
  },
  grid: {
    padding: ` 0 0 ${theme.spacing(1)}px 0 `,
  },
  divider: {
    width: '100vw',
  },
  textTransform: {
    textTransform: 'uppercase',
  },
  lineHeight: {
    lineHeight: 2.5,
  },
  // Desktop view
  desktopRoot: {
    flexGrow: 1,
    backgroundColor: '#ede7f6',
    padding: `0 0 ${theme.spacing(2)}px ${theme.spacing(5)}px `,
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.cta}>
        <Button variant="contained" color='primary' className={classes.ctaButton}>apply now</Button>
      </div>
      <div className={classes.root}>
        <div className={classes.paper}>
            <Grid item xs className={classes.grid}>
              <Typography className={classes.textTransform}>hhfghfhdghhhdg</Typography>
              <Typography className={classes.lineHeight}>hhfghfhdghhhdg</Typography>
              <Typography className={classes.lineHeight}>hhfghfhdghhhdg</Typography>
              <Typography className={classes.lineHeight}>hhfghfhdghhhdg</Typography>
              <Typography className={classes.lineHeight}>hhfghfhdghhhdg</Typography>
            </Grid>
            <Divider className={classes.divider}/>
            <Grid item xs className={classes.grid}>
              <Typography className={classes.textTransform}>hhfghfhdghhhdg</Typography>
              <Typography className={classes.lineHeight}>hhfghfhdghhhdg</Typography>
              <Typography className={classes.lineHeight}>hhfghfhdghhhdg</Typography>
              <Typography className={classes.lineHeight}>hhfghfhdghhhdg</Typography>
              <Typography className={classes.lineHeight}>hhfghfhdghhhdg</Typography>
            </Grid>
            <Divider className={classes.divider}/>
            <Grid item xs className={classes.grid}>
              <Typography className={classes.textTransform}>hhfghfhdghhhdg</Typography>
              <Typography className={classes.lineHeight}>hhfghfhdghhhdg</Typography>
              <Typography className={classes.lineHeight}>hhfghfhdghhhdg</Typography>
              <Typography className={classes.lineHeight}>hhfghfhdghhhdg</Typography>
              <Typography className={classes.lineHeight}>hhfghfhdghhhdg</Typography>
            </Grid>
            <Divider className={classes.divider}/>
            <Grid item xs>
              <Typography className={classes.textTransform}>hhfghfhdghhhdg</Typography>
              <Typography className={classes.lineHeight}>hhfghfhdghhhdg</Typography>
              <Typography className={classes.lineHeight}>hhfghfhdghhhdg</Typography>
              <Typography className={classes.lineHeight}>hhfghfhdghhhdg</Typography>
              <Typography className={classes.lineHeight}>hhfghfhdghhhdg</Typography>
            </Grid>
        </div>
      </div>
      <div className={classes.desktopRoot}>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={3}>
            <Typography className={classes.textTransform}>hhfghfhdghhhdg</Typography>
            <Typography className={classes.lineHeight}>hhfghfhdghhhdg</Typography>
            <Typography className={classes.lineHeight}>hhfghfhdghhhdg</Typography>
            <Typography className={classes.lineHeight}>hhfghfhdghhhdg</Typography>
            <Typography className={classes.lineHeight}>hhfghfhdghhhdg</Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography className={classes.textTransform}>hhfghfhdghhhdg</Typography>
            <Typography className={classes.lineHeight}>hhfghfhdghhhdg</Typography>
            <Typography className={classes.lineHeight}>hhfghfhdghhhdg</Typography>
            <Typography className={classes.lineHeight}>hhfghfhdghhhdg</Typography>
            <Typography className={classes.lineHeight}>hhfghfhdghhhdg</Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography className={classes.textTransform}>hhfghfhdghhhdg</Typography>
            <Typography className={classes.lineHeight}>hhfghfhdghhhdg</Typography>
            <Typography className={classes.lineHeight}>hhfghfhdghhhdg</Typography>
            <Typography className={classes.lineHeight}>hhfghfhdghhhdg</Typography>
            <Typography className={classes.lineHeight}>hhfghfhdghhhdg</Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography className={classes.textTransform}>hhfghfhdghhhdg</Typography>
            <Typography className={classes.lineHeight}>hhfghfhdghhhdg</Typography>
            <Typography className={classes.lineHeight}>hhfghfhdghhhdg</Typography>
            <Typography className={classes.lineHeight}>hhfghfhdghhhdg</Typography>
            <Typography className={classes.lineHeight}>hhfghfhdghhhdg</Typography>
          </Grid>
        </Grid>
      </div>
      <SimpleBottomNavigation/>
      <Divider/>
      <Copyright/>
    </div>
  )
}
