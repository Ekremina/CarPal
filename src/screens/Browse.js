import React from "react";
import { View, Image, Text, ScrollView } from "react-native";
import { Layout, TopNav, themeColor, useTheme } from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
import { Card, Button } from "react-native-elements";

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
          {/* This text using ubuntu font */}
          <Text fontWeight="bold">Cars in your area</Text>
          <Card>
            <Card.Title>Mercedes</Card.Title>
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
          <Card>
            <Card.Title>Audi</Card.Title>
            <Card.Divider />
            <Card.Image
              style={{
                height: 220,
                width: 320,
              }}
              source={require("../../assets/car2.jpg")}
            ></Card.Image>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <Text style={{ marginTop: 10, marginLeft: 5 }}>£70/day</Text>
              <Text style={{ marginTop: 10, marginLeft: 160 }}>
                5 ⭐⭐⭐⭐⭐
              </Text>
            </View>
          </Card>
          <Card>
            <Card.Title>BMW M4</Card.Title>
            <Card.Divider />
            <Card.Image
              style={{
                height: 220,
                width: 320,
              }}
              source={require("../../assets/car3.jpg")}
            ></Card.Image>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <Text style={{ marginTop: 10, marginLeft: 5 }}>£70/day</Text>
              <Text style={{ marginTop: 10, marginLeft: 160 }}>
                5 ⭐⭐⭐⭐⭐
              </Text>
            </View>
          </Card>

          <Card>
            <Card.Title>Ford</Card.Title>
            <Card.Divider />
            <Card.Image
              style={{
                height: 220,
                width: 320,
              }}
              source={require("../../assets/car4.jpg")}
            ></Card.Image>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <Text style={{ marginTop: 10, marginLeft: 5 }}>£70/day</Text>
              <Text style={{ marginTop: 10, marginLeft: 160 }}>
                5 ⭐⭐⭐⭐⭐
              </Text>
            </View>
          </Card>
          <Card>
            <Card.Title>Ford</Card.Title>
            <Card.Divider />
            <Card.Image
              style={{
                height: 220,
                width: 320,
              }}
              source={require("../../assets/car5.jpg")}
            ></Card.Image>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <Text style={{ marginTop: 10, marginLeft: 5 }}>£70/day</Text>
              <Text style={{ marginTop: 10, marginLeft: 160 }}>
                5 ⭐⭐⭐⭐⭐
              </Text>
            </View>
          </Card>
          <Card>
            <Card.Title>Nissan Qashqai</Card.Title>
            <Card.Divider />
            <Card.Image
              style={{
                height: 220,
                width: 320,
              }}
              source={require("../../assets/car6.jpg")}
            ></Card.Image>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <Text style={{ marginTop: 10, marginLeft: 5 }}>£70/day</Text>
              <Text style={{ marginTop: 10, marginLeft: 160 }}>
                5 ⭐⭐⭐⭐⭐
              </Text>
            </View>
          </Card>
          <Card>
            <Card.Title>Volkswagen</Card.Title>
            <Card.Divider />
            <Card.Image
              style={{
                height: 220,
                width: 320,
              }}
              source={require("../../assets/car7.jpg")}
            ></Card.Image>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <Text style={{ marginTop: 10, marginLeft: 5 }}>£70/day</Text>
              <Text style={{ marginTop: 10, marginLeft: 160 }}>
                5 ⭐⭐⭐⭐⭐
              </Text>
            </View>
          </Card>
          <Card>
            <Card.Title>Volkswagen</Card.Title>
            <Card.Divider />
            <Card.Image
              style={{
                height: 220,
                width: 320,
              }}
              source={require("../../assets/car8.jpg")}
            ></Card.Image>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <Text style={{ marginTop: 10, marginLeft: 5 }}>£70/day</Text>
              <Text style={{ marginTop: 10, marginLeft: 160 }}>
                5 ⭐⭐⭐⭐⭐
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
        </View>
      </ScrollView>
    </Layout>
  );
}
