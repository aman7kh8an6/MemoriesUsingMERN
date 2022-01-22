import React,{useState, useEffect} from 'react'
import { TextField, Box,Grid,Item,FormControlLabel,Checkbox,Button,Link,
    ThemeProvider,Container,CssBaseline,Typography,Copyright,Avatar,createTheme } from '@material-ui/core'
import './AuthScreen.css'
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

const AuthScreen = () => {
  const navigate = useNavigate();
  const [listOfUsers, setListOfUsers] = useState([]);
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  

  const createUser = () =>{
    Axios.post("http://localhost:5000/signup/createUser", {
        first_name,
        last_name,
        email,
        password
    }).then((response)=>{
        setListOfUsers([...listOfUsers, {
          first_name,
          last_name,
          email,
          password
      }]);
      navigate('/loginScreen');
    })
}
{console.log(listOfUsers)}

    return (
        <ThemeProvider theme={theme} id="auth-screen">
      <Container component="main" maxWidth="xs" id="auth-container">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 50,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
           
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={(event)=> setFirstName(event.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={(event)=> setLastName(event.target.value)}
                />
              </Grid>
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
              <Grid item xs={12}>
            
              </Grid>
            </Grid>
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="primary"
              onClick={createUser}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/loginScreen" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>

      </Container>
     </ThemeProvider>
    )
}

export default AuthScreen
