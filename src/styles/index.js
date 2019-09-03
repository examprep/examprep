import React from 'react';
import {
    StyleSheet,
    Platform
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: "center",
        // marginTop: Platform.OS === "ios" ? 50 : 0,
        padding: 20
    },
    scrollContainer: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: "#252C49"
    },
    textStartSection: {
        fontSize: 35,
        color: "white",
        textAlign: "center"
    },
    textQuestion: {
        fontSize: 18,
        color: "white"
    },
    homeContainer: {
        marginTop: -20,
        marginLeft: 20,
        marginRight: 20
    },
    cardHomeContainer: {
        padding: 10,
        paddingTop: 30,
        paddingBottom: 30,
        borderRadius: 8
    },
    cardHomeSection: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    categoryCardItem: {
        height: 120,
        width: '49%',
        alignItems: "center",
        justifyContent: "center",
    },
    cardButton: {
        width: "100%",
        height: "100%",
        justifyContent: "center"
    },
    answerContainer: {
        marginTop: 50
    },
    answerCard: {
        width: "100%",
        height: 65,
        borderRadius: 25,
        borderWidth: 5,
        borderColor: "#244868",
        justifyContent: "center",
        padding: 15,
        marginBottom: 15
    },
    questionProgressContainer: {
        width: "100%",
        height: 45,
        borderRadius: 25,
        borderWidth: 5,
        borderColor: "#244868"
    },
    questionProgress: {
        width: "65%",
        height: "100%",
        // borderRadius: 25
    },
    textAnswer: {
        width: 260
    },
    answerCheckBox: {
        height: "100%",
        justifyContent: "center"
    },
    iconStyle: {
        height: 40,
        width: 40,
        borderRadius: 50 / 2,
        justifyContent: "center",
        alignItems: "center"
    },
    answerCardAlign: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    practiceBtn: {
        width: 140,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 60 / 2
    },
    actionBtn: {
        width: 50,
        height: 50,
        backgroundColor: "red",
        borderRadius: 50 / 2,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        marginHorizontal: 20
    },
    innerActionBtn: {
        width: 48,
        height: 48,
        backgroundColor: "red",
        borderRadius: 48 / 2,
        borderWidth: 2,
        borderColor: "#343839",
        justifyContent: "center",
        alignItems: "center"
    }
})

export default styles;