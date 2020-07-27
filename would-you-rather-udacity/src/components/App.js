import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getData } from '../actions/shared'
import Login from './Login'
import Dashboard from './Dashboard'
import QuestionDetail from './QuestionDetail'
import NewQuestion from './NewQuestion'
import LeaderBoard from './Leaderboard'
import { BrowserRouter, Route, Redirect} from 'react-router-dom'
import NavBar from './NavBar'
import LoadingBar from 'react-redux-loading'


const PrivateRoute = ({component: Component , user, ...rest}) => (
  <Route {...rest} render={(props)=> (
    user !== null
      ? <Component {...props}/> 
      : <Redirect to={{
        pathname:'/login',
        state: { from : {...props.location}}
      }}/>
  )} />
)

class App extends Component {

  componentDidMount(){
    this.props.dispatch(getData())
  }

  render() { 
    const { authedUser, loading } = this.props
    return (
      <>
      <BrowserRouter>
        <LoadingBar style={{zIndex:2}}/>
        <div className='main-container'>
          <NavBar/>
          {loading === true? null : (
            <div>
              <PrivateRoute exact path='/' component={Dashboard} user={authedUser}/>
              <PrivateRoute path='/question/:id' component={QuestionDetail} user={authedUser}/>
              <PrivateRoute path='/leaderboard' component={LeaderBoard} user={authedUser}/>
              <PrivateRoute path='/add' component={NewQuestion} user={authedUser}/>
              <Route path='/login' component={Login} />
            </div>
          )
          }
        </div>
          
      </BrowserRouter>
      </>
    )
  }
}
const mapStateToProps = ({loading, authedUser}) => ({
  loading,
  authedUser
})
export default connect(mapStateToProps)(App);
