
import React from 'react';
import {Routes, Route} from 'react-router';
import Home from './containers/Home';
import Login from './components/Login';
import cookie from 'cookie';
import Details from './components/Details';
import AddBiz from './containers/AddBusiness';


// checks for the cookies for a cookie called "loggedIn"
const checkAuth = () =>{
    const cookies = cookie.parse(document.cookie)
    console.log(cookies.isLoggedIn)
    return cookies.isLoggedIn
}

const ProtectedRoute = (props) => {
    const {component: Component, ...rest} = props
    console.log(rest) 
        return checkAuth() ? <Component {...rest}/> : <p>Not Authenticated</p> 
    }


const Router = ({loggedIn, setLoggedIn}) => {

    return (
        <Routes>
            <Route path="/login" element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}/>
            <Route path="/listings" element={<Home loggedIn={loggedIn} />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/addbusiness" element={<AddBiz loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}/>
        </Routes>
    )
}

export default Router;