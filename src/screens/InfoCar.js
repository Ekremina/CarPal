import React from "react";
import { View, Image, Text, ScrollView } from "react-native";
import {
  Avatar,
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

export default function ({ navigation }) {
  const { isDarkmode, setTheme } = useTheme();

  /* Temporary Index to control the pages until we find a way to pass this as an argument somewhere */
  var iCarIndex = 2;

  return (
    <Layout>
      <TopNav
        middleContent="View Details"
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
          {/* This text using ubuntu font */}
          <Card>
            <Card.Title>{carData[iCarIndex]["carname"]}</Card.Title>
            <Card.Divider />
            <Card.Image
              style={{
                height: 220,
                width: 320,
              }}
              source={aImageSet[iCarIndex]}
            ></Card.Image>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <Text style={{ marginTop: 10, marginLeft: 5 }}>
                £{carData[iCarIndex]["rate"]}/day
              </Text>
              <Text style={{ marginTop: 10, marginLeft: 160 }}>
                ⭐ {carData[iCarIndex]["star"]}
              </Text>

              <Card.Title
                style={{ marginTop: 30, marginLeft: 5, marginRight: 50 }}
              >
                Notes for {carData[iCarIndex]["carname"]}
              </Card.Title>

              <Text style={{ marginTop: 10, marginLeft: 5, marginRight: 50 }}>
                ✅ {carData[iCarIndex]["notes"][0]}
              </Text>
              <Text style={{ marginTop: 20, marginLeft: 5, marginRight: 50 }}>
                ✅ {carData[iCarIndex]["notes"][1]}
              </Text>

              {/* Calendar here */}
              <Card.Title
                style={{ marginTop: 30, marginLeft: 5, marginRight: 50 }}
              >
                Choose Trip Dates
              </Card.Title>
              <Card.Title
                style={{ marginTop: 20, marginLeft: 5, marginRight: 50 }}
              >
                Pickup & Return:
                <Text style={{ marginTop: 20, marginLeft: 5, marginRight: 50 }}>
                  📍 {carData[iCarIndex]["pickup"]}
                </Text>
              </Card.Title>
            </View>
          </Card>
          <Button
            text="Continue"
            onPress={() => {
              navigation.navigate("UserBooking");
            }}
            style={{
              marginTop: 20,
            }}
          />
        </View>
      </ScrollView>
    </Layout>
  );
}
