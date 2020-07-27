import React, { Component } from 'react';
import { connect } from 'react-redux'
import PollResult from './PollResult'
import UnanswerPoll from './UnanswerPoll'
import PageNotFound from './PageNotFound'
class QuestionDetail extends Component {
    render() { 
        const { id, isAnswered} = this.props
        return ( 
            <>
            {id? (isAnswered !== true? <UnanswerPoll id={id}/> : <PollResult id={id}/>) : <PageNotFound/>}
            </>
        );
    }
}
const mapStateToProps = ({users, authedUser, questions} , props) => {
    const {id} = props.match.params
    const isAnswered = questions[id] && Object.keys(users[authedUser].answers).includes(id)
    return {
        id: questions[id]? id : null,
        isAnswered
    }
}
export default connect(mapStateToProps)(QuestionDetail);