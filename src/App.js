import React, {useEffect, useState} from "react";
import { BrowserRouter } from "react-router-dom";
import cookie from "cookie";
import Navigation from "./components/Navigation";
import Router from "./Router";
import Details from "./components/Details";
import store from "./redux/store";


import "./App.css";
import { Provider } from "react-redux";



function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  useEffect(()=>{
    const cookies = cookie.parse(document.cookie)
    setLoggedIn(cookies.isLoggedIn === 'true' ? true : false)

  }, [loggedIn]) 

  return (
  <Provider store={store}>
  <BrowserRouter>
  
      <Navigation loggedIn = {loggedIn} setLoggedIn ={setLoggedIn} />
      <Router loggedIn = {loggedIn} setLoggedIn ={setLoggedIn}/>
     
    </BrowserRouter>
    </Provider>
  );
}

export default App;