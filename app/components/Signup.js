import React from 'react';
import authmiddle from '../utils/authmiddle.js';
import {Link} from 'react-router';




class SignUp extends React.Component{
	constructor(props, context){
		super(props, context);
		this.state = {
			username: '',
			password: '',
			user: []
		}
	this.handleSubmit = this.handleSubmit.bind(this);
	this.handleInputChange = this.handleInputChange.bind(this);
	}
	handleSubmit(event){
		authmiddle.getSignup(this.state)
		.then((doc)=> {
			console.log('what do i get back? ' + doc)
			this.setState({

    		user: this.state.info.concat([doc]),
    		});
		})

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

    			<h1><span className="fa fa-sign-in"></span> Signup</h1>

				    {/*{{#if message.length}}
				        <div className="alert alert-danger">{{message}}</div>
				    {{/if}}*/}


			    <form action="#/signup" method="post">
			        <div className="form-group">
			            <label htmlFor='username'>username</label>
			            <input type="text" className="form-control" name="username" value={this.state.username} onChange={this.handleInputChange}/>
			        </div>
			        <div className="form-group">
			            <label htmpFor="password">Password</label>
			            <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleInputChange}/>
			        </div>
			         {/*<div className="form-group">
			            <label htmlFor='profname'>Name</label>
			            <input type="text" className="form-control" name="profname" value={this.state.profname} onChange={this.handleInputChange}/>
			        </div>
			         <div className="form-group">
			            <label htmlFor='condition'>condition</label>
			            <input type="text" className="form-control" name="condition" value={this.state.condition} onChange={this.handleInputChange}/>
			        </div>
			         <div className="form-group">
			            <label htmlFor='favouriteSnack'>Favourite Snack</label>
			            <input type="text" className="form-control" name="favouriteSnack" value={this.state.favouriteSnack} onChange={this.handleInputChange}/>
			        </div>*/}

			        <button type="submit" className="btn btn-warning btn-lg" onClick={this.handleSubmit}>Signup</button>
			    </form>
			    <hr/>

			    <p>Already have an account? <Link to="/login">Login</Link></p>
			    <p>Or go <Link href="/">home</Link>.</p>

			</div>
		</div>

		)
	}
}

export default SignUp;


