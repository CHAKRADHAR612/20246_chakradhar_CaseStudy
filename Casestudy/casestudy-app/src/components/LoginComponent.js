import axios from 'axios';
import React, { Component } from 'react'
import AuthenticationService from "./AuthenticationService";
import RoleService from "./RoleService";
import { Link } from 'react-router-dom';
class LoginComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            users:[],
            username:'',
            password:'',
            role:'',
            userId:0,
            hasFailed:false
            
        }
    }
    handleWelcome=()=>{
        axios.get("http://localhost:8080/myusers")
        .then(response=>{this.setState({users:response.data})})
    }
    componentDidMount(){
        this.handleWelcome()
    }
    handleLogin=()=>{
        // console.log(e.)
        this.state.users.map(user=>{

            if(this.state.username===user.user_name && this.state.password===user.password && this.state.role===user.role){
                alert('Login Successful')
                console.log(this.state)
                let myRole=user.role;
                AuthenticationService.registerSuccessfulLogin(this.state.username,user.user_id)
                RoleService.setRole(myRole);
                if(RoleService.getRole()==='Admin'){
                    this.props.history.push(`/adminTasks/${user.user_id}`)
                }
                else if(RoleService.getRole()==='task owner'){
                    this.props.history.push(`/tasks/${user.user_id}`)
                }
                // let user1=user.user_id;
                this.setState({hasFailed:false})
                // console.log(this.state.SuccessMsg)
                // console.log(user.user +" "+ user.password)
                // console.log(this.state)
            }else{
                console.log(this.state.username+" "+this.state.password)
                this.setState({hasFailed:true})
                console.log("Login Failed")
            }
        }
        )
        // this.props.history.push("/users")
        // axios.post("http://localhost:8080/users",)
    }
    handleChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    handleReset=()=>{
        this.setState({username:'',password:'',role:'',hasFailed:true})
    }
    render(){
        return(
            <div>
                    <h1>Welcome to Task Management System</h1>
                    <h2><em>Login Here....</em></h2>
                    {this.state.hasFailed && <h1 style={{'color':'red'}}>Invalid Credentials</h1>}
                    <br/>
                    <label htmlFor='username'>Username:</label>
                    <input style={{'marginLeft':'5px'}} type='text' name='username' placeholder='Enter username here' value={this.state.username} onChange={this.handleChange}/><br/>
                    <br/>
                    <label htmlFor='password'>Password:</label>
                    <input style={{'marginLeft':'5px'}} type='password' name='password' placeholder='Enter password here' value={this.state.password} onChange={this.handleChange}/><br></br>
                    <br/>
                    <label htmlFor='role'>Role:</label>
                    <select style={{'marginLeft':'5px'}} name='role' id='role' value={this.state.role} onChange={this.handleChange}>
                        <option value=''>select--</option>
                        <option value='Admin'>Admin</option>
                        <option value='task owner'>Task Owner</option>
                    </select>
                    <br/><br/>
                    <button onClick={this.handleLogin} className='btn btn-outline-dark'>Submit</button>
                    <button onClick={this.handleReset} className='btn btn-outline-warning' style={{'margin':'10px'}}>Reset</button>
                    <br/><Link style={{'textDecoration':'none','color':'black'}} to='/signUp'>New User? SignUp Here</Link>
            </div>
        );
    }
}
export default LoginComponent;