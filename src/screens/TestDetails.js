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
                
            </ScrollView>
        );
    }
}

export default Practice;