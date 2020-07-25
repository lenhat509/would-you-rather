import React, { Component } from 'react';
import { connect } from 'react-redux'
import QuestionThumbnail from './QuestionThumbnail'
class Dashboard extends Component {
    state = { 
        type: 'unanswer'
    }

    handleClick = (e) => {
        const value = e.currentTarget.value;
        this.setState({type: value})
    }

    render() { 
        const { answeredLength, unanswerLength} = this.props
        return ( 
            <>
            <div className='container mt-5'>
                <div className="row">
                    <div className="col-4">
                        <div className="list-group">
                        <button className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" value='unanswer' onClick={this.handleClick}>
                            Unanswered Question
                            <span className="badge badge-primary badge-pill">{unanswerLength}</span>
                        </button>
                        <button className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" value='answered' onClick={this.handleClick}>
                            Answered Question
                            <span className="badge badge-warning badge-pill" aria-disabled>{answeredLength}</span>
                        </button>
                        </div>
                    </div>
                    <div className="col-8">
                        <ul className="list-group">
                            {this.props[this.state.type].map(id => <QuestionThumbnail id={id} key={id}/>)}
                        </ul>
                    </div>
                </div>
            </div>
            </>
         );
    }
}

const mapStateToProps = ({authedUser, questions, users}) => {
    const answered = Object.keys(users[authedUser].answers).sort((a,b)=> questions[b].timestamp - questions[a].timestamp)
    const unanswer = Object.keys(questions).filter(id => !answered.includes(id)).sort((a,b)=> questions[b].timestamp - questions[a].timestamp)
    return {
        answered,
        unanswer,
        answeredLength: answered.length,
        unanswerLength: unanswer.length
    }
}
export default connect(mapStateToProps)(Dashboard);