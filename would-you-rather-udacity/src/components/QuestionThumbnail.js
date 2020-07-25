import React, { Component } from 'react';
import { connect } from 'react-redux'
import { formatDate } from '../utils/helpers'
import { Link } from 'react-router-dom'
class QuestionThumbnail extends Component {
    render() { 
        const {id, name, avatar, date} = this.props
        return ( 
            <Link to={`/question/${id}`} className="list-group-item list-group-item-action d-flex  justify-content-md-between">
                <div>
                    <img src={avatar} className="big-avatar"/>
                    <span>{`${name} asked`}</span>
                </div>
                <small>{date}</small>
            </Link>
         );
    }
}
const mapStateToProps = ({users, questions}, {id})=> {
    const user = users[questions[id].author]
    return {
        avatar: user.avatarURL,
        name: user.name, 
        date: formatDate(questions[id].timestamp)
    }
}

export default connect(mapStateToProps)(QuestionThumbnail);