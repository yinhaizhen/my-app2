import React from 'react';
import { Alert, View } from 'react-native';
import { SearchBar } from 'antd-mobile-rn';



export default class SearchBarDemo extends React.Component {

    static navigationOptions = {
        title: 'CMDB',
    };
    style;

    constructor() {
        super(...arguments);
        this.state = {
            value: 'food',
        };
        this.onChange = value => {
            this.setState({ value });
        };
        this.clear = () => {
            this.setState({ value: '' });
        };
    }
    render() {
        return (
            <View style={{ marginTop: 30 }}>
                <SearchBar defaultValue="initial" placeholder="Search"
                           onSubmit={value => Alert.alert('hello')}
                />
                <SearchBar
                    value={this.state.value}
                    placeholder="Search"
                    onSubmit={value => Alert.alert(value)}
                    onCancel={this.clear}
                    onChange={this.onChange}
                    showCancelButton
                />
            </View>
        );
    }
}