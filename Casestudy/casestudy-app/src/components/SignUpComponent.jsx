import React, { Component } from "react";
import axios from "axios";
import {Formik,Form,Field, ErrorMessage} from 'formik';
import { Link } from "react-router-dom";
class SignUpComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            user:{}
        }
    }
    handleSubmit=(values)=>{
        this.setState({user:values})
        console.log(this.state.user)
        axios.post('http://localhost:8080/myusers',this.state.user)
        .then(response=>{alert(response.data)})
        this.props.history.push('/login')
        window.location.reload()
    }
    handleValidation=(values)=>{
        let errors={}
        if(values.password.length<8){
            errors.password='Password should contain atleast 8 characters'
        }

        if(values.mobile_no.length!==10){
            errors.mobile_no='Mobile number should have exactly 10 digits'
        }

        if(!values.email.includes('@gmail.com')){
            errors.email='Email should contain @gmail.com'
        }

        if(values.first_name.length>15){
            errors.first_name='First name can contain atmost 15 characters'
        }

        if(values.last_name.length>15){
            errors.last_name='Last name can contain atmost 15 characters'
        }
        return errors;
    }
    render(){
        return(
            <div className='container-fluid'>
                <h1><em>Register Here...</em></h1>
                <Formik
                    initialValues={{user_name:'',password:'',email:'',first_name:'',last_name:'',mobile_no:'',role:'',dob:''}}
                    onSubmit={this.handleSubmit}
                    validate={this.handleValidation}
                    validateOnChange={false}
                    validateOnBlur={false}
                >
                    {
                        (props)=>
                            <Form>
                                <ErrorMessage name='password' component='div' className='alert alert-warning'/>
                                <ErrorMessage name='mobile_no' component='div' className='alert alert-warning'/>
                                <ErrorMessage name='first_name' component='div' className='alert alert-warning'/>
                                <ErrorMessage name='last_name' component='div' className='alert alert-warning'/>
                                <ErrorMessage name='email' component='div' className='alert alert-warning'/>
                                <fieldset className='form-group'>
                                    <label>Username(can contain alpha-numeric characters)</label>
                                    <Field type='text' className='form-control' name='user_name' placeholder='Enter username here..' required/>
                                </fieldset>
                                <br/>
                                <fieldset className='form-group'>
                                    <label>Password</label>
                                    <Field type='password' className='form-control' name='password' placeholder='Enter password here..' required/>
                                </fieldset>
                                <br/>
                                <fieldset className='form-group'>
                                    <label>Email</label>
                                    <Field type='email' className='form-control' name='email' placeholder='Enter email here..' required/>
                                </fieldset>
                                <br/>
                                <fieldset className='form-group'>
                                    <label>First Name</label>
                                    <Field type='text' className='form-control' name='first_name' placeholder='Enter first name here..' required/>
                                </fieldset>
                                <br/>
                                <fieldset className='form-group'>
                                    <label>Last Name</label>
                                    <Field type='text' className='form-control' name='last_name' placeholder='Enter last name here..' required/>
                                </fieldset>
                                <br/>
                                <fieldset className='form-group'>
                                    <label>Mobile Number</label>
                                    <Field type='text' className='form-control' name='mobile_no' placeholder='Enter mobile number here..' required/>
                                </fieldset>
                                <br/>
                                <fieldset className='form-group'>
                                        <label>Role</label>
                                        <Field as="select" name="role" className='form-control'>
                                                <option value="">select--</option>
                                                <option value="Admin">Admin</option>
                                                <option value="task owner">Task Owner</option>
                                        </Field>   
                                </fieldset>
                                <br/>
                                <fieldset className='form-group'>
                                    <label>Date of Birth</label>
                                    <Field type='date' className='form-control' name='dob' required/>
                                </fieldset>

                                <button className='btn btn-success' type='submit' style={{'margin':'20px'}}>Register</button>
                                <button className='btn btn-warning' type='reset'>Clear</button>
                            </Form>
                    }
                </Formik>
                <p><Link to='/login' style={{'textDecoration':'none','color':'black'}}>Already a User?Login Here</Link></p>
            </div>
        );
    }
}
export default SignUpComponent;