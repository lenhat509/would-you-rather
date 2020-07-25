import React, { Component } from 'react';
import { connect } from 'react-redux'
import PollResult from './PollResult'
import UnanswerPoll from './UnanswerPoll'
class QuestionDetail extends Component {
    render() { 
        const { id, isAnswered} = this.props
        return ( 
            <>
            {isAnswered !== true? <UnanswerPoll id={id}/> : <PollResult id={id}/>}
            </>
        );
    }
}
const mapStateToProps = ({users, authedUser} , props) => {
    const {id} = props.match.params
    const isAnswered = Object.keys(users[authedUser].answers).includes(id)
    return {
        id,
        isAnswered
    }
}
export default connect(mapStateToProps)(QuestionDetail);