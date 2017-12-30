
import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

import {StackNavigator} from 'react-navigation';
import HomeScreen from './HomeScreen';

class LoginScreen extends React.Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text> this is the login screen. </Text>
                    <Button onPress={() => navigate('HomeScreen')} 
                        title="Go to home screen"/>
            </View>
        );
    }
}

const LoginScreenStackNavigator = StackNavigator({
    LoginScreen: {
        screen: LoginScreen
    },
    HomeScreen: {
        screen: HomeScreen
    } 
})


export default LoginScreenStackNavigator;