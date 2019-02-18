import React from 'react';

import { ExpoConfigView } from '@expo/samples';
//import { Checkbox, List, WhiteSpace } from '@ant-design/react-native';
import {Checkbox,List,WhiteSpace } from 'antd-mobile-rn'

import {Text, View} from 'react-native';
const AgreeItem = Checkbox.AgreeItem;
const CheckboxItem = Checkbox.CheckboxItem;
export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: '复选框test',
  };
  style;
  constructor(props, context) {
      super(props, context);
      this.state = {
          checkBox1: true,
          agreeItem1: true,
          checkboxItem1: true,
      };
  }

  // noinspection JSAnnotator
    render(){
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
        <View>
            <View style={{ padding: 10 }}>
                <Checkbox
                    checked={this.state.checkBox1}
                    style = {{color:'#ff0000'}}
                    //styles = {color}


                    onChange={event => {
                        this.setState({ checkBox1: event.target.checked });
                    }}
                />
                <WhiteSpace />
                <Checkbox>Checkbox</Checkbox>
                <WhiteSpace />
                <Checkbox  disabled />
                <WhiteSpace />
                <Checkbox disabled />
            </View>

            <WhiteSpace />
            <AgreeItem>
                Agree agreement agreement agreement agreement agreement agreement
                agreement
            </AgreeItem>
            <WhiteSpace />
            <AgreeItem
                checked={this.state.agreeItem1}
                //checkboxStyle ={{ color: '#f00' }}
                checkboxStyles = {this.props.color = '#ff0000'}


                onChange={event => {
                    this.setState({ agreeItem1: event.target.checked });
                }}
            >
                Agree agreement
            </AgreeItem>
            <WhiteSpace />
            <AgreeItem disabled>Not selected. Not editable</AgreeItem>
            <WhiteSpace />
            <AgreeItem disabled>
                Force selected. Not editable
            </AgreeItem>

            <List style={{ marginTop: 12 }}>
                <Text style={{ marginTop: 12 }}>Multiple options</Text>
                <CheckboxItem
                    checked={this.state.checkboxItem1}
                    onChange={event => {
                        this.setState({ checkboxItem1: event.target.checked });
                    }}
                >
                    Option 1
                </CheckboxItem>
                <CheckboxItem>Option 2</CheckboxItem>
                <CheckboxItem disabled>Option 3</CheckboxItem>
                <CheckboxItem disabled >Option 4</CheckboxItem>
            </List>
        </View>



    	
		);
    
	}
  }
