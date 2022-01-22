import React from 'react'
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import AuthScreen from './components/AuthScreen/AuthScreen';
import LoginScreen from './components/AuthScreen/LoginScreen';
import Home from './components/Home/Home';
import AuthContextState from './contexts/AuthContext';

const App = () =>{

    return (
        <AuthContextState>
        <Router>
            
            <Routes>
                <Route path='/' element = {<Home />}/>
                <Route path='/auth' element={<AuthScreen />}/>
                <Route path='/loginScreen' element={<LoginScreen />}/>
            </Routes>
        </Router>
      </AuthContextState>
    );
}

export default App