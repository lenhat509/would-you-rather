import React, { Component } from 'react';
import { connect } from  'react-redux'
import { createNewQuestion } from '../actions/shared'
import { withRouter } from 'react-router-dom'
class NewQuestion extends Component {
    state = { 
        optionOne:"",
        optionTwo:""
    }
    handleOptionOne = (e) => {
        this.setState({optionOne: e.target.value})
    }
    handleOptionTwo = (e) => {
        this.setState({optionTwo: e.target.value})
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const { authedUser, dispatch } = this.props
        const question = {
            author: authedUser,
            optionOneText: e.target.optionOne.value,
            optionTwoText: e.target.optionTwo.value
        }
        dispatch(createNewQuestion(question))

        this.props.history.push('/')
    }
    render() { 
        return ( 
            <div className='container mt-5'>
                <div className='row justify-content-md-center'>
                    <div className='col-md-6 poll'>
                        <span>Would you rather?</span>
                        <form className="form-group text-center mt-3" onSubmit={this.handleSubmit}>
                            <input type="text" className="form-control" placeholder="Option 1" name='optionOne' value={this.state.optionOne} onChange={this.handleOptionOne}/>
                            <label className='m-2 text-muted font-weight-bold font-italic'>And</label>
                            <input type="text" className="form-control" placeholder="Option 2" name='optionTwo'value={this.state.optionTwo} onChange={this.handleOptionTwo}/>
                            <button className='btn btn-block btn-primary mt-3' disabled={(this.state.optionOne === '' || this.state.optionTwo === '')}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
         );
    }
}
const mapStateToProps = ({authedUser}) => ({
    authedUser
})
export default withRouter(connect(mapStateToProps)(NewQuestion));