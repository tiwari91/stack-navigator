
import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class LoginScreen extends React.Component {
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
