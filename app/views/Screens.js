// JavaScript source code
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Image, TextInput} from "react-native";

export const Home = ({ navigation }) => {

    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const firstCalc = height * height;
    const secondCalc = weight / firstCalc;
    const bmiCalculation = (secondCalc * 703).toFixed(2);

    return (
        <View style={styles.container}>
            <Text id="title" style={styles.title}>BMI Calculator.</Text>
            <View>
                <TextInput
                    style={{ color: "#fff", height: 40, borderColor: "gray", borderBottomWidth: 1, marginBottom: 10, marginLeft: 10 }}
                    keyboardType="numeric"
                    placeholder="Enter your weight in pounds."
                    onChangeText={(val) => setWeight(val)} />
                <TextInput
                    style={{ color: "#fff", height: 40, borderColor: "gray", borderBottomWidth: 1, marginBottom: 10, marginLeft: 10 }}
                    keyboardType="numeric"
                    placeholder="Enter your height in inches."
                    onChangeText={(val) => setHeight(val)} />
            </View>
            <View>
                <Button
                    id="calculationBtn"
                    title="Calculate BMI"
                    onPress={() => navigation.push("Calculation", { bmiCalculation })}
                />
            </View>
            <Image
                style={styles.imageLayout}
                source={require("../../assets/bmipicture.jpg")}
            />
        </View>
    );
};

export const Calculation = ({ route }) => {
    const { bmiCalculation } = route.params;
    return (
    <View style={styles.container}>
        <Image
            style={styles.imageLayout2}
            source={require("../../assets/bmipicture2.jpg")}
        />
            <View style={styles.text}>
                <Text style={{ fontSize: 25, color: "#fff" }}>Your body mass index is: {bmiCalculation}.</Text>
        </View>
    </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#363535",
    },
    title: {
        color: "#fff",
        textAlign: "center",
        width: 415,
        top: 0,
        marginBottom: 10,
        fontSize: 40,
        borderColor: "#A7A6A6",
        borderBottomWidth: 1
    },
    imageLayout: {
        alignContent: "center",
        marginTop: 200,
        height: 200,
        width: 400,
        marginLeft: 5
    },
    imageLayout2: {
        marginTop: 5,
        alignSelf: "center",
        height: 200,
        width: 350
    },
    text: {
        marginTop: 20
    },
});