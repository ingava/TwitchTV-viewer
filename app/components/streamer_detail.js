import React, { Component } from 'react';


const StreamerDetail = (props) => {

    return (
        <div className="list-item">
            <div className="list-item__image">
                <img src={props.streamer.streamerPreview}/>
            </div>
            <div className="list-item__profile-link">
                <a href={props.streamer.streamerLink} target="_blank">{props.streamer.streamerName}</a>
            </div>
            <div className="list-item__game">
                {props.streamer.game}
            </div>
            <div className="list-item__status">{props.streamer.isStreaming ? <p>Online</p> : <p>Offline</p>}</div>
        </div>
    )
}

export default StreamerDetail;


