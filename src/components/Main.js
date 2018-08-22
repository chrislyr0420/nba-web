import React from 'react';
import nba from 'nba';
import {Profile} from "./Profile";
import {ShotChart} from "./ShotChart";


export class Main extends React.Component {
    state = {
        playerId: nba.findPlayer("Chris Paul").playerId,
        playerInfo: {}
    }

    componentDidMount() {
        nba.stats.playerInfo({PlayerID: this.state.playerId}).then((response) => {
            const playerInfo = {...response.commonPlayerInfo[0], ...response.playerHeadlineStats[0]};
            this.setState({
                playerInfo
            });
        })
    }

    render() {
        console.log(this.state.playerInfo);
        return (
            <div className="main">
                <Profile playerInfo={this.state.playerInfo}/>
                <ShotChart playerId={this.state.playerId}/>
            </div>
        );
    }
}