import React from "react";
import {
    View,
    StyleSheet,
    Platform
} from "react-native";
import { TouchableOpacity, ScrollView, FlatList } from "react-native-gesture-handler";
import LinearGradient from 'react-native-linear-gradient';
import {
    Content,
    Card,
    CardItem,
    Body,
    ListItem
} from "native-base";
import Text from '../config/AppText';
import styles from "../styles";
import Icon from 'react-native-vector-icons/dist/Ionicons';
const Questions = require('../config/data.json');

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [{
                id: "Mathematics",
                name: "MATHEMATICS",
                colors: ['#C145FF', '#50255A', '#250D43'],
                icon: "ios-baseball"
            },
            {
                id: "English Language",
                name: "ENGLISH",
                colors: ['#FCD12A', '#FFC211', '#FFE22A'],
                icon: "ios-body"
            },
            // {
            //     name: "HISTORY",
            //     colors: ['#FCD12A', '#FFC211', '#FFE22A'],
            //     icon: "ios-body"
            // },
            {
                id: "Geography",
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
    componentDidMount() {
        // console.warn(Questions);
    }

    _keyExtractor = (item, index) => item.name;

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
                        <FlatList
                            data={this.state.categories}
                            numColumns={2}
                            keyExtractor={this._keyExtractor}
                            renderItem={({ item }) => <Card
                                style={styles.categoryCardItem}>
                                <CardItem
                                    button
                                    style={styles.cardButton}
                                    onPress={() => this.props.navigation.navigate("Practice", {
                                        id: item.id
                                    })}
                                >
                                    <View style={{ alignItems: "center" }}>
                                        <LinearGradient
                                            style={styles.iconStyle}
                                            colors={item.colors}>
                                            <Icon
                                                name={item.icon}
                                                style={{ color: "white", fontSize: 18, textAlign: "center" }}
                                            />
                                        </LinearGradient>
                                        <View style={{ marginTop: 10 }}>
                                            <Text style={{ fontSize: 12, fontFamily: "Lato-Black" }}>{item.name}</Text>
                                        </View>
                                    </View>
                                </CardItem>
                            </Card>
                            }
                        />
                    </Card>
                </View>
            </ScrollView>
        );
    }
}

export default HomeScreen;