import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import AuthenticationService from "./AuthenticationService";
import RoleService from "./RoleService";
class HeaderComponent extends Component{
    render(){
        let userLoggedIn=AuthenticationService.isLoggedIn()
        let isAdmin=RoleService.isAdmin()
        let user=AuthenticationService.getUserId()
        let isTaskOwner=RoleService.isTaskOwner()  
        console.log(userLoggedIn)
        return <div className='Header container-fluid'>
            <header>
                <nav className='navbar navbar-expand-md navbar-dark bg-primary'>
                    <div className='navbar-brand justify-content-center'>TMS</div>
                    <ul className='navbar-nav navbar-collapse'>
                        {(userLoggedIn && isAdmin) && <li><Link className='nav-link' to={{pathname:`/adminTasks/${user}`}}>Tasks</Link></li>}
                        {(userLoggedIn && isAdmin) && <li><Link className='nav-link' to='/addTask'>CreateTask</Link></li>}
                        {(userLoggedIn && isAdmin) && <li><Link className='nav-link' to='/users'>UsersList</Link></li>}
                        {(userLoggedIn && isTaskOwner) && <li><Link className='nav-link' to={{pathname:`/tasks/${user}`}}>Tasks</Link></li>}
                    </ul>
                    <ul className='navbar-nav navbar-collapse justify-content-end'>
                        {!userLoggedIn && <li><Link className='nav-link' to='/signUp'>SignUp</Link></li>}
                        {!userLoggedIn && <li><Link className='nav-link' to='/login'>Login</Link></li>}
                        {userLoggedIn && <li><Link className='nav-link' to='/logout' onClick={AuthenticationService.registerSuccessfulLogout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        </div>
    }
}

export default withRouter(HeaderComponent);