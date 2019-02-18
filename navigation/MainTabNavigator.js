import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SettingsScreen4 from '../screens/SettingsScreen4'
import Choose from '../screens/Cluster.js'
import Text from '../screens/Texttest'
import Search from '../screens/SerchCMDB'
import Detail from '../screens/Detail.js'

const HomeStack = createStackNavigator(
    {
        Home: HomeScreen,
        Details: Text,

    },

    {
        initialRouteName: "Home"
    }
    )
;

HomeStack.navigationOptions = {
    tabBarLabel: 'HOME',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `ios-information-circle${focused ? '' : '-outline'}`
                    : 'md-information-circle'
            }
        />
    ),
};

const LinksStack = createStackNavigator({
    Links: LinksScreen,
});

LinksStack.navigationOptions = {
    tabBarLabel: 'Settings',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
        />
    ),
};
const SettingsStack4 = createStackNavigator({
    Links: SettingsScreen4,
});
SettingsStack4.navigationOptions = {
    tabBarLabel: 'Office',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
        />
    ),
};
const ChooseStack = createStackNavigator({
    Links: Choose,
});
ChooseStack.navigationOptions = {
    tabBarLabel: 'Choose',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
        />
    ),
};

const SearchStack = createStackNavigator({
    Links: Search,
});
SearchStack.navigationOptions = {
    tabBarLabel: 'CMDB',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
        />
    ),
};

const DetailStack = createStackNavigator({
    Links: Detail,
});
DetailStack.navigationOptions = {
    tabBarLabel: 'Detail',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
        />
    ),
};

// const TextStack = createStackNavigator({
//     Links: Text,
// });
// TextStack.navigationOptions = {
//     tabBarLabel: 'Text',
//     tabBarIcon: ({focused}) => (
//         <TabBarIcon
//             focused={focused}
//             name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
//         />
//     ),
// };
const SettingsStack = createStackNavigator({
    Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
    tabBarLabel: 'Settings',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
        />
    ),
};

export default createBottomTabNavigator({
    HomeStack,
    SearchStack,
    ChooseStack,
    LinksStack,
    //DetailStack,
    //SettingsStack,
    //SettingsStack4,

    //TextStack,


});
