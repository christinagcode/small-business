import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import cookie from "cookie";
import '../App.css';



const Navigation = (props)=> {
  const {loggedIn, setLoggedIn} = props
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="navigation" position="relative">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: "1"}}>
            Austin Small Business
          </Typography>
          <Button color="inherit" component={Link} to="/listings">Listings</Button>
          <Button color="inherit" component={Link} to="/login"></Button>
          {loggedIn ? (
              <div
              className="nav-list-item"
              onClick={() => {
                document.cookie = cookie.serialize("isLoggedIn", null, {
                  maxAge: 0,
                });
                setLoggedIn(false)
                navigate("/login");
              }}
            >
              LOGOUT 
            </div>
          ) : (
            <div
            className="nav-list-item"
            onClick={() => {
              navigate("/login")
            }}>
             LOGIN
          </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navigation;