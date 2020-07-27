import React, { Component } from 'react';
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom' 
import { userLogout } from '../actions/authedUser'
class NavBar extends Component {

    handleLogout = (e)=> {
        e.preventDefault()
        this.props.dispatch(userLogout())
        this.props.history.push('/login')
    }

    render() { 
        const { authedUser, avatar, name } = this.props
        return ( 
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className='container'>
                <a className="navbar-brand" href="#">Would Your Rather?</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink to='/' className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/add' className="nav-link">New Question</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/leaderboard' className="nav-link">Leaderboard</NavLink>
                        </li>
                    </ul>
                </div>
                {(authedUser !== null) 
                    && (<>
                    <span className='nav-item mr-sm-2'>
                        <img src={avatar} className="avatar"/>Hello,<span>{name}</span>
                    </span>
                    <button className="btn btn-outline-danger my-2 my-sm-0" type="submit" onClick={this.handleLogout}>Logout</button>
                    </>
                    ) 
                }
                </div>
            </nav>
        );
    }
}
const mapStateToProps = ({authedUser, users}) => ({
    authedUser,
    avatar: !authedUser? null: users[authedUser].avatarURL,
    name: !authedUser? null: users[authedUser].name
})
export default withRouter(connect(mapStateToProps)(NavBar));