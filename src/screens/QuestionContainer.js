import React from 'react';
import { View } from 'react-native';

export default function({questions}) {
    return (
        
        <View>
            <View style={{ marginTop: 50, flexDirection: "row" }}>
                <Text style={{ fontSize: 25, color: "#9199BD" }}>Question 1</Text>
                <Text style={{ fontSize: 15, color: "#9199BD", marginTop: 10 }}>/10</Text>
            </View>
            <View>
                <Text style={{ color: "#9199BD" }}>.......................................................................</Text>
            </View>
            <View style={{ marginTop: 20 }}>
                <Text style={styles.textQuestion}>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</Text>
            </View>
            <View style={styles.answerContainer}>
                <TouchableOpacity
                    style={styles.answerCard}
                    onPress={() => this.handleSelectCheck(1)}
                >
                    <View style={styles.answerCardAlign}>
                        <View style={styles.textAnswer}>
                            <Text style={{ color: "white", fontSize: 18 }}>Aliquam tincidunt elementum.</Text>
                        </View>
                        <View style={styles.answerCheckBox}>
                            <CheckBox
                                checked={this.state.questionIndex === 1 ? true : false}
                                onPress={() => this.handleSelectCheck(1)}
                            />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.answerCard}
                    onPress={() => this.handleSelectCheck(2)}
                >
                    <View style={styles.answerCardAlign}>
                        <View style={styles.textAnswer}>
                            <Text style={{ color: "white", fontSize: 18 }}>Nunc molestie rhoncus libero.</Text>
                        </View>
                        <View style={styles.answerCheckBox}>
                            <CheckBox
                                checked={this.state.questionIndex === 2 ? true : false}
                                onPress={() => this.handleSelectCheck(2)}
                            />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.answerCard}
                    onPress={() => this.handleSelectCheck(3)}
                >
                    <View style={styles.answerCardAlign}>
                        <View style={styles.textAnswer}>
                            <Text style={{ color: "white", fontSize: 18 }}>Vestibulum tincidunt augue in sapien porttitor.
                                </Text>
                        </View>
                        <View style={styles.answerCheckBox}>
                            <CheckBox
                                checked={this.state.questionIndex === 3 ? true : false}
                                onPress={() => this.handleSelectCheck(3)}
                            />
                        </View>
                    </View>
                </TouchableOpacity>

                <View style={{ alignItems: "center" }}>
                    <LinearGradient
                        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                        style={{ width: 200, height: 70, alignItems: "center", justifyContent: "center", borderRadius: 70 / 2 }}
                        colors={['#0F7FED', '#2A8CED', '#137DEA']}>
                        <Text style={{ fontSize: 20, color: "white" }}>Next</Text>
                    </LinearGradient>
                </View>
            </View>
        </View>
    )
}