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

export default function ({ navigation }) {
  const { isDarkmode, setTheme } = useTheme();
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
          <Text fontWeight="bold"></Text>
          <Card>
            <Card.Title>Mercedes-Benz</Card.Title>
            <Card.Divider />
            <Card.Image
              style={{
                height: 220,
                width: 320,
              }}
              source={require("../../assets/car1.jpg")}
            ></Card.Image>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <Text style={{ marginTop: 10, marginLeft: 5 }}>£50/day</Text>
              <Text style={{ marginTop: 10, marginLeft: 160 }}>
                4.5 ⭐⭐⭐⭐
              </Text>

              <Card.Title
                style={{ marginTop: 30, marginLeft: 5, marginRight: 50 }}
              >
                Description
              </Card.Title>
              <Text style={{ marginTop: 10, marginLeft: 10, marginRight: 50 }}>
                Mercedes-Benz CL 2.0
              </Text>
              <Text style={{ marginTop: 20, marginLeft: 5, marginRight: 50 }}>
                ✅ CAR DISINFECTED before each trip
              </Text>
              <Text style={{ marginTop: 20, marginLeft: 5, marginRight: 50 }}>
                ✅ Free Cancellation
              </Text>
              {/* Calendar here */}
              <Card.Title
                style={{ marginTop: 30, marginLeft: 5, marginRight: 50 }}
              >
                Choose Trip Dates
              </Card.Title>
              <Card.Title
                style={{ marginTop: 30, marginLeft: 5, marginRight: 50 }}
              >
                Pickup & Return
              </Card.Title>
              <Text style={{ marginTop: 20, marginLeft: 5, marginRight: 50 }}>
                📍 Hemel Hempstead
              </Text>
            </View>
          </Card>

          {/* {[1, 2, 3, 4, 5, 6, 7].map((n) => (
            <Image
              key={n}
              resizeMode="contain"
              style={{
                height: 220,
                width: 220,
              }}
              source={require("../../assets/car2.jpg")}
            />
          ))} */}
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
