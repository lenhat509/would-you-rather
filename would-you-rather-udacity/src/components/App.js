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

class App extends Component {

  componentDidMount(){
    this.props.dispatch(getData())
  }

  render() { 
    return (
      <>
      <BrowserRouter>
        <LoadingBar/>
        <div className='main-container'>
          <NavBar/>
          {this.props.loading === true? null : (
            this.props.authedUser === null ? <Login/> :
            <div>
              <Route exact path='/' component={Dashboard}/>
              <Route path='/question/:id' component={QuestionDetail}/>
              <Route path='/leaderboard' component={LeaderBoard}/>
              <Route path='/add' component={NewQuestion}/>
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
