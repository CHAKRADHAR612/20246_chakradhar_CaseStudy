import axios from "axios";
import React, { Component } from "react";
import {Formik,Field,Form} from 'formik'
class AddTask extends Component{
    constructor(props){
        super(props)
        this.state={
            task:{},
            creatorId:sessionStorage.getItem('authenticatedUserId')
        }
    }
    handleSubmit=(values)=>{
        // console.log(values)
        this.setState({task:values})
        console.log(this.state.task)
        axios.post('http://localhost:8080/tasks',this.state.task)
        .then(response=>{alert(response.data)})


    }
    render(){
        return(
            <div className='container-fluid'>
                {/* <div style={{'textAlign':'right'}}><button onClick={this.props.history.push(`/adminTasks/${this.state.creatorId}`)}>View Tasks</button></div> */}
                <h1 style={{'margin':'10px'}}><em>Create the Task Here...</em></h1>
                <Formik
                    initialValues={{creatorId:this.state.creatorId,name:'',description:'',ownerId:0,status:'New',priority:'',email:''}}
                    onSubmit={this.handleSubmit}
                >
                    {
                        (props)=>
                        <Form>
                            <fieldset className='form-group'>
                                <label>Creator Id</label>
                                <Field className='form-control' type='number' name='creatorId' required readOnly/>
                            </fieldset>
                            <br/>
                            <fieldset className='form-group'>
                                <label>Task Name</label>
                                <Field className='form-control' type='text' name='name' placeholder='Enter the task name here..' required/>
                            </fieldset>
                            <br/>
                            <fieldset className='form-group'>
                                <label>Task Description</label>
                                <Field as='textarea' className='form-control' type='text' name='description' placeholder='Enter the task description here..' required/>
                            </fieldset>
                            <br/>
                            <fieldset className='form-group'>
                                <label>Assign To(can be assigned only to task owner)</label>
                                <Field className='form-control' type='number' name='ownerId' placeholder='Enter the userId of user to whom you are assigning the task to..' required/>
                            </fieldset>
                            <br/>
                            <fieldset className='form-group'>
                                <label>Email</label>
                                <Field className='form-control' type='email' name='email' placeholder='Enter the email of user to whom you are assigning the task to..' required/>
                            </fieldset>
                            <br/>
                            <fieldset className='form-group'>
                                <label>Status</label>
                                <Field className='form-control' type='text' name='status' readOnly/>
                            </fieldset>
                            <br/>
                            <fieldset className='form-group'>
                                <label>Priority</label>
                                <Field as="select" name="priority" className='form-control'>
                                    <option value="">select--</option>
                                    <option value="High">High</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Low">Low</option>
                                </Field>   
                            </fieldset>
                            <br/>
                            <button type='submit' className='btn btn-outline-success' style={{'margin':'20px'}}>Create</button>
                            <button type='reset' className='btn btn-outline-warning'>Reset</button>
                        </Form>
                    }
                </Formik>
            </div>
        );
    }
}
export default AddTask;