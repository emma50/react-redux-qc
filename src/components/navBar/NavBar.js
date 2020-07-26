import React from 'react';
import { useHistory } from "react-router-dom";
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/Button';
import Button from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    // overflowX: 'hidden',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
    fontSize: 'small',
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  // Desktop view
  desktopRoot: {
    flexGrow: 1,
    // position: 'fixed',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  desktopTitle: {
    flexGrow: 1,
    fontSize: 'small',
  },
  fontSize: {
    fontSize: 'small',
  },
  // hiddenForMobile: {
  //   [theme.breakpoints.down('sm')]: {
  //     display: 'none',
  //   },
  // },
}));

export default function PersistentDrawerRight(props) {
  const history = useHistory()
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <Typography variant="h6" noWrap className={classes.title}>
              QUICK CREDIT
            </Typography>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              className={clsx(open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="right"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            {['Apply Now', 'Home', 'Contact', 'Login', 'Register'].map((text) => (
              <ListItem button key={text} onClick={(text) => {
                if (text === 'Apply Now') history.push('/applyforloan');
                if (text === 'Home') history.push('/');
                if (text === 'Login') history.push('/signin');
                if (text === 'Register') history.push('/signup')
              }}>
                <ListItemText primary={text}/>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </div>
      <div className={classes.desktopRoot}>
        <AppBar position="fixed" className={classes.hiddenForMobile}>
          <Toolbar>
            <Typography variant="h6" className={classes.desktopTitle}>
              <Button color="inherit" style={{'fontSize': 'small'}}>QUICK CREDIT</Button>
            </Typography>
            <Typography>
              <Button 
                color="inherit" 
                className={classes.desktopTitle} 
                onClick={() => history.push('/applyforloan')}
              > 
                Apply Now
              </Button>
              <Button 
                color="inherit" 
                className={classes.fontSize} 
                onClick={() => history.push('/')}
              >
                Home
              </Button>
              <Button 
                color="inherit" 
                className={classes.fontSize}
              >
                Contact
              </Button>
              <Button 
                color="inherit" 
                className={classes.fontSize} 
                onClick={() => history.push('/signin')}
              >
                Login
              </Button>
              <Button 
                color="inherit" 
                className={classes.fontSize}
                onClick={() => history.push('/signup')}
              > 
                Register
              </Button>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}
