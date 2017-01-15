import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import StreamerList from './components/streamer_list';

import css from './styles/styles.css';

import axios from 'axios';

const URL = 'https://wind-bow.gomix.me/twitch-api/streams/';
const streamers = ['p4wnyhof', 'ESL_SC2', 'freecodecamp', 'gamesdonequick', 'noobs2ninjas'];

const streamsUrl = streamers.map((streamer) => URL + streamer);

//const App = () => {
class App extends Component {

    constructor() {
        super();
        this.state = { streamers: [] };
    }

    componentWillMount () {

        const promises = [];

        streamsUrl.forEach(function(url){
            promises.push(axios.get(url))
        });

        axios.all(promises).then((results) => {
            const streamers = [];

            results.forEach(function(response) {
                console.log(response);
                if (response.data.stream != null) {
                    streamers.push({
                        streamerName: response.data.stream.channel.name,
                        streamerLink: response.data.stream.channel.url,
                        game: response.data.stream.game,
                        gameDetail: response.data.stream.channel.status,
                        streamerPreview: response.data.stream.channel.logo,
                        isStreaming: true
                    })
                } else {
                    streamers.push({isStreaming: false});
                }
            });

            this.setState({ streamers: streamers });
        });
    }

    render() {
        return (
            <div>
                <StreamerList streamers={this.state.streamers} />
            </div>
        );
    }
};



ReactDOM.render(<App />, document.querySelector('.container'));