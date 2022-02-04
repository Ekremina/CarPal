import React from "react";
import { ImageBackground, View, Linking } from "react-native";
import * as firebase from "firebase";
import { Card } from "react-native-elements";
import {
  Layout,
  Button,
  Image,
  Text,
  TopNav,
  Section,
  SectionContent,
  useTheme,
  themeColor,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";

export default function ({ navigation }) {
  const { isDarkmode, setTheme } = useTheme();
  return (
    <Layout>
      <TopNav
        middleContent="Home"
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
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card>
          <Card.Title>Welcome</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{
              height: 300,
              width: 420,

              marginLeft: 40,
              marginRight: 40,
            }}
            source={require("../../assets/HOMECAR.jpg")}
          ></Card.Image>
        </Card>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Section style={{ marginTop: 20 }}>
          <SectionContent>
            <Text fontWeight="bold" style={{ textAlign: "center" }}>
              These UI components provided by Rapi UI
            </Text>
            <Button
              text="Go to second screen"
              onPress={() => {
                navigation.navigate("SecondScreen");
              }}
              style={{
                marginTop: 10,
              }}
            />
            <Button
              text="Go to Browsing"
              onPress={() => {
                navigation.navigate("Browse");
              }}
              style={{
                marginTop: 10,
              }}
            />
            <Button
              status="danger"
              text="Logout"
              onPress={() => {
                firebase.auth().signOut();
              }}
              style={{
                marginTop: 10,
              }}
            />
          </SectionContent>
        </Section>
      </View>
    </Layout>
  );
}
