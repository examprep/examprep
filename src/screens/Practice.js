import React from "react";
import { View, Platform } from "react-native";
import styles from "../styles";
import Text from '../config/AppText';
import { ProgressBar, Content, CheckBox, Button } from "native-base";
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import faker from '../faker';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { capitalizeFirstText } from "../helper/utility";
const Questions = require('../config/data.json');
import CountDown from 'react-native-countdown-component';

function ShowTimer({ interval, endPractice }) {
    return (
        <CountDown
            digitStyle={{ backgroundColor: '#bbb' }}
            digitTxtStyle={{ color: '#191110', fontSize: 28 }}
            timeLabelStyle={{ color: '#ccc' }}
            timeToShow={['M', 'S']}
            timeLabels={{ m: 'MM', s: 'SS' }}
            until={1800}
            onFinish={() => endPractice()}
            onPress={() => alert('hello')}
            size={20}
        // showSeparator={true}
        />
    )
}

class Practice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionIndex: null,
            currentIndex: 0,
            questions: [],
            selectedAnswers: [],
            wrongInputs: [],
            complete: false,
            hasSubject: false,
            // hasScore: false,
            subject: "",
            score: 0
        }
    }

    componentDidMount() {
        // faker.Questions() && this.setState({ questions: faker.Questions() });
        // let subject = capitalizeFirstText(this.props.navigation.getParam('id', 'None'));
        let subject = this.props.navigation.getParam('id', 'None');
        const questions = Questions[subject];
        if (!questions) {
            this.setState({ subject: subject })
        } else {
            this.setState({ questions, hasSubject: true })
        }
    }

    handleSelectCheck = (ques, ans, quesIndex, ansIndex) => {
        var getIndex = this.state.selectedAnswers.findIndex(f => f['questionIndex'] === quesIndex);
        if (getIndex !== -1) {
            this.state.selectedAnswers.splice(getIndex, 1);
        }

        //group selected answers
        if (this.state.selectedAnswers.filter(e => e['questionIndex'] === quesIndex && e['answerIndex'] === ansIndex).length === 0) {
            this.setState((prevState) => ({
                selectedAnswers: [...prevState.selectedAnswers, {
                    questionIndex: quesIndex,
                    answerIndex: ansIndex,
                    answer: ques.answer[ques.answer.length - 1],
                    selectedOption: ans[0]
                }]
            }))
        }
    }

    calculateScore = () => {
        let totalScore = 0;
        this.state.selectedAnswers.filter(e => {
            if (e.answer === e.selectedOption) {
                totalScore += 2;
            }
        })
        this.setState({ score: totalScore })
    }

    endPractice = () => {
        this.setState({
            currentIndex: this.state.questions.length,
            complete: true
        })
        setTimeout(() => {
            this.calculateScore()
        }, 0);
    }

    resetPractice = () => {
        this.setState({
            currentIndex: 0,
            selectedAnswers: []
        })
    }

    verifyInput(quesIndex, ansIndex, prop) {
        return this.state[prop] && this.state[prop].filter(e => e['questionIndex'] === quesIndex && e['answerIndex'] === ansIndex).length > 0;
    }

    questionContainer = (e) => {
        return (
            this.state.questions.map((ques, i) => (
                e === i && !this.state.complete ? <View key={i}>
                    <View style={{ marginTop: 50, flexDirection: "row" }}>
                        <Text style={{ fontSize: 25, color: "#9199BD" }}>Question {i + 1}</Text>
                        <Text style={{ fontSize: 15, color: "#9199BD", marginTop: 10 }}>/{this.state.questions.length}</Text>
                    </View>
                    <View>
                        <Text style={{ color: "#9199BD" }}>.......................................................................</Text>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.textQuestion}>{ques.question}</Text>
                    </View>
                    <View style={styles.answerContainer}>
                        {
                            ques.options.map((ans, k) =>
                                <TouchableOpacity
                                    style={[styles.answerCard]}
                                    key={k}
                                    onPress={() => this.handleSelectCheck(ques, ans, i, k)}
                                >
                                    <View style={styles.answerCardAlign}>
                                        <View style={styles.textAnswer}>
                                            <Text style={{ color: "white", fontSize: 18 }}>{ans}.</Text>
                                        </View>
                                        <View style={styles.answerCheckBox}>
                                            <CheckBox
                                                checked={this.verifyInput(i, k, "selectedAnswers") ? true : false}
                                                onPress={() => this.handleSelectCheck(ques, ans, i, k)}
                                            />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        }

                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            {
                                e !== this.state.questions.length && (e + 1) !== this.state.questions.length ? <TouchableOpacity
                                    style={this.state.currentIndex === 0 ? { alignSelf: "center" } : null}
                                    onPress={() => this.setState({ currentIndex: i + 1 })}
                                >
                                    <LinearGradient
                                        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                                        style={styles.practiceBtn}
                                        colors={['#0F7FED', '#2A8CED', '#137DEA']}>
                                        <Text style={{ fontSize: 18, color: "white" }}>Next</Text>
                                    </LinearGradient>
                                </TouchableOpacity> : null
                            }

                            {
                                (e + 1) === this.state.questions.length ? <TouchableOpacity
                                    style={{ marginTop: 10 }}
                                    onPress={() => this.endPractice()}
                                >
                                    <LinearGradient
                                        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                                        style={styles.practiceBtn}
                                        colors={['#06C048', '#76BA1A', '#597D34']}>
                                        <Text style={{ fontSize: 18, color: "white" }}>Complete</Text>
                                    </LinearGradient>
                                </TouchableOpacity> : null
                            }

                            {
                                e !== 0 ? <TouchableOpacity
                                    onPress={() => this.setState({ currentIndex: i - 1 })}
                                >
                                    <LinearGradient
                                        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                                        style={styles.practiceBtn}
                                        colors={['#E55A9B', '#B26FF2', '#D660B6']}>
                                        <Text style={{ fontSize: 18, color: "white" }}>Back</Text>
                                    </LinearGradient>
                                </TouchableOpacity> : null
                            }
                        </View>
                    </View>
                </View> : null
            ))
        )
    }
    render() {
        return (
            <ScrollView contentContainerStyle={[styles.scrollContainer]}>
                {
                    this.state.hasSubject ? <View style={{ flexGrow: 1 }}>
                        {
                            !this.state.complete ? <View style={{ marginTop: Platform.OS === "ios" ? 50 : 0 }}>
                                <View style={styles.questionProgressContainer}>
                                    <LinearGradient
                                        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                                        style={[styles.questionProgress, { width: `${(this.state.currentIndex / this.state.questions.length) * 100}%`, borderRadius: 22 }]}
                                        colors={['#E55A9B', '#B26FF2', '#D660B6']}>
                                    </LinearGradient>
                                    <View style={{ position: "relative", bottom: 31 }}>
                                        <Text style={{ fontSize: 18, color: "white", textAlign: "center" }}>{this.state.currentIndex}</Text>
                                    </View>
                                </View>
                            </View> : null
                        }
                        {
                            !this.state.complete ? <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <TouchableOpacity
                                    onPress={() => this.resetPractice()}
                                    activeOpacity={0.7}
                                >
                                    <LinearGradient
                                        style={styles.actionBtn}
                                        start={{ x: 1, y: 2 }} end={{ x: 1, y: 0 }} colors={['#4C9A29', '#1E5630', '#67BB59']}>
                                        <LinearGradient
                                            style={styles.innerActionBtn}
                                            start={{ x: 1, y: 2 }} end={{ x: 1, y: 0 }} colors={['#4C9A29', '#1E5630', '#67BB59']}>
                                            <Icon
                                                style={{ color: "white", fontSize: 20 }}
                                                name="ios-refresh" />
                                        </LinearGradient>
                                    </LinearGradient>
                                </TouchableOpacity>
                                <View style={{ marginTop: 20, marginBottom: -10 }}>
                                    <ShowTimer endPractice={this.endPractice} />
                                </View>
                            <TouchableOpacity
                                    onPress={() => this.endPractice()}
                                    activeOpacity={0.7}
                                >
                                    <LinearGradient
                                        style={styles.actionBtn}
                                        start={{ x: 1, y: 2 }} end={{ x: 1, y: 0 }} colors={['#F2784E', '#FF4531', '#ED5768']}>
                                        <LinearGradient
                                            style={styles.innerActionBtn}
                                            start={{ x: 1, y: 2 }} end={{ x: 1, y: 0 }} colors={['#F2784E', '#FF4531', '#ED5768']}>
                                            <Icon
                                                style={{ color: "white", fontSize: 20 }}
                                                name="ios-power" />
                                        </LinearGradient>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View> : null
                        }
                        {
                            this.questionContainer(this.state.currentIndex)
                        }
                        {/* {
                            this.state.currentIndex == 3 ? this.calculateScore() : null
                        } */}
                        {
                            this.state.complete ? <View style={{ flexGrow: 1, alignItems: "center", justifyContent: "center" }}>
                                <Icon
                                    style={{ fontSize: 80, color: "#9199BD" }}
                                    name="ios-bonfire" />
                                <Text style={{ fontSize: 25, color: "white", textAlign: "center" }}>Congratulations!!! You have completed the test.</Text>
                                <Text style={{ fontSize: 25, color: "#ccc", textAlign: "center", marginTop: 10 }}>SCORE: {this.state.score}</Text>
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
                            </View> : null
                        }
                    </View> : <View style={{ flexGrow: 1, alignItems: "center", justifyContent: "center" }}>
                            <Icon
                                style={{ fontSize: 80, color: "#9199BD" }}
                                name="ios-bonfire" />
                            <Text style={{ fontSize: 25, color: "white", textAlign: "center" }}>Sorry!! No Questions have been uploaded for {this.state.subject}</Text>
                            <TouchableOpacity
                                style={{ marginTop: 20 }}
                                onPress={() => this.props.navigation.navigate("Home")}
                            >
                                <LinearGradient
                                    start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                                    style={{ width: 160, height: 50, alignItems: "center", justifyContent: "center", borderRadius: 70 / 2 }}
                                    colors={['#0F7FED', '#2A8CED', '#137DEA']}>
                                    <Text style={{ fontSize: 20, color: "white" }}>Go Home</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                }
            </ScrollView>
        );
    }
}

export default Practice;