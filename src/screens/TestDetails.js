import React from "react";
import { View, Platform } from "react-native";
import styles from "../styles";
import Text from '../config/AppText';
import { ProgressBar, Content, CheckBox, Button } from "native-base";
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
// import faker from '../faker';
import Icon from 'react-native-vector-icons/dist/Ionicons';
const Questions = require('../config/data.json');

class Practice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            testDetails: {}
        }
    }

    componentDidMount() {
        faker.Questions() && this.setState({ questions: faker.Questions() });
        const testDetails = Questions[navigation.getParam('subject', 'Mathematics')];
        this.setState({testDetails})
    }

    render() {
        return (
            <ScrollView contentContainerStyle={[styles.container, { backgroundColor: "#252C49", flexGrow: 1 }]}>
                <View style={{ flexGrow: 1, alignItems: "center", justifyContent: "center" }}>
                        <Icon
                            style={{ fontSize: 80, color: "#9199BD" }}
                            name="ios-bonfire" />
                        <Text style={{ fontSize: 25, color: "white", textAlign: "center" }}>Congratulations!!! You have completed the test.</Text>
                        <TouchableOpacity
                            style={{ marginTop: 20 }}
                            onPress={() => this.props.navigation.navigate("Home")}
                        >
                            <LinearGradient
                                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                                style={{ width: 160, height: 50, alignItems: "center", justifyContent: "center", borderRadius: 70 / 2 }}
                                colors={['#0F7FED', '#2A8CED', '#137DEA']}>
                                <Text style={{ fontSize: 20, color: "white" }}>Start Again!</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
            </ScrollView>
        );
    }
}

export default Practice;