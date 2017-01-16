import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import StreamerList from './components/streamer_list';

import css from './styles/styles.css';

import axios from 'axios';

const streamerURL = 'https://wind-bow.gomix.me/twitch-api/streams/';
const userURL = 'https://wind-bow.gomix.me/twitch-api/channels/';
const streamers = ['p4wnyhof', 'ESL_SC2', 'freecodecamp', 'gamesdonequick', 'noobs2ninjas'];

//const App = () => {
class App extends Component {

    constructor() {
        super();
        this.state = { streamers: [] };
    }

    componentWillMount () {

        streamers.forEach((streamer) => {
            this.getStreamerInfo(streamer);
        });
    }

    getStreamerInfo(username) {

        const promises = [
            axios.get(streamerURL + username),
            axios.get(userURL + username)
        ];

        const streamer = {
            name: null,
            link: null,
            game: null,
            gameDetail: null,
            logo: null,
            isStreaming: null,
        };

        axios.all(promises).then((results) => {
            results.forEach(function(response) {
                if (response.data.stream != undefined) {
                    if (response.data.stream != null) {
                        streamer.game = response.data.stream.game;
                        streamer.gameDetail = response.data.stream.channel.status;
                        streamer.isStreaming = true;
                    } else {
                        streamer.isStreaming = false;
                    }
                } else {
                    streamer.name = response.data.display_name;
                    streamer.logo = response.data.logo;
                    streamer.link = response.data.url;
                }
            });

            this.setState({ streamers: [...this.state.streamers, streamer] })
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