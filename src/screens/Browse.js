import React from "react";
import { View, Image, Text, ScrollView } from "react-native";
import {
  Layout,
  Button,
  TopNav,
  themeColor,
  useTheme,
} from "react-native-rapi-ui";

import { Ionicons } from "@expo/vector-icons";
import { Card } from "react-native-elements";
import { carData } from "./utils/data";

// Function to pack "Card" objects to an array
export function MinaFunction() {
  var outputMina = [];

  for (var sumNum = 0; sumNum < carData.length; sumNum++) {
    outputMina.push(
      <Card key={sumNum}>
        <Card.Title>{carData[sumNum]["carname"]}</Card.Title>
        <Button
          text="View"
          onPress={() => {
            navigation.navigate("InfoCar");
          }}
          style={{
            marginTop: 10,
          }}
        />
        <Card.Divider />
        {console.log("someurl/somepic" + sumNum)}
        {/* Concatenation works here */}
        {console.log(carData[sumNum]["pictureurl"])}
        <Card.Image
          style={{ height: 220, width: 320 }}
          source={require("../../assets/car1.jpg")} // Needs to be made dynamic somehow...

          // Thank you for motivation but i am far from being good at this :D i will make sure i put you and Liam on acknowledgements on thesis :D

          // Righto - well have a good evening/morning and catcha later ☺ - good night 😊😊😊
        ></Card.Image>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          <Text style={{ marginTop: 10, marginLeft: 5 }}>
            £{carData[sumNum]["rate"]}/day
          </Text>
          <Text style={{ marginTop: 10, marginLeft: 160 }}>
            ⭐ {carData[sumNum]["star"]}
          </Text>
          <Text style={{ marginTop: 30, marginLeft: 5 }}>Location: </Text>
        </View>
      </Card>
    );
  }
  return outputMina;
}

export default function ({ navigation }) {
  const { isDarkmode, setTheme } = useTheme();
  return (
    <Layout>
      <TopNav
        middleContent="Browse Screen"
        leftContent={
          <Ionicons
            name="chevron-back"
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
        leftAction={() => navigation.goBack()}
        rightContent={
          <Ionicons
            name={isDarkmode ? "sunny" : "moon"}
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
        rightAction={() => {
          if (isDarkmode) {
            setTheme("light");
          } else {
            setTheme("dark");
          }
        }}
      />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text fontWeight="bold">Cars in your area</Text>
          {MinaFunction()}
        </View>
      </ScrollView>
    </Layout>
  );
}
