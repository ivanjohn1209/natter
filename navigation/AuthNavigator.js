import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
// import { createBottomTabNavigator } from "react-navigation-tabs";

// import { createDrawerNavigator } from "react-navigation-drawer";

import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
// import WelcomeScreen from "../screens/WelcomeScreen";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {},
});

const AuthStack = createStackNavigator(
  {
    // Welcome: WelcomeScreen,
    Login: LoginScreen,
    Signup: SignupScreen,
  },
  config
);

AuthStack.path = "";

export default AuthStack;
