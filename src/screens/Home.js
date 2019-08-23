import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import LinearGradient from 'react-native-linear-gradient';
import {
    Content,
    Card,
    CardItem,
    Body
} from "native-base";
import Text from '../config/AppText';
import styles from "../styles";
import Icon from 'react-native-vector-icons/dist/Ionicons';

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [{
                name: "SCIENCE",
                colors: ['#C145FF', '#50255A', '#250D43'],
                icon: "ios-baseball"
            },
            {
                name: "HISTORY",
                colors: ['#FCD12A', '#FFC211', '#FFE22A'],
                icon: "ios-body"
            },
            {
                name: "GEOGRAPHY",
                colors: ['#BF5400', '#F07318', '#883000'],
                icon: "ios-planet"
            },
            {
                name: "COMPUTER",
                colors: ['#06C048', '#76BA1A', '#597D34'],
                icon: "ios-outlet"
            },
            {
                name: "WORLD",
                colors: ['#FCD12A', '#FFC211', '#FFE22A'],
                icon: "ios-baseball"
            },
            {
                name: "SCIENCE",
                colors: ['#C145FF', '#50255A', '#250D43'],
                icon: "ios-color-palette"
            }]
        }
    }
    render() {
        return (
            <ScrollView
                contentContainerStyle={{ ...StyleSheet.absoluteFill, flexGrow: 1 }}
            >
                <LinearGradient
                    start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                    style={{ height: 250, alignItems: "center", justifyContent: "center" }}
                    colors={['#00c6c6', '#192f6a', '#62f9f9']}>
                    <View style={[{ padding: 30, alignSelf: "center" }, Platform.OS === 'ios' ? { marginTop: 30 } : null]}>
                        <Text style={styles.textStartSection}>
                            Choose a section to start
                        </Text>
                    </View>
                </LinearGradient>
                <View style={styles.homeContainer}>
                    <Card style={styles.cardHomeContainer}>
                        <View style={styles.cardHomeSection}>
                            <Card style={styles.categoryCardItem}>
                                <CardItem
                                    button
                                    style={styles.cardButton}
                                    onPress={() => this.props.navigation.navigate("Practice")}
                                >
                                    <View style={{ alignItems: "center" }}>
                                        <LinearGradient
                                            style={styles.iconStyle}
                                            colors={['#C145FF', '#50255A', '#250D43']}>
                                            <Icon
                                                name="ios-baseball"
                                                style={{ color: "white", fontSize: 18, textAlign: "center" }}
                                            />
                                        </LinearGradient>
                                        <View style={{ marginTop: 10 }}>
                                            <Text style={{ fontSize: 12, fontFamily: "Lato-Black" }}>SCIENCE</Text>
                                        </View>
                                    </View>
                                </CardItem>
                            </Card>

                            <Card style={styles.categoryCardItem}>
                                <CardItem
                                    button
                                    style={styles.cardButton}
                                    onPress={() => this.props.navigation.navigate("Practice")}
                                >
                                    <View style={{ alignItems: "center" }}>
                                        <LinearGradient
                                            style={styles.iconStyle}
                                            colors={['#FCD12A', '#FFC211', '#FFE22A']}>
                                            <Icon
                                                type="Ionicons"
                                                name="ios-body"
                                                style={{ color: "white", fontSize: 18, textAlign: "center" }}
                                            />
                                        </LinearGradient>
                                        <View style={{ marginTop: 10 }}>
                                            <Text style={{ fontSize: 12, fontFamily: "Lato-Black" }}>HISTORY</Text>
                                        </View>
                                    </View>
                                </CardItem>
                            </Card>
                        </View>

                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Card style={styles.categoryCardItem}>
                                <CardItem
                                    button
                                    style={styles.cardButton}
                                    onPress={() => this.props.navigation.navigate("Practice")}
                                >
                                    <View style={{ alignItems: "center" }}>
                                        <LinearGradient
                                            style={styles.iconStyle}
                                            colors={['#BF5400', '#F07318', '#883000']}>
                                            <Icon
                                                type="Ionicons"
                                                name="ios-planet"
                                                style={{ color: "white", fontSize: 18, textAlign: "center" }}
                                            />
                                        </LinearGradient>
                                        <View style={{ marginTop: 10 }}>
                                            <Text style={{ fontSize: 12, fontFamily: "Lato-Black" }}>GEOGRAPHY</Text>
                                        </View>
                                    </View>
                                </CardItem>
                            </Card>

                            <Card style={styles.categoryCardItem}>
                                <CardItem
                                    button
                                    style={styles.cardButton}
                                    onPress={() => this.props.navigation.navigate("Practice")}
                                >
                                    <View style={{ alignItems: "center" }}>
                                        <LinearGradient
                                            style={styles.iconStyle}
                                            colors={['#06C048', '#76BA1A', '#597D34']}>
                                            <Icon
                                                type="Ionicons"
                                                name="ios-outlet"
                                                style={{ color: "white", fontSize: 18, textAlign: "center" }}
                                            />
                                        </LinearGradient>
                                        <View style={{ marginTop: 10 }}>
                                            <Text style={{ fontSize: 12, fontFamily: "Lato-Black" }}>COMPUTER</Text>
                                        </View>
                                    </View>
                                </CardItem>
                            </Card>
                        </View>

                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Card style={styles.categoryCardItem}>
                                <CardItem
                                    button
                                    style={styles.cardButton}
                                    onPress={() => this.props.navigation.navigate("Practice")}
                                >
                                    <View style={{ alignItems: "center" }}>
                                        <LinearGradient
                                            style={styles.iconStyle}
                                            colors={['#FCD12A', '#FFC211', '#FFE22A']}>
                                            <Icon
                                                type="Ionicons"
                                                name="ios-baseball"
                                                style={{ color: "white", fontSize: 18, textAlign: "center" }}
                                            />
                                        </LinearGradient>
                                        <View style={{ marginTop: 10 }}>
                                            <Text style={{ fontSize: 12, fontFamily: "Lato-Black" }}>WORLD</Text>
                                        </View>
                                    </View>
                                </CardItem>
                            </Card>

                            <Card style={styles.categoryCardItem}>
                                <CardItem
                                    button
                                    style={styles.cardButton}
                                    onPress={() => this.props.navigation.navigate("Practice")}
                                >
                                    <View style={{ alignItems: "center" }}>
                                        <LinearGradient
                                            style={styles.iconStyle}
                                            colors={['#C145FF', '#50255A', '#250D43']}>
                                            <Icon
                                                type="Ionicons"
                                                name="ios-color-palette"
                                                style={{ color: "white", fontSize: 18, textAlign: "center" }}
                                            />
                                        </LinearGradient>
                                        <View style={{ marginTop: 10 }}>
                                            <Text style={{ fontSize: 12, fontFamily: "Lato-Black" }}>OTHER</Text>
                                        </View>
                                    </View>
                                </CardItem>
                            </Card>
                        </View>
                    </Card>
                </View>
                {/* <TouchableOpacity onPress={() => { this.props.navigation.navigate("Practice") }}>
                    <Text>Home Screen</Text>
                </TouchableOpacity> */}
            </ScrollView>
        );
    }
}

export default HomeScreen;