import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../App.css';

const Login = ({ loggedIn, setLoggedIn }) => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const login = (e) => {
    e.preventDefault();
 
    setLoggedIn(true);
    document.cookie = "isLoggedIn=true; max-age=6-*1000";
    navigate("/listings");
  };


const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#bdbdbd',
      darker: '#053e85',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});

  return (
    <div className="App">
      <Container maxWidth="sm">
        <form className="login-form" onSubmit={login}>
          <TextField
            required
            onChange={handleTextChange}
            value={state.username}
            name="username"
            label="Username"
            type="text"
            variant="standard"
            
          />
          <TextField
            required
            onChange={handleTextChange}
            value={state.username}
            name="password"
            label="Password"
            type="password"
            variant="standard"
          />
           <ThemeProvider theme={theme}>
          <Button
            type="submit"
            className="login-button"
            variant="contained"
            color="primary"
            sx={{top: 20}}
          >
            Login
          </Button>
          </ThemeProvider>
        </form>
      </Container>
    </div>
  );
};

export default Login;
