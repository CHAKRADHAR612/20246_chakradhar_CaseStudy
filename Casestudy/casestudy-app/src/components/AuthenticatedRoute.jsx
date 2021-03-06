import React,{ Component } from "react";
import { Redirect, Route } from "react-router";
import AuthenticationService from "./AuthenticationService";

class AuthenticatedRoute extends Component{
    render(){
        if(AuthenticationService.isLoggedIn()){
            return <Route {...this.props}></Route>
        }else
        return <Redirect to='/login'/>
    }
}

export default AuthenticatedRoute