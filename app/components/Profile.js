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
		               

			            </div>
			        </div>

			    </div>

			</div>

		)
	}
}

export default Profile;