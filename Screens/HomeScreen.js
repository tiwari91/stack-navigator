import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TabNavigator} from 'react-navigation';

class HomeScreen extends React.Component {
    render() {
        return (
            <View>
                <Text>
                    this is the Home screen.
                </Text>
            </View>
        );
    }
}

class Notifications extends React.Component {
    render(){
        return (
            <View>
                <Text >
                    This is the Notification screen.
                </Text>
            </View>
        );
    }
}

const HomeScreenTabNavigator = TabNavigator({
    HomeScreen: {
        screen: HomeScreen
    },
    Notifications : {
        screen: Notifications
    }
},{
    animationEnabled: true
})

export default HomeScreenTabNavigator;
