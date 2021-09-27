import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import AddTask from './AddTask';
import AuthenticatedRoute from './AuthenticatedRoute';
import FooterComponent from './FooterComponent';
import GetAdminTasks from './GetAdminTasks';
import GetTasks from './GetTasks';
import GetUsers from './GetUsers';
import HeaderComponent from './HeaderComponent';
import LoginComponent from './LoginComponent';
import LogoutComponent from './LogoutComponent';
import SignUpComponent from './SignUpComponent';
import UpdateTask from './UpdateTask';
class TmsApp extends Component{
    render(){
        return(
            <Router>
                <HeaderComponent></HeaderComponent>
                <Switch>
                    <Route path='/' exact component={LoginComponent}/>
                    <Route path='/login' component={LoginComponent}/>
                    <Route path='/signUp' component={SignUpComponent}/>
                    <AuthenticatedRoute path='/users' component={GetUsers}/>
                    <AuthenticatedRoute path='/tasks/:user_id' component={GetTasks}/>
                    <AuthenticatedRoute path='/adminTasks/:creator_id' component={GetAdminTasks}/>
                    <AuthenticatedRoute path='/addTask' component={AddTask}/>
                    <AuthenticatedRoute path='/updateTask/:taskId' component={UpdateTask}/>
                    <AuthenticatedRoute path='/logout' component={LogoutComponent}/>
                </Switch>
                <br/>
                <FooterComponent></FooterComponent>
            </Router>
        );
    }
}
export default TmsApp;