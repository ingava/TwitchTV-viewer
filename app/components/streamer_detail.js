import React, { Component } from 'react';


const StreamerDetail = (props) => {

    return (
        <div className="list-item">
            <div className="list-item__image-wrapper">
                <img className="list-item__image" src={props.streamer.logo}/>
            </div>
            <div className="list-item__profile-link">
                <a href={props.streamer.link} target="_blank" className="list-item__profile-link">{props.streamer.name}</a>
            </div>
            <div className="list-item__status">{props.streamer.isStreaming ? <span>Online</span> : <span>Offline</span>}</div>
            <div className="list-item__game">
                {props.streamer.game} {props.streamer.gameDetail}
            </div>
        </div>
    )
}

export default StreamerDetail;


