import React from "react";
import { View, Platform } from "react-native";
import styles from "../styles";
import Text from '../config/AppText';
import { ProgressBar, Content, CheckBox, Button } from "native-base";
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Questions from '../faker';
import Icon from 'react-native-vector-icons/dist/Ionicons';

class Practice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionIndex: null,
            currentIndex: 0,
            questions: [],
            selectedAnswers: [],
            wrongInputs: [],
            complete: false
        }
    }

    componentDidMount() {
        Questions() && this.setState({ questions: Questions() });
    }

    handleSelectCheck = (ques, quesIndex, ansIndex) => {
        var getIndex = this.state.selectedAnswers.findIndex(f => f['questionIndex'] === quesIndex);
        if (getIndex !== -1) {
            this.state.selectedAnswers.splice(getIndex, 1);
        }

        //group selected answers
        if (this.state.selectedAnswers.filter(e => e['questionIndex'] === quesIndex && e['answerIndex'] === ansIndex).length === 0) {
            this.setState({
                selectedAnswers: this.state.selectedAnswers.concat({
                    questionIndex: quesIndex,
                    answerIndex: ansIndex
                })
            })
        }

        //check for wrong answers
        // let Id = this.state.questions.filter(f => f.question === ques.question)[0].correctAnswer;
        // if (Id === ansIndex) {
        //     alert("correct answer!!!")
        //     this.setState({
        //         answerInputs: this.state.answerInputs.concat({
        //             questionIndex: quesIndex,
        //             answerIndex: ansIndex,
        //             isCorrect: true
        //         })
        //     })
        // }
    }

    correctAnswer(ques, quesIndex, ansIndex) {
        let indexOfAns = this.state.questions.filter(f => f.question === ques.question)[0].correctAnswer;
        let selectedAnswer = this.state.selectedAnswers && this.state.selectedAnswers.filter(e => e['questionIndex'] === quesIndex && e['answerIndex'] === ansIndex);
        if (selectedAnswer.length > 0) {
            if (indexOfAns === selectedAnswer[0].answerIndex) {
                return true;
            }
        }
        return false;
    }

    wrongAnswer(ques, quesIndex, ansIndex) {
        let indexOfAns = this.state.questions.filter(f => f.question === ques.question)[0].correctAnswer;
        let selectedAnswer = this.state.selectedAnswers && this.state.selectedAnswers.filter(e => e['questionIndex'] === quesIndex && e['answerIndex'] === ansIndex);
        if (selectedAnswer.length > 0) {
            if (indexOfAns !== selectedAnswer[0].answerIndex) {
                return true;
            }
        }
        return false;
    }

    verifyInput(quesIndex, ansIndex, prop) {
        return this.state[prop] && this.state[prop].filter(e => e['questionIndex'] === quesIndex && e['answerIndex'] === ansIndex).length > 0;
    }

    questionContainer = (e) => {
        return (
            this.state.questions.map((items, i) => (
                e === i && !this.state.complete ? <View key={i}>
                    <View style={{ marginTop: 50, flexDirection: "row" }}>
                        <Text style={{ fontSize: 25, color: "#9199BD" }}>Question {i + 1}</Text>
                        <Text style={{ fontSize: 15, color: "#9199BD", marginTop: 10 }}>/{Questions().length}</Text>
                    </View>
                    <View>
                        <Text style={{ color: "#9199BD" }}>.......................................................................</Text>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.textQuestion}>{items.question}?</Text>
                    </View>
                    <View style={styles.answerContainer}>
                        {
                            items.answers.map((ans, k) =>
                                <TouchableOpacity
                                    style={[styles.answerCard,
                                    this.correctAnswer(items, i, k) ? { borderColor: "green" } : null,
                                    this.wrongAnswer(items, i, k) ? { borderColor: "red" } : null,
                                        //     // e === i && this.correctAnswer(items, i, k) ? { borderColor: "green" } : { borderColor:  "red" }
                                    ]}
                                    key={k}
                                    onPress={() => this.handleSelectCheck(items, i, k)}
                                >
                                    <View style={styles.answerCardAlign}>
                                        <View style={styles.textAnswer}>
                                            <Text style={{ color: "white", fontSize: 18 }}>{ans}.</Text>
                                        </View>
                                        <View style={styles.answerCheckBox}>
                                            <CheckBox
                                                checked={this.verifyInput(i, k, "selectedAnswers") ? true : false}
                                                onPress={() => this.handleSelectCheck(items, i, k)}
                                            />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        }

                        <View style={{ alignItems: "center" }}>
                            {
                                e !== Questions().length && (e + 1) !== Questions().length ? <TouchableOpacity
                                    onPress={() => this.setState({ currentIndex: i + 1 })}
                                >
                                    <LinearGradient
                                        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                                        style={{ width: 160, height: 50, alignItems: "center", justifyContent: "center", borderRadius: 70 / 2 }}
                                        colors={['#0F7FED', '#2A8CED', '#137DEA']}>
                                        <Text style={{ fontSize: 20, color: "white" }}>Next</Text>
                                    </LinearGradient>
                                </TouchableOpacity> : null
                            }

                            {
                                (e + 1) === Questions().length ? <TouchableOpacity
                                    style={{ marginTop: 10 }}
                                    onPress={() => this.setState({
                                        currentIndex: i + 1,
                                        complete: true
                                    })}
                                >
                                    <LinearGradient
                                        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                                        style={{ width: 160, height: 50, alignItems: "center", justifyContent: "center", borderRadius: 70 / 2 }}
                                        colors={['#06C048', '#76BA1A', '#597D34']}>
                                        <Text style={{ fontSize: 20, color: "white" }}>Complete</Text>
                                    </LinearGradient>
                                </TouchableOpacity> : null
                            }

                            {
                                e !== 0 ? <TouchableOpacity
                                    style={{ marginTop: 10 }}
                                    onPress={() => this.setState({ currentIndex: i - 1 })}
                                >
                                    <LinearGradient
                                        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                                        style={{ width: 160, height: 50, alignItems: "center", justifyContent: "center", borderRadius: 70 / 2 }}
                                        colors={['#E55A9B', '#B26FF2', '#D660B6']}>
                                        <Text style={{ fontSize: 20, color: "white" }}>Back</Text>
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
            <ScrollView contentContainerStyle={[styles.container, { backgroundColor: "#252C49", flexGrow: 1 }]}>
                <View style={{ marginTop: Platform.OS === "ios" ? 50 : 0 }}>
                    <View style={styles.questionProgressContainer}>
                        <LinearGradient
                            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                            style={[styles.questionProgress, { width: `${(this.state.currentIndex / Questions().length) * 100}%` }]}
                            colors={['#E55A9B', '#B26FF2', '#D660B6']}>
                        </LinearGradient>
                        <View style={{ position: "relative", bottom: 31 }}>
                            <Text style={{ fontSize: 18, color: "white", textAlign: "center" }}>{this.state.currentIndex}</Text>
                        </View>
                    </View>
                </View>
                {
                    this.questionContainer(this.state.currentIndex)
                }
                {
                    this.state.complete ? <View style={{ flexGrow: 1, alignItems: "center", justifyContent: "center" }}>
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
                    </View> : null
                }
            </ScrollView>
        );
    }
}

export default Practice;