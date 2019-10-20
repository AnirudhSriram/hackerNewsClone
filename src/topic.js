import React from 'react';

const Topic = (props) => {
    return (
        <div >
            <h3><a href={props.details.url} target="_blank" rel="noopener noreferrer">{props.details.title}</a> <span className='url'>({props.details.url})</span></h3>
            <span>{props.details.score} points |</span>
            <span><a href={props.details.authorProfile} target="_blank" rel="noopener noreferrer" >{props.details.by}</a>|</span>
            <span>{props.details.time}|</span>
            <span>{props.details.descendants} comments</span>
        </div>

    )
}

export default Topic;