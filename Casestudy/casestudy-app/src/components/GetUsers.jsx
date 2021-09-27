import React, { Component } from "react";
import axios from 'axios';
class GetUsers extends Component {
    constructor(props){
        super(props)
        this.state={
            users:[]
        }
    }
    componentDidMount(){
        axios.get('http://localhost:8080/myusers')
        .then(response=>this.setState({users:response.data}))
    }
    render(){
        return(
            <div className='container-fluid'>
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>userId</th>
                                <th>userName</th>
                                <th>email</th>
                                <th>firstName</th>
                                <th>lastName</th>
                                <th>Mobile no</th>
                                <th>Role</th>
                                <th>Date of Birth</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.users.map(user=>
                            <tr key={user.user_id}>
                                <td>{user.user_id}</td>
                                <td>{user.user_name}</td>
                                <td>{user.email}</td>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td>{user.mobile_no}</td>
                                <td>{user.role}</td>
                                <td>{user.dob}</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
            </div>
        );
    }
} 
export default GetUsers;