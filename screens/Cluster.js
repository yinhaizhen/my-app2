import React from 'react';
import {Text, View} from 'react-native';
//import {DatePickerView, DatePicker, List, Provider} from '@ant-design/react-native';
import { DatePicker,List,LocaleProvider } from 'antd-mobile-rn'

export default class DatePickerViewExample extends React.Component {
    static navigationOptions = {
        title: 'DatePicker',
    };

    constructor() {
        super(...arguments);
        // this.state = {
        //     value: undefined,
        // };
        // // this.onChange = value => {
        // //     console.log(value);
        // //     this.setState({ value });
        // // };
        // this.onValueChange = (...args) => {
        //     console.log(args);
        // };
        this.onChange = value => {
            this.setState({value});
        };
        this.state = {
            value: undefined,
        };
    }

    render() {
        return (
            <View>
                {/*<Text style={{margin: 16}}>Start DateTime</Text>*/}
                {/*<DatePickerView*/}
                {/*value={this.state.value}*/}
                {/*onChange={this.onChange}*/}
                {/*onValueChange={this.onValueChange}*/}
                {/*/>*/}
                {/*<Text style={{margin: 16}}>End DateTime</Text>*/}
                {/*<DatePickerView*/}
                {/*value={this.state.value}*/}
                {/*onChange={this.onChange}*/}
                {/*onValueChange={this.onValueChange}*/}
                {/*/>*/}
                <LocaleProvider>
                    <List>
                        <DatePicker
                            value={this.state.value}
                            mode="date"
                            minDate={new Date(2015, 7, 6)}
                            maxDate={new Date(2026, 11, 3)}
                            onChange={this.onChange}
                            format="YYYY-MM-DD"
                        >
                            <List.Item arrow="horizontal">Select Date</List.Item>
                        </DatePicker>
                    </List>
                </LocaleProvider>
            </View>
        );
    }
}