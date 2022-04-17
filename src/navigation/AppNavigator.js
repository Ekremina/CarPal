import React, { useContext } from "react";
import firebase from "firebase/app";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthContext } from "../provider/AuthProvider";

// Main
import Home from "../screens/Home";
import RentYourCar from "../screens/RentYourCar";
import SearchCars from "../screens/SearchCars";
import InfoCar from "../screens/InfoCar";
import UserBooking from "../screens/UserBooking";

// Auth screens
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";
import ForgetPassword from "../screens/auth/ForgetPassword";

import Loading from "../screens/utils/Loading";
import carData from "../screens/utils/data";

// Better put your these secret keys in .env file
const firebaseConfig = {
  apiKey: "AIzaSyDdG8ifeEpK7PBO-LRMmkmPrCsf6wRvvt0",
  authDomain: "carpal-adc7a.firebaseapp.com",
  projectId: "carpal-adc7a",
  storageBucket: "carpal-adc7a.appspot.com",
  messagingSenderId: "122481091658",
  appId: "1:122481091658:web:46af2a39f6089cccd672b3",
  measurementId: "G-7SP383HG1S",
};
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const AuthStack = createStackNavigator();

const Auth = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
      <AuthStack.Screen name="ForgetPassword" component={ForgetPassword} />
    </AuthStack.Navigator>
  );
};

const MainStack = createStackNavigator();

const Main = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen name="RentYourCar" component={RentYourCar} />
      <MainStack.Screen name="SearchCars" component={SearchCars} />
      <MainStack.Screen name="InfoCar" component={InfoCar} />
      <MainStack.Screen name="UserBooking" component={UserBooking} />
    </MainStack.Navigator>
  );
};

export default () => {
  const auth = useContext(AuthContext);
  const user = auth.user;
  return (
    <NavigationContainer>
      {user == null && <Loading />}
      {user == false && <Auth />}
      {user == true && <Main />}
    </NavigationContainer>
  );
};
