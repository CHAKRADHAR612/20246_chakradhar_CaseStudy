import React, { Component } from "react";
import axios from 'axios';
import AuthenticationService from "./AuthenticationService";
import RoleService from "./RoleService";
class GetAdminTasks extends Component{
    constructor(props){
        super(props)
        this.state={
            tasks:[],
            creatorId:this.props.match.params.creator_id,
            status:'',
        }
    }
    handleTask=()=>{
        let creator_id=this.state.creatorId;
        axios.get(`http://localhost:8080/adminTasks/${creator_id}`)
        .then(response=>this.setState({tasks:response.data}))
    }
    componentDidMount(){
        this.handleTask()

    }
    handleDelete=(taskId)=>{
        axios.delete(`http://localhost:8080/tasks/${taskId}`)
        .then(response=>{alert(response.data); window.location.reload()})
    }
    handleStatus=(e)=>{
        console.log(e.target.value)
        this.setState({status:e.target.value})
    }
    render(){
        return(
            <div className='container-fluid' style={{'padding':'30px'}}>
                <h3 style={{'textAlign':'left'}}>Hi,{AuthenticationService.getUser()}({RoleService.getRole()})</h3>
                <div style={{'textAlign':'left','margin':'20px'}}>
                Select Task Status:<select name='status' onChange={this.handleStatus}>
                        <option value=''>select--</option>
                        <option value='New'>New</option>
                        <option value='In progress'>In progress</option>
                        <option value='Completed'>Completed</option>
                    </select>
                </div>
                <h1>Here are your created Tasks</h1>
                    {/* <div style={{'textAlign':'right','margin':'20px'}}><Link to='/addTask' style={{'textDecoration':'none','color':'black'}}>Add task here...</Link></div> */}
                    <div className='row'>
                    {this.state.tasks.map(task=>
                                {if(task.status===this.state.status){
                                    return(
                                <div className='col-6' key={task.taskId}>
                                <table border='solid' className='table table-bordered'>
                                    <tbody>
                                    <tr>
                                        <td>Task name:</td>
                                        <td>{task.name}</td>
                                    </tr>
                                    <tr>
                                        <td>Task description:</td>
                                        <td>{task.description}</td>
                                    </tr>
                                    <tr>
                                        <td>Task priority:</td>
                                        <td>{task.priority}</td>
                                    </tr>
                                    <tr>
                                        <td>Task status:</td>
                                        <td>{task.status}</td>
                                    </tr>
                                    <tr>
                                        <td colSpan='2'><button onClick={()=>this.handleDelete(task.taskId)} className='btn btn-danger'>Delete</button></td>
                                    </tr>
                                    </tbody>
                                </table>
                                <br/>
                            </div>)}
                                else if(this.state.status===''){
                                    return(
                                    <div className='col-6' key={task.taskId}>
                                    <table border='solid' className='table table-bordered'>
                                        <tbody>
                                        <tr>
                                            <td>Task name:</td>
                                            <td>{task.name}</td>
                                        </tr>
                                        <tr>
                                            <td>Task description:</td>
                                            <td>{task.description}</td>
                                        </tr>
                                        <tr>
                                            <td>Task priority:</td>
                                            <td>{task.priority}</td>
                                        </tr>
                                        <tr>
                                            <td>Task status:</td>
                                            <td>{task.status}</td>
                                        </tr>
                                        <tr>
                                            <td colSpan='2'><button onClick={()=>this.handleDelete(task.taskId)} className='btn btn-danger'>Delete</button></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <br/>
                                </div>)}

                                }
                            )}
                    </div>
                    {/* <button onClick={this.handleClick}>Click Me!</button>
                    <h1>{this.state.name}</h1> */}
            </div>
        );
    }
} 
export default GetAdminTasks;