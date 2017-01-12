import React, { Component } from 'react';


const StreamerDetail = (props) => {

    return (
        <div>
            <div>
                <img src={props.streamer.streamerPreview}/>
            </div>
            <div>
                <a href={props.streamer.streamerLink} target="_blank">{props.streamer.streamerName}</a>
            </div>
            <div>
                {props.streamer.game}
            </div>
            <div>{props.streamer.isStreaming ? <p>Online</p> : <p>Offline</p>}</div>
        </div>
    )
}

export default StreamerDetail;


