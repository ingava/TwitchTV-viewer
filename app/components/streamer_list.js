import React, { Component } from 'react';
import StreamerDetail from './streamer_detail';

const StreamerList = (props) => {

    console.log(props.streamers);

    return (
        <div className="list">
            {props.streamers.map((streamer, index) => {
                return <StreamerDetail key={index} streamer={streamer} />
            })}
        </div>
    );
};

export default StreamerList;