import React from "react";
import { useState } from "react";
import { View } from "react-native";
import {
  Layout,
  TopNav,
  Text,
  Button,
  themeColor,
  useTheme,
  TextInput,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";

export default function ({ navigation }) {
  const { isDarkmode, setTheme } = useTheme();
  const [carname, setCarname] = useState("");
  const [rentalrate, setRentalrate] = useState("");
  const [location, setLocation] = useState("");
  const [saving, setSaving] = useState(false);

  return (
    <Layout>
      <TopNav
        middleContent="Rent Your Car"
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

      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* <Text fontWeight="bold">Ekremina is the Boss!!!!!!{"\n"}</Text> */}
        <Text fontWeight="bold">Enter Car Details{"\n"}</Text>
        <TextInput
          placeholder="Car Name"
          value={carname}
          autoCapitalize="none"
          autoCompleteType="off"
          autoCorrect={false}
          onChangeText={(text) => setCarname(text)}
        />
        <Text></Text>
        <TextInput
          placeholder="Rental Rate (£ Per Day)"
          value={rentalrate}
          autoCapitalize="none"
          autoCompleteType="off"
          autoCorrect={false}
          onChangeText={(text) => setRentalrate(text)}
        />
        <Text></Text>
        <TextInput
          placeholder="Location"
          value={location}
          autoCapitalize="none"
          autoCompleteType="off"
          autoCorrect={false}
          onChangeText={(text) => setLocation(text)}
        />
        <Text></Text>
        <Button
          text={saving ? "Saving" : "Submit Information"}
          onPress={() => {
            // login();
            console.log("Hello");
          }}
          style={{
            marginTop: 20,
          }}
          disabled={saving}
        />
      </View>
    </Layout>
  );
}
