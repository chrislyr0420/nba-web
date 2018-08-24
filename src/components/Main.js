import React from 'react';
import { DataViewContainer } from './DataViewContainer';
import nba from 'nba'
import { Profile } from './Profile';


export class Main extends React.Component {
    state = {
        playerInfo: {
            playerId: nba.findPlayer('Chris Paul').playerId,
            teamAbbreviation: 'HOU',
        }
    }

    componentDidMount() {
        nba.stats.playerInfo({ PlayerID: nba.findPlayer('Chris Paul').playerId }).then((info) => {
            console.log(info);
            const playerInfo = Object.assign(info.commonPlayerInfo[0], info.playerHeadlineStats[0]);
            console.log(playerInfo);
            this.setState({ playerInfo });
        });
    }

    render() {
        return (
            <div className="main">
                <Profile playerInfo={this.state.playerInfo}/>
                <DataViewContainer playerId={this.state.playerInfo.playerId}/>
            </div>
        );
    }
}
