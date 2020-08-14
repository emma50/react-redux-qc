import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const str = `Quick Credit is an online lending platform that provides short term soft loans to individuals. 
  Helps solve problems of financial inclusion as a way to alleviate poverty and empower
  low income earners.`;

const useStyles = makeStyles((theme) => ({
  box: {
    width: '100vw',       
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(8),
    },
  },
  img: {
    width: '100%',
    display: 'block',
    [theme.breakpoints.down('sm')]: {
      height: '300px',
    },
  },
  root: {
    //
  },
  loanPhrase: {
    position: 'absolute',
    top: '80px',
    left: '10%',
    right: '5%',
    textAlign: 'center',
    overflow: 'hidden',
    maxWidth: '250px',
    height: '40px',
    backgroundColor: 'black',
    borderRadius: '3%',
    wordBreak: 'break-all',
    [theme.breakpoints.up('sm')]: {
      top: '90px',
      left: '6%',
      maxWidth: '450px',
    },
    [theme.breakpoints.up('md')]: {
      top: '90px',
      left: '6%',
      maxWidth: '450px',
    },
  },
  loanPhraseContent: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'white',
    padding: `${theme.spacing(1)}px ${theme.spacing(0.5)}px ${theme.spacing(2)}px ${theme.spacing(0.7)}px`,
    [theme.breakpoints.up('sm')]: {
      fontSize: 'x-large',
      paddingTop: theme.spacing(0.6),
    },
    [theme.breakpoints.down(450)]: {
      //fontSize: 'x-large',
      paddingTop: theme.spacing(0.2),
      paddingBottom: theme.spacing(0.2),
    },
  },
  description: {
    position: 'absolute',
    top: '150px',
    left: '5%',
    overflow: 'hidden',
    wordBreak: 'break-all',
    [theme.breakpoints.up('sm')]: {
      top: '170px',
      left: '3.2%',
    },
    [theme.breakpoints.up('md')]: {
      top: '180px',
      left: '6%',
    },
  },
  descriptionPara1: {
    fontWeight: 'bold', 
    textTransform: 'uppercase', 
    paddingBottom: '2px',
    [theme.breakpoints.up('sm')]: {
      fontSize: 'x-large'
    },
  },
  descriptionPara2: {
    fontWeight: 'bold', 
    textTransform: 'uppercase', 
    paddingBottom: '2px',
    [theme.breakpoints.up('sm')]: {
      fontSize: 'x-large'
    },
  },
  descriptionPara3: {
    fontWeight: 'bold', 
    textTransform: 'uppercase',
    [theme.breakpoints.up('sm')]: {
      fontSize: 'x-large'
    }, 
  },
  contentHeader: {
    fontWeight: 'bold', 
    textTransform: 'uppercase',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      textAlign: 'left',
      marginLeft: '10%',
    },
  },
  typography: {
    marginTop: '2px', 
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
     display: 'none',
    },
  },
  content: {
    // overflow: 'hidden',
    minWidth: '370px',
    fontWeight: 900,
    wordBreak: 'break-all',
    margin: `${theme.spacing(5)}px auto 0 auto`,
  },
  desktopTypography: {
    margin: `0 10% 0 10%`,
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
}));

export default function Image() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div>
      <div className={classes.box}>
        <img src='./images/bg.jpg' alt='Laptop' className={classes.img}></img>
        <div className={classes.loanPhrase}>
          <Typography className={classes.loanPhraseContent}>
            For your every need...
          </Typography>
        </div>
        <div className={classes.description}>
          <Typography className={classes.descriptionPara1}>Loans that matter</Typography>
          <Typography className={classes.descriptionPara2}>Need a loan?</Typography>
          <Button 
            variant="contained" 
            color='primary' 
            onClick={() => history.push('/applyforloan')}
            className={classes.descriptionPara3}
            >
              apply now
            </Button>
        </div>
        <div className={classes.content}>
          <div>
            <Typography className={classes.contentHeader}>
              Home to fast loans...
            </Typography>
          </div>
          <div className={classes.typography}>
            <Typography>Quick Credit is an online lending platform</Typography>
            <Typography>that provides short term soft loans to individuals.</Typography>
            <Typography>Helps solve problems of financial inclusion</Typography>
            <Typography>as a way to alleviate poverty and empower</Typography>
            <Typography>low income earners.</Typography>
          </div>
          <div>
            <Typography className={classes.desktopTypography}> 
              {str}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
