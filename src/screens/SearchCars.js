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

aImageSet = [
  require("../../assets/car1.jpg"),
  require("../../assets/car2.jpg"),
  require("../../assets/car3.jpg"),
  require("../../assets/car4.jpg"),
  require("../../assets/car5.jpg"),
  require("../../assets/car6.jpg"),
  require("../../assets/car7.jpg"),
  require("../../assets/car8.jpg"),
];

// Function to pack "Card" objects to an array

export default function ({ navigation }) {
  function MinaFunction() {
    var outputMina = [];

    for (var i = 0; i < carData.length; i++) {
      outputMina.push(
        <Card key={i}>
          <Card.Title>{carData[i]["carname"]}</Card.Title>
          <Button
            text="View"
            onPress={() => {
              navigation.navigate("InfoCar");
              /*
              Can use the console in this onPress to test what things are accessible
              it seems 'this' is undefined... - I'm not sure that's right...

              */
              console.log("This Equals: " + this);
            }}
            style={{ marginTop: 10 }}
          />
          <Card.Divider />
          <Card.Image
            style={{ height: 220, width: 320 }}
            source={aImageSet[i]}
          ></Card.Image>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            <Text style={{ marginTop: 10, marginLeft: 5 }}>
              £{carData[i]["rate"]}/day
            </Text>
            <Text style={{ marginTop: 10, marginLeft: 160 }}>
              ⭐ {carData[i]["star"]}
            </Text>
            <Text style={{ marginTop: 30, marginLeft: 5 }}>Location: </Text>
          </View>
        </Card>
      );
    }
    return outputMina;
  }

  const { isDarkmode, setTheme } = useTheme();
  return (
    <Layout>
      <TopNav
        middleContent="Search Cars"
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
          {/* Function that populates the cards */}
        </View>
      </ScrollView>
    </Layout>
  );
}
