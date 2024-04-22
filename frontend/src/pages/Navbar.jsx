import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Hidden,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
} from '@material-ui/core';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom'; 
import logoImage from '../components/Logo/ByeBurns-logo.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
  },
  loginButton: {
    marginLeft: 'auto',
  },
  drawerPaper: {
    width: 250,
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <List>
        <ListItem button>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Team" />
        </ListItem>
       
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Hidden smUp>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            <img className=" w-24 h-12 mr-2 bg-slate-300 rounded-md" src={logoImage} alt="logo"/>
            <Typography variant="h6" className={classes.title}>
              ByeBurn
            </Typography>
            <Hidden xsDown>
              <Button color="inherit" component={Link} to="/">Home</Button>
              <Button color="inherit" component={Link} to="/signup">Signup</Button>
              <Button color="inherit" component={Link} to="/login">Login</Button>
            </Hidden>
            <Hidden smUp>
              <IconButton
                color="inherit"
                aria-label="login"
                className={classes.loginButton}
                component={Link} 
                to="/login"
              >
                <AccountCircleIcon />
              </IconButton>
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>
      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor="left"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, 
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
};

export default NavBar;
