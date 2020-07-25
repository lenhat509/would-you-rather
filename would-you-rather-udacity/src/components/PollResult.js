import React, { Component } from 'react';
import { connect } from 'react-redux'

class PollResult extends Component {
    render() { 
        const { userChoice, total, optionOne, optionTwo, avatar} = this.props
        return (
            <div className='container mt-5'>
                <div className='row justify-content-md-center'>
                    <div className='col-md-6'>
                        <div className='row poll'>
                        <div className='col-md-4 d-flex justify-content-center align-items-center'>
                            <img src={avatar} className="big-avatar"/>
                        </div>
                        <div className='col-md-8'> 
                            <span>{`You would rather ${userChoice}`}</span>
                            <div className='mt-2'>
                                <span>{optionOne.text}</span>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{width: `${optionOne.percentage}%`}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">{`${optionOne.percentage}%`}</div>
                                </div>
                            <small className="text-muted ">{`${optionOne.votes} out of ${total}`}</small>
                            </div>
                            <div className='mt-2'>
                                <span>{optionTwo.text}</span>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{width: `${optionTwo.percentage}%`}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">{`${optionTwo.percentage}%`}</div>
                                </div>
                                <small className="text-muted ">{`${optionTwo.votes} out of ${total}`}</small>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({questions, authedUser, users}, {id})=> {
    const userChoice =  questions[id][users[authedUser].answers[id]].text
    const votes1= questions[id].optionOne.votes.length
    const votes2= questions[id].optionTwo.votes.length
    const total = votes1 + votes2
    const optionOne = {
        text: questions[id].optionOne.text,
        votes: votes1,
        percentage: (votes1/total).toFixed(2)*100
    }
    const optionTwo = {
        text: questions[id].optionTwo.text,
        votes: votes2,
        percentage: (votes2/total).toFixed(2)*100
    }
    return {
        avatar: users[authedUser].avatarURL,
        userChoice,
        total,
        optionOne,
        optionTwo
    }
}

export default connect(mapStateToProps)(PollResult);