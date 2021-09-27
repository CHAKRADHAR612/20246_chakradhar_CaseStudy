import axios from "axios";
import React, { Component } from "react";
import AuthenticationService from "./AuthenticationService";
class UpdateTaskDemo extends Component{
    constructor(props){
        super(props);
        this.state={
            taskid:this.props.match.params.taskId,
            utask:{
                status:'',
                priority:'',
                notes:''
            },
            task1:{},
            status:'',
            priority:'',
            notes:''
        }
    }
    // handleChange=(e)=>{
    //     this.setState({[e.target.name]:e.target.value})
    // }
    handleTasks=()=>{
        let task=this.state.taskid
        axios.get(`http://localhost:8080/allTasks/${task}`)
        .then(response=>{console.log(response.data);this.setState({task1:response.data})})
    }
    componentDidMount(){
        this.handleTasks();
    }
    handleSubmit=()=>{
        this.setState(prevState => {
            let task1 = Object.assign({}, prevState.task1);  // creating copy of state variable jasper
            task1.status = this.state.status;                     // update the name property, assign a new value                 
            task1.priority=this.state.priority;
            task1.notes=this.state.notes;
            return { task1 };                                 // return new object jasper object
          })
        console.log(this.state.task1)
        axios.put(`http://localhost:8080/tasks/${this.state.taskid}`,this.state.task1)
        .then(response=>{alert(response.data)})

        this.props.history.push(`/tasks/${AuthenticationService.getUserId()}`)
        window.location.reload()

        // this.handleClear()
    }
    // handleClear=()=>{
    //     this.setState(prevState => {
    //         let utask = Object.assign({}, prevState.utask); 
    //         utask.status = '';                   
    //         utask.priority='';
    //         utask.notes='';
    //         return { utask };
    //       })
    // }
    handleStatus=(value)=>{
        this.setState(prevState => {
            let task1 = Object.assign({}, prevState.task1);
            task1.status = value;
            return { task1 };
          })
    }
    handleStatusChange=(e)=>{
        this.setState({status:e.target.value})
        this.handleStatus(e.target.value)
    }
    handlePriority=(value)=>{
        this.setState(prevState => {
            let task1 = Object.assign({}, prevState.task1);
            task1.priority = value;
            return { task1 };
          })
    }
    handlePriorityChange=(e)=>{
        this.setState({priority:e.target.value})
        this.handlePriority(e.target.value)
    }
    handleNotes=(value)=>{
        this.setState(prevState => {
            let task1 = Object.assign({}, prevState.task1);
            task1.notes = value;
            return { task1 };
          })
    }
    handleNotesChange=(e)=>{
        this.setState({notes:e.target.value})
        this.handleNotes(e.target.value)
    }
    // handleNotesChange=(e)=>{
    //     this.setState({notes:e.target.value})
    //     console.log(e.target.value)
    // }
    // handlePriorityChange=(e)=>{
    //     this.setState({priority:e.target.value})
    //     console.log(e.target.value)
    // }
    render(){
        
        return(
            <div>
                <h1><em>Update Your Task Here...{this.state.taskid}</em></h1>
                <div className='container'>
                {/* {console.log(status)} */}
                                    <br/>
                                    {/* {console.log(creatorId)} */}
                                    <fieldset className='form-group'>
                                        <label>Creator ID</label>
                                        <input type='number' className='form-control' name='creatorId' value={this.state.task1.creatorId} readOnly/>
                                    </fieldset>
                                    <br/>
                                    <fieldset className='form-group'>
                                        <label>Task Name</label>
                                        <input type='text' className='form-control' name='name' value={this.state.task1.name} readOnly/>
                                    </fieldset>
                                    <br/>
                                    <fieldset className='form-group'>
                                        <label>Task Description</label>
                                        <input type='text' className='form-control' name='description' value={this.state.task1.description} readOnly/>
                                    </fieldset>
                                    <br/>
                                    <fieldset className='form-group'>
                                        <label>Status Update</label>
                                        <select name="status" className='form-control' value={this.state.task1.status} onChange={this.handleStatusChange} required>
                                                <option value="">select--</option>
                                                <option value="In progress">In progress</option>
                                                <option value="Completed">Completed</option>
                                        </select>   
                                    </fieldset>
                                    <br/>
                                    <fieldset className='form-group'>
                                        <label>Priority Update</label>
                                        <select name="priority" className='form-control' value={this.state.task1.priority} onChange={this.handlePriorityChange} required>
                                                <option value="">select--</option>
                                                <option value="High">High</option>
                                                <option value="Medium">Medium</option>
                                                <option value="Low">Low</option>
                                        </select>   
                                    </fieldset>
                                    <br/>
                                    <fieldset className='form-group'>
                                        <label>Add Notes</label>
                                        <textarea  name='notes' className='form-control' value={this.state.task1.notes} onChange={this.handleNotesChange} required/>
                                    </fieldset>
                                    <br/>
                                    <button type='submit' onClick={this.handleSubmit} className='btn btn-outline-success' style={{'margin':'20px'}}>Update</button>

                </div>
            </div>
        );
    }
} 
export default UpdateTaskDemo;