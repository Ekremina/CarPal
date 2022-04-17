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
import { TextInput } from "react-native-rapi-ui";

import { Ionicons } from "@expo/vector-icons";
import { Card } from "react-native-elements";

export default function ({ navigation }) {
  const { isDarkmode, setTheme } = useTheme();
  return (
    <Layout>
      <TopNav
        middleContent="User Booking"
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
            </View>
          </Card>

          <Button
            text="Continue"
            onPress={() => {
              navigation.navigate("InfoCar");
            }}
            style={{
              marginTop: 100,
            }}
          />
        </View>
      </ScrollView>
    </Layout>
  );
}
