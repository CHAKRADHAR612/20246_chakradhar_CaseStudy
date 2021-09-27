import React, { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import AuthenticationService from "./AuthenticationService";
import RoleService from "./RoleService";
class GetTasks extends Component{
    constructor(props){
        super(props)
        this.state={
            tasks:[],
            ownerId:this.props.match.params.user_id,
            status:'',
            priority:''
        }
    }
    handleTask=()=>{
        let owner_id=this.state.ownerId;
        axios.get(`http://localhost:8080/tasks/${owner_id}`)
        .then(response=>this.setState({tasks:response.data}))
    }
    componentDidMount(){
        this.handleTask()

    }
    handleUpdate=(taskId)=>{
        this.props.history.push(`/updateTask/${taskId}`)
    }
    handleStatus=(e)=>{
        console.log(e.target.value)
        this.setState({status:e.target.value})
    }
    handlePriority=(e)=>{
        console.log(e.target.value)
        this.setState({priority:e.target.value})
    }
    render(){
        return(
            <div className='container-fluid' style={{'padding':'30px'}}>
                <h3 style={{'textAlign':'left'}}>Hi,{AuthenticationService.getUser()}({RoleService.getRole()})</h3>
                <div style={{'textAlign':'left','margin':'20px'}}>
                Select Task Status:<select name='status' style={{'marginRight':'15px'}} onChange={this.handleStatus}>
                        <option value=''>select--</option>
                        <option value='New'>New</option>
                        <option value='In progress'>In progress</option>
                        <option value='Completed'>Completed</option>
                    </select>
                Select Task Priority:<select name='priority' onChange={this.handlePriority}>
                        <option value=''>select--</option>
                        <option value='High'>High</option>
                        <option value='Medium'>Medium</option>
                        <option value='Low'>Low</option>
                    </select>
                </div>
                
                <h1>Here are your Tasks</h1>
                    {/* <div style={{'textAlign':'right','margin':'20px'}}><Link to='/addTask' style={{'textDecoration':'none','color':'black'}}>Add task here...</Link></div> */}
                    <div className='row'>
                        {this.state.tasks.map(task=>
                                {if(task.status===this.state.status && task.priority===this.state.priority){
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
                                        <td colSpan='2'><button onClick={()=>this.handleUpdate(task.taskId)} className='btn btn-info'>Update</button></td>
                                    </tr>
                                    </tbody>
                                </table>
                                <br/>
                            </div>)}
                                else if(this.state.status==='' && task.priority===this.state.priority){
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
                                            <td colSpan='2'><button onClick={()=>this.handleUpdate(task.taskId)} className='btn btn-info'>Update</button></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <br/>
                                </div>)}
                                else if(task.status===this.state.status && this.state.priority===''){
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
                                            <td colSpan='2'><button onClick={()=>this.handleUpdate(task.taskId)} className='btn btn-info'>Update</button></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <br/>
                                </div>)}
                                else if(this.state.status==='' && this.state.priority===''){
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
                                            <td colSpan='2'><button onClick={()=>this.handleUpdate(task.taskId)} className='btn btn-info'>Update</button></td>
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
export default GetTasks;