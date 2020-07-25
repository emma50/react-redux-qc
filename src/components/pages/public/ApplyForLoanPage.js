import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useForm } from "react-hook-form";
import { joiResolver } from '@hookform/resolvers';
import { ToastContainer} from 'react-toastify';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import validateLoan from '../../../helpers/validation/loans'; 
import { userApplyForLoan } from '../../../actions/loans';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  error: {
    background: 'yellow',
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function ApplyForLoan() {
  const classes = useStyles();
  const { register, handleSubmit, errors, } = useForm({
    resolver: joiResolver(validateLoan),
  });
  const dispatch = useDispatch();
  
  const onSubmit = (data, e) => {
    e.preventDefault();
    dispatch(userApplyForLoan(data));
  }

  return (
    <div>
      <ToastContainer/>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Apply for loan
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit(onSubmit)} noValidate>
            {errors.amount  && <Typography className={classes.error}>{errors.amount.message}</Typography>}
            {errors.tenor && <Typography className={classes.error}>{errors.tenor.message}</Typography>}
            <TextField
              inputRef={register}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="amount"
              label="Amount"
              placeholder="e.g 10000"
              name="amount"
              autoComplete="amount"
              autoFocus
            />
            <TextField
              inputRef={register}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="tenor"
              label="Tenor"
              placeholder="e.g 1-12"
              type="tenor"
              id="tenor"
              autoComplete="tenor"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Apply
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}

ApplyForLoan.propTypes = {
  validateLoan: PropTypes.object,
  userApplyForLoan: PropTypes.func,
  amount: PropTypes.string,
  tenor: PropTypes.string
}
