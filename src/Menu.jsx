import React from "react";
import { NavLink } from "react-router-dom";
import  HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import CallRoundedIcon from '@material-ui/icons/CallRounded';
import WorkRoundedIcon from '@material-ui/icons/WorkRounded';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles,alpha} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import ListFoods from "./Listfoods";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Menu=()=>{
    const classes = useStyles();
    return(
        <>
       <div className={classes.root}>
      <AppBar position="static" color="#f5f5f5">
        <Toolbar>
        <NavLink to='/' style={{padding:"10px"}}><a href="#"><img src="https://seeklogo.com/images/T/tea-cups-logo-5EC2488164-seeklogo.com.png" alt="" style={{heigth:"30px",width:"30px"}}/></a></NavLink>
       
          <Typography variant="h6" className={classes.title}>
            FODDIE APPIE
          </Typography> 
            <NavLink to='/' activeClassName="active_class" style={{padding:"10px"}}><HomeRoundedIcon className="iconadjust"/>Home</NavLink>
            <NavLink to='/about' activeClassName="active_class" style={{padding:"10px"}}><PeopleAltRoundedIcon className="iconadjust"/>About us</NavLink>
            <NavLink to='/contact' activeClassName="active_class" style={{padding:"10px"}}><CallRoundedIcon className="iconadjust"/>Contact us</NavLink>
            <NavLink to='/session' activeClassName="active_class" style={{padding:"10px"}}><WorkRoundedIcon className="iconadjust" />Session</NavLink>
            <NavLink to='/cart' activeClassName="active_class" style={{padding:"10px"}}><ShoppingCartIcon className="iconadjust"/>CART</NavLink>
        <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <Button color="inherit" style={{padding:"10px"}}>Login</Button>
        <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu" style={{padding:"10px"}}>
            <MenuIcon />
          </IconButton> 
          </Toolbar>
      </AppBar>
    </div>
        
        </>
    )
 }

export default Menu;



