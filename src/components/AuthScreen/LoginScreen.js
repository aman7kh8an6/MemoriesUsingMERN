import React, {useState, useEffect, useContext} from 'react'
import { TextField, Box,Grid,Item,FormControlLabel,Checkbox,Button,Link,
    ThemeProvider,Container,CssBaseline,Typography,Copyright,Avatar,createTheme } from '@material-ui/core'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../contexts/AuthContext';


const theme = createTheme();


const LoginScreen = () => {
    const [ user, setUser ] = useContext(AppContext)
    const navigate = useNavigate();
    const [listOfUsers, setListOfUsers] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [IsAuth, setIsAuth] = useState(true);


    const getUsers = async () =>{
      const result = await Axios.get('http://localhost:5000/signup/getUsers');
      setListOfUsers(result.data);
    }

    getUsers();

    const handleSubmit = () =>{
      console.log(email,password);
      for(let i = 0; i < listOfUsers.length; i++){
        if(listOfUsers[i].email === email){
          setUser(listOfUsers[i]);
          console.log("Login:  ",user)
          navigate('/');
        }
      }
      navigate('/');
      console.log('wrong credentials')
    }
    
    // console.log(flag);
    return (
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop:50,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
             
            </Avatar>
            <Typography component="h1" variant="h5">
              Log In
            </Typography>
            <Box component="form" noValidate  sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={(event)=> setEmail(event.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={(event)=> setPassword(event.target.value)}
                  />
                </Grid>
                {IsAuth === false ? 
                  <Grid item xs={12}>
                    <Typography variant='h6' color='secondary'> Oooppss! Wrong credentials..</Typography>
                  </Grid>
                :
                <Grid item xs={12}>
                    
                </Grid>
                }
              </Grid>
              <Button
                type="button"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                color="primary"
                onClick={handleSubmit}
              
              >
                Sign In
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/auth" variant="body2">
                    Don't have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
  
        </Container>
       </ThemeProvider>
    )
}

export default LoginScreen
