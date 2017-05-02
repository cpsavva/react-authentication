import React from 'react';
import {Link} from 'react-router';





class Profile extends React.Component{
	constructor(props){
		super(props);
		this.state={
			user: [],
		}
	}
	componentDidMount () {
  		authmiddle.showUserInfo()
    	.then((data) => {
    	// console.log('did mount' + '' + data)
    		this.setState({
    			user: data
    		})
  		})  
	}

	render(){

		return(
			<div className="container">

		    <div className="page-header text-center">
		        <h1><span className="fa fa-anchor"></span> Profile Page</h1>
		        <Link to="/logout" className="btn btn-default btn-sm">Logout</Link>
		    </div>

		    <div className="row">

		        <div className="col-sm-6">
		            <div className="well">
		                <h3><span className="fa fa-user"></span> Local</h3>
		                	<p>
		                	<strong>name</strong>: {{this.state.user.name}}<br/>
		                	<strong>condition</strong>: {{this.state.user.condition}}<br/>
		                	<strong>favourite snack</strong>: {{this.state.user.favouriteSnack}}<br/>
		                   {/* <p>
		                        <strong>id</strong>: {{user._id}}<br/>
		                        <strong>email</strong>: {{user.local.email}}<br/>
		                        <strong>password</strong>: {{user.local.password}}<br/>
		                        <strong>password</strong>: {{user.local.name}}<br/>
		                        <strong>password</strong>: {{user.local.condition}}<br/>
		                        <strong>password</strong>: {{user.local.favouriteSnack}}

		                    </p>*/}

			            </div>
			        </div>

			    </div>

			</div>

		)
	}
}

export default Profile;