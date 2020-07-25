import React, { Component } from 'react';
import { connect } from 'react-redux'
import { answerPoll } from '../actions/shared'
class UnanswerPoll extends Component {

    handleSubmit = (e) => {
        e.preventDefault()
        const { id, authedUser, dispatch} = this.props
        const value = e.target.option.value
        
        dispatch(answerPoll({qid:id, authedUser, answer :value}))
    }

    render() { 
        const {optionOne, optionTwo, avatar} = this.props
        return ( 
            <div className='container mt-5'>
                <div className='row justify-content-md-center'>
                <div className='col-md-6'>
                    <div className='row poll'>
                    <div className='col-md-4 d-flex justify-content-center align-items-center'>
                        <img src={avatar} className="big-avatar"/>
                    </div>
                    <div className='col-md-8'> 
                        <span>Would you rather?</span>
                        <form className="form-group" onSubmit={this.handleSubmit}>
                            <div className="form-check mt-2">
                                <input className="form-check-input" type="radio" name="option" id='optionOne' value="optionOne" defaultChecked/>
                                <label className="form-check-label" htmlFor="optionOne">{optionOne}</label>
                            </div>
                            <div className="form-check mt-2">
                                <input className="form-check-input" type="radio" name="option" id='optionTwo' value="optionTwo"/>
                                <label className="form-check-label" htmlFor="optionTwo">{optionTwo}</label>
                            </div>
                            <button className='btn btn-block btn-primary mt-2'>Submit</button>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({users, authedUser, questions}, props) => {
    const {id} = props
    const avatar = users[questions[id].author].avatarURL
    return {
        avatar,
        id,
        optionOne: questions[id].optionOne.text,
        optionTwo: questions[id].optionTwo.text,
        authedUser
    }
} 
export default connect(mapStateToProps)(UnanswerPoll);