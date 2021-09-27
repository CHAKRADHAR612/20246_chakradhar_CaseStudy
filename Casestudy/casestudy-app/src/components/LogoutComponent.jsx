import React, { Component } from "react";
import AuthenticationService from "./AuthenticationService";
import RoleService from "./RoleService";
class LogoutComponent extends Component{
    render(){
        return(
            <div>
                {AuthenticationService.registerSuccessfulLogout()}
                {RoleService.deleteRole()}
                <h1>Logged Out successfully</h1>
                <h2>Thank you for using the app</h2>
            </div>
        );
    }
}
export default LogoutComponent;