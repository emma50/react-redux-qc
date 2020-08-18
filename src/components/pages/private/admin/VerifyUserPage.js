import React from 'react';
import { 
  useDispatch,
  //useSelector 
} from 'react-redux';
// import PropTypes from 'prop-types';
import { useForm } from "react-hook-form";
import { joiResolver } from '@hookform/resolvers';
import { ToastContainer} from 'react-toastify';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import validateUserStatus from '../../../../helpers/validation/status'; 
import { adminVerifyUser } from '../../../../actions/auth';

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

export default function AdminVerifyUser(props) {
  const classes = useStyles();
  const { register, handleSubmit, errors, } = useForm({
    resolver: joiResolver(validateUserStatus)
  });
  // const email = useSelector(state => state.auth.find((user) => user.email === props.match.params.email))
  const dispatch = useDispatch();
  
  const onSubmit = (data, e) => {
    e.preventDefault();
    dispatch(adminVerifyUser(data));
  }

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography>Verifying user with email: {props.match.params.email}</Typography>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Verify User
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit(onSubmit)} noValidate>
            {errors.status && <Typography className={classes.error}>{errors.status.message}</Typography>}
            <TextField
              inputRef={register}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="status"
              label="Status"
              placeholder="must be verified or unverified"
              name="status"
              autoComplete="status"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Verify User
            </Button>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}
