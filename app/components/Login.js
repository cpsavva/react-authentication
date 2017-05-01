import React from 'react';
import authmiddle from '../utils/authmiddle.js';
import {Link} from 'react-router';



class Login extends React.Component{
	constructor(props){
		super(props);
			this.state = {
				email: '',
				password: ''
			}

	this.handleSubmit = this.handleSubmit.bind(this);
	this.handleInputChange = this.handleInputChange.bind(this);
	};
	handleSubmit(){
		this.setState({
			email: '',
			password: ''
		});
		authmiddle.getLogin(this.state).then((doc)=> { console.log('this.state '+ this.state)
		});
	}
	handleInputChange(event){
		const target = event.target;
		const value = target.value;
		const name = target.name;
		this.setState({
			[name]: value
		});
	}

	render(){

		return(
			<div className="container">

			<div className="col-sm-6 col-sm-offset-3">

			    <h1><span className="fa fa-sign-in"></span> Login</h1>

			    {/*{{#if message.length }}
			        <div className="alert alert-danger">{{message}}</div>
			    {{/if}}*/}

			    <form>
			        <div className="form-group">
			            <label htmlFor='email'>Email</label>
			            <input type="text" className="form-control" name="email" value={this.state.email} onChange={this.handleInputChange}/>
			        </div>
			        <div className="form-group">
			            <label htmlFor='password'>Password</label>
			            <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleInputChange}/>
			        </div>
			        

			        <button type="submit" className="btn btn-warning btn-lg" onClick={this.handleSubmit}>Login</button>
			    </form>

			    <hr/>

			    <p>Need an account? <Link to="/signup">Signup</Link></p>
			    <p>Or go <Link to="/">home</Link>.</p>

			</div>

			</div>

		)
	}
}

export default Login;