import React from 'react';
import { ExpoConfigView } from '@expo/samples';
//import {Button} from 'antd-mobile-rn';
// import {
//   Image,
//   Platform,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
import {Button,Provider,Toast,WhiteSpace, WingBlank} from 'antd-mobile-rn'


export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: '这是我的Button test 页面',
  };
    style;

  // noinspection JSAnnotator
    render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (

        <WingBlank>
        <WhiteSpace />
        <Button>default</Button>
        <WhiteSpace />
        <Button disabled>default disabled</Button>
        <WhiteSpace />

        <Button type="primary">primary</Button>
        <WhiteSpace />
        <Button type="primary" disabled>
        primary disabled
        </Button>
        <WhiteSpace />

        <Button type="warning">warning</Button>
        <WhiteSpace />
        <Button type="warning" disabled>
        warning disabled
        </Button>
        <WhiteSpace />

        <Button loading>loading button</Button>

        <Button activeStyle={false}>无点击反馈</Button><WhiteSpace />
        <Button activeStyle={{ backgroundColor: 'red' }}>custom feedback style</Button><WhiteSpace />

        <WingBlank
        style={{
            marginTop: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
        }}
    >
    <Button type="ghost">ghost</Button>
        <Button type="ghost" disabled>
            ghost disabled
        </Button>
        <Button type="ghost" size="small">
            ghost
            </Button>
    </WingBlank>
    </WingBlank>

		);
    
	}
  }
