import React, { Component } from 'react';
import { connect } from 'react-redux'
class Leaderboard extends Component {
    render() { 
        const { list } = this.props
        return ( 
            <div className="container mt-5">
                <div className='row justify-content-md-center'>
                <div className='col-md-8'>
                    <h3>Leaderboard</h3>
                    <ul className="list-group">
                    {list.map(user => 
                        <li className="list-group-item p-0" key={user.id}>
                        <div className='row m-2 align-items-center justify-content-between' >
                        <div className='col-md-2 p-0 d-flex flex-column align-items-center'>
                            <img src={user.avatar} className="big-avatar"/>
                            <span>{user.name}</span>
                        </div>
                        <div className='col-md-7 p-0'>
                            <div className="progress" style={{height: 30}}>
                            <div className="progress-bar " role="progressbar" style={{width: `${user.qPercent}%`}} ></div>
                            <div className="progress-bar bg-success" role="progressbar" style={{width: `${user.aPercent}%`}} ></div>
                            </div>
                            <div className='d-flex justify-content-between'>
                            <span>
                                Questions
                                <span className='badge badge-primary mx-2'>{user.questions}</span>
                            </span>
                            <span>
                                <span className='badge badge-success mx-2'>{user.answers}</span>
                                Answered
                            </span>
                            </div>
                        </div>
                        <div className='col-md-2 p-0 d-flex justify-content-center'>
                            <div className='rounded-circle score d-flex align-items-center justify-content-center'>{user.score}</div>
                        </div>
                        </div>
                    </li>    
                    )}
                    </ul>
                </div>

                </div>
            </div>
         );
    }
}
const mapStateToProps = ({users}) => ({
    list: Object.keys(users).map(id => {
        const user = users[id]
        const questions= user.questions.length
        const answers= Object.keys(user.answers).length
        const score= questions + answers
        return {
            id,
            name: user.name,
            avatar: user.avatarURL,
            questions,
            answers,
            score,
            qPercent: (questions/score).toFixed(2)*100,
            aPercent: (answers/score).toFixed(2)*100
        }
    }).sort((a, b) => b.score - a.score)
})
export default connect(mapStateToProps)(Leaderboard);