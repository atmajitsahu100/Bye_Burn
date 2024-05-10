import React, { useEffect, useState } from 'react';
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
import { Link, useNavigate} from 'react-router-dom'; 
import { useParams } from 'react-router';
import logoImage from '../components/Logo/ByeBurns-logo.png'
import { toast } from 'react-toastify';
import { FaRegUserCircle } from "react-icons/fa";
import Hamburger from '../components/Logo/bars-solid.svg'

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
const handleLogout = () => {
  // Clear JWT token from local storage or session storage
  localStorage.removeItem('jwtToken'); // Or sessionStorage.removeItem('jwtToken');

  // setIsLoggedIn(false);
  toast.success("Logged Out");
};

const NavBar = ({isLoggedIn, setIsLoggedIn}) => {
  
  const { patientId } = useParams(); 

  const [openRight, setOpenRight] = React.useState(false);
 
  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);

  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // useEffect( ()=>{
  //   selectedValue === "select" ?
  //   (navigate('/patientdetails')) : 
  //   (navigate(`/${selectedValue}`)) 
  // },[selectedValue])

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navigate = useNavigate();
  
  function LogoHandler(){
    isLoggedIn === true ? (navigate('/patientdetails')) : (navigate('/'))
  }

  const drawer = (
    <div>
      <List>
        <ListItem button>
          <ListItemText primary="Home" onClick={()=>{
            isLoggedIn === true ? 
            (navigate('/patientdetails')) :
            (navigate('/login'))
          }} />
        </ListItem>
        { isLoggedIn &&
          <ListItem button>
            <ListItemText primary="Estimation of TBSA/TFR"  
            onClick={()=>{navigate(`/humanmodel`, { state: { patientId: patientId } })}} />
          </ListItem>
          }
        { isLoggedIn &&
          <ListItem button>
            <ListItemText primary="Burn Classification" onClick={()=>navigate('/uploadimage')}/>
          </ListItem>
        }
        { isLoggedIn &&
          <ListItem button>
            <ListItemText primary="Burn Segmentation" onClick={()=>navigate('/uploadimage')}/>
          </ListItem>
        }
        <ListItem button>
          <ListItemText primary="About" onClick={()=>navigate('/about')}/>
        </ListItem>
        <ListItem button>
          <ListItemText primary="Contact" onClick={()=>navigate('/contact')}/>
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
            <img className=" w-24 h-12 mr-2 bg-transparen rounded-md hover:cursor-pointer" src={logoImage} 
            onClick={LogoHandler} alt="logo"/>
            <Typography variant="h6" className={classes.title}>
              ByeBurns
            </Typography>
            <Hidden xsDown>
              { isLoggedIn === true ?
                (<Button color="inherit" component={Link} to="/patientdetails">Home</Button>) : 
                (<Button color="inherit" component={Link} to="/login">Home</Button>)
              }
              { !isLoggedIn && 
                <Button color="inherit" component={Link} to="/signup">Signup</Button>
              }
              { !isLoggedIn &&
                <Button color="inherit" component={Link} to="/login">Login</Button>
              }
              { isLoggedIn &&
                <Button color="inherit" component={Link} to="/" 
                  onClick={()=>{
                    setIsLoggedIn(false);
                    toast.success("Logged Out")
                  }}>Logout</Button>
              }
              { 
                <Button color="inherit" component={Link} to="/about">About</Button>
              }
              { 
                <Button color="inherit" component={Link} to="/contact">Contact</Button>
              }
              {
                isLoggedIn &&
                <Button color='inherit'><FaRegUserCircle className='size-5'/></Button>
              }

              {
                isLoggedIn && 
                <div>
                <Button onClick={openDrawerRight} className='bg-inherit'>
                <img src={Hamburger} alt='' className='w-6 h-6' /></Button>
                <Drawer
                  open={openRight}
                  onClose={closeDrawerRight}
                  className="p-4"
                  >
                <div className="w-full flex flex-col justify-center items-center p-3">
                  <Typography variant="h5" color="blue-gray">
                    Select
                  </Typography>
                  <IconButton
                    variant="text"
                    color="blue-gray"
                    onClick={closeDrawerRight}
                    >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-5 w-5"
                      >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                  </IconButton>
                  <div className='w-[300px] flex flex-col gap-3 rounded-md'>
                    <button onClick={()=>{navigate(`/humanmodel`, { state: { patientId: patientId } })}} value="humanmodel" className='h-12'>Estimation of TBSA/TFR</button>
                    <button onClick={()=>navigate('/uploadimage')} className='h-12'>Burn Classification</button>
                    <button onClick={()=>navigate('/uploadimage')} className='h-12'>Burn Segementation</button>
                    {/* <button onClick={()=>navigate('/about')} className='h-12'>About Us</button>
                    <button onClick={()=>navigate('/contact')} className='h-12'>Contact</button> */}
                  </div>
                </div>
                </Drawer>
              </div>
              }
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
