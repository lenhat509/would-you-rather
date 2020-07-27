import React, { Component } from 'react';
import { connect } from 'react-redux'
import { login } from '../actions/authedUser'
import { Redirect } from 'react-router-dom';

class Login extends Component {

    handleLogin = (e)=>{
        e.preventDefault()
        const id = e.currentTarget.value
        this.props.dispatch(login(id))
    }

    render() { 
        const { users, location, authedUser } = this.props
        if(authedUser !== null) {
            const {from} = location.state || {from : {pathname : '/'}}
            return (
                <Redirect to={from}/>
            )
        }

        return ( 
            <div className='container mt-5'>
                <div className='row justify-content-md-center'>
                    <div className='col-md-6 login-form' >
                        <h1 className="h3 mb-3 font-weight-normal">Please choose a user</h1>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span>Users</span>
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                {users.map(user => 
                                    <button key={user.id} className="dropdown-item" value={user.id} id={user.id} onClick={this.handleLogin}>
                                        <img src={user.avatar} className="avatar" htmlFor={user.id}/>
                                        <span htmlFor={user.id}>{user.name}</span>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>     
        );
    }
}
const mapStateToProps = ({users, authedUser}) => ({
    users: Object.keys(users).map( id => ({
        id,
        avatar: users[id].avatarURL,
        name: users[id].name
    })),
    authedUser
})
 
export default connect(mapStateToProps)(Login);