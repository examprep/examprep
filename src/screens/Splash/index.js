import React, { Component } from "react";
import { View } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from "native-base";

class Splash extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setTimeout(() => this.props.navigation.navigate('Home'), 2000)
    }

    startHome() {
        this.props.navigation.navigate('Home')
    }

    startLogin() {

    }

    render() {
        return (
            <LinearGradient
                style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
                start={{ x: 1, y: 2 }} end={{ x: 1, y: 0 }}
                colors={['#E55A9B', '#B26FF2', '#D660B6']}>
                <Icon
                    style={{ fontSize: 80, color: "white" }}
                    type="Ionicons"
                    name="ios-school" />
            </LinearGradient>
        );
    }
}

export default Splash;
