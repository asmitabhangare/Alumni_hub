import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import './style.css';
import Isalogo from '../../assets/images/isaLogo.png';
import Search from '../../assets/images/searchIcon.png';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import Profile from '../../assets/images/profilePic.jpg';
import { Height } from '@material-ui/icons';
import { Box } from '@material-ui/core';
import Bell from '@material-ui/icons/NotificationsActiveOutlined';
import Badge from '@material-ui/core/Badge';
import CreateIcon from '@material-ui/icons/Create';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import Logout from '@material-ui/icons/ExitToApp';

/**
* @author
* @function Header
**/

const Header = (props) => {

    const [search, setSearch] = useState(false);


    const submitSearch = (e) => {
        e.preventDefault();
        alert('Searhed');

    }


    const openSearch = () => {
        setSearch(true);

    }

    const searchClass = search ? 'searchInput active' : 'searchInput';


    // const toggleButton = document.getElementsByClassName('toggle-button')[0]
    // const navbarLinks = document.getElementsByClassName('navbar-links')[0]

    // toggleButton.addEventListener('click', () => {
    //     navbarLinks.classList.toggle('active')
    // })





    return (
        <nav className="navbar">
            <div className="isaLogo">
                <img src={(Isalogo)} alt="IsaLogo" />
            </div>
            <div className='test'>
                <h1>Alumini Hub</h1>
            </div>
            <a href="#" className="mform">
                <form onSubmit={submitSearch} className="mSearch">
                    <input type="text" className={searchClass} placeholder="Search Here" />
                    <img onClick={openSearch} className="searchIcon" src={(Search)} alt="Search" />
                </form>
            </a>
            <a href="#"><div className="mBell">
                <Badge badgeContent={4} color="primary" variant="dot">
                    <Bell className="bellIcon" style={{ height: "25px", width: "25px", color: "white" }}>
                    </Bell></Badge>
            </div></a>
            <a href="#" className="mPost"><CreateIcon style={{ height: "23px", width: "23px", color: "white" }} ></CreateIcon></a>
            <a href="#" className="toggle-button">
                <Avatar alt='src' className="mAva" src={Profile} style={{ height: "35px", width: "35px" }}>
                </Avatar>
                <div className="muldd">
                    <li><a href="#" className="mhomedd"><HomeIcon></HomeIcon>Home</a></li>
                    <li><a href="#"><PersonIcon></PersonIcon>View Profile</a> </li>
                    <li><a href="#"><SettingsIcon></SettingsIcon>Setting</a></li>
                    <li><a href="#" className="msignoutdd"><Logout></Logout>Signout</a></li>
                </div>
            </a>
            <div className="navbar-links">
                <ul>
                    <li><a href="#">
                        <div className="search">
                            <form onSubmit={submitSearch}>
                                <input type="text" className={searchClass} placeholder="Search Here" />
                                <img onClick={openSearch} className="searchIcon" src={(Search)} alt="Search" />
                            </form>
                        </div>

                    </a></li>
                    <li><a href="#">
                        <div className="bell">
                            <Badge badgeContent={4} style={{ color: "white" }}>
                                <Bell style={{ height: "35px", width: "35px", color: "white" }}></Bell>
                            </Badge></div>
                    </a></li>
                    <li><a href="#"><button class="postBtn"><span>Create Post+</span></button></a></li>
                    <li><a href="#">
                        <div className='dropdown'>
                            <Avatar alt='src' className="ava" src={Profile} style={{ height: "45px", width: "45px" }}>
                            </Avatar>
                            <div className="uldd">
                                <li><a href="#" className="homedd"><HomeIcon />Home</a></li>
                                <li><a href="#"><PersonIcon />View profile</a> </li>
                                <li><a href="#"><SettingsIcon />Setting</a> </li>
                                <li><a href="#" className="signoutdd"><Logout />Singout</a> </li>
                            </div>
                        </div>
                    </a></li>
                </ul>
            </div>
        </nav >
    )

}



export default Header;

// import React from 'react'
// import { Container, Paper, Box, Typography, AppBar, Toolbar, Button } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import { Link } from 'react-router-dom';
// import Avatar from '@material-ui/core/Avatar';
// import Isalogo from '../../assets/images/isaLogo.png';
// import './style.css';
// import Search from '../../assets/images/searchIcon.png';
// // import { deepOrange, deepPurple } from '@material-ui/core/colors';
// // import { makeStyles } from '@material-ui/core/styles';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import FormControl from '@material-ui/core/FormControl';
// import TextField from '@material-ui/core/TextField';
// import Grid from '@material-ui/core/Grid';
// // import AccountCircle from '@material-ui/icons/AccountCircle';
// import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';



// const Header = (props) => {
//     return (
//         <AppBar>
//             <Toolbar>
//                 <Typography variant="h6" style={{ flexGrow: 1 }}>
//                     <div className='isaLogo'>
//                         <img src={(Isalogo)} alt="IsaLogo" />
//                     </div>
//                 </Typography>

//                 <div className="searchBar">
//                     <Grid container spacing={1} alignItems="flex-end">
//                         <Grid item>
//                             <SearchOutlinedIcon />
//                         </Grid>
//                         <Grid item>
//                             <TextField id="input-with-icon-grid" label="Search here" />
//                         </Grid>
//                     </Grid>
//                 </div>


//                 {/* <Button class="custom1">Read More</Button> */}
//                 {/* <Button class="custom1" >Home</Button> */}
//                 {/* <Button class="custom1" >About</Button> */}
//                 <Button class="custom1" >Create Post +</Button>
//                 <Button color="inherit" ><Avatar>H</Avatar></Button>
//             </Toolbar>

//         </AppBar>
//     )

// }

// export default Header;