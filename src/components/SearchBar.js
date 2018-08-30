import React from 'react';
import { AutoComplete, Input, Icon } from 'antd';
import nba from 'nba';


export class SearchBar extends React.Component {

    state = {
        dataSource: [],
    }

    onSelect = (value) => {
        this.props.loadPlayerInfo(value);
    }

    handleSearch = (value) => {
        this.setState({
            dataSource: !value ? [] : nba.searchPlayers(value).map(
                ({fullName}) =>  fullName
            ),
        });
    }

    render() {
        const { dataSource } = this.state;
        return (
            <AutoComplete
                className="search-bar"
                dataSource={dataSource}
                size = "large"
                onSelect={this.onSelect}
                onSearch={this.handleSearch}
                placeholder="Search NBA player"
            >
                <Input suffix={<Icon type="search"/>} />
            </AutoComplete>
        );
    }
}