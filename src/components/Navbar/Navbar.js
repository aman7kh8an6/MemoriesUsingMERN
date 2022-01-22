import React, {useContext} from 'react'
import { Link,BrowserRouter as Router, Routes, useNavigate } from 'react-router-dom';
import { AppBar, Typography, Toolbar, Button, Avatar} from '@material-ui/core';
import memories from '../../images/memories.png';
import useStyles from './styles';
import { AppContext } from '../../contexts/AuthContext';
const Navbar = () => {
    const navigate = useNavigate();
    const classes = useStyles();
    const [ user, setUser ] = useContext(AppContext);
    // const user = null
    console.log('Navbar  ',user.length);
    const handleLogout = () =>{
        setUser({"first_name": '', "last_name": ''});
        navigate('/loginScreen')
    }
    return (
            <AppBar className={classes.appBar} position="static" color="inherit">
                <div className={classes.brandContainer}>
                    <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                    <img className={classes.image} src={memories} alt="icon" height="60" />
                </div>

                <Toolbar className={classes.toolbar}>
                    {user.first_name.length > 0? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.first_name.charAt(0).first_name} >{user.first_name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6">{user.first_name +' '+ user.last_name}</Typography>
                        <Button variant="contained" className={classes.logout} color="secondary" onClick={handleLogout}>Logout</Button>
                    </div>
                    ) : (
                    <Button component={Link} to="/loginScreen" variant="contained" color="primary">Sign In</Button>
    
                    )}
                </Toolbar>
            </AppBar>
    )
}

export default Navbar
