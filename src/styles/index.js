import React from 'react';
import {
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: "center",
        padding: 20
    },
    textStartSection: {
        fontSize: 35,
        color: "white",
        textAlign: "center"
    },
    textQuestion: {
        fontSize: 25,
        color: "white"
    },
    homeContainer: {
        marginTop: -20,
        marginLeft: 20,
        marginRight: 20
    },
    cardHomeContainer: {
        padding: 10,
        paddingTop: 20,
        paddingBottom: 20
    },
    cardHomeSection: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    categoryCardItem: {
        height: 120,
        width: '50%',
        alignItems: "center",
        justifyContent: "center"
    },
    cardButton: {
        width: "100%",
        height: "100%",
        justifyContent: "center"
    },
    answerContainer: {
        marginTop: 80
    },
    answerCard: {
        width: "100%",
        height: 65,
        borderRadius: 25,
        borderWidth: 5,
        borderColor: "#244868",
        justifyContent: "center",
        padding: 20,
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
        borderRadius: 25
    },
    textAnswer: {
        width: 280
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
    }
})

export default styles;