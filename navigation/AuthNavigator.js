import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
// import { createBottomTabNavigator } from "react-navigation-tabs";

// import { createDrawerNavigator } from "react-navigation-drawer";

import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import NameFormScreen from "../screens/SignupForm/NameFormScreen";
import BirthdayFormScreen from "../screens/SignupForm/BirthdayFormScreen";
import GenderFormScreen from "../screens/SignupForm/GenderFormScreen";
import MobileNumberFormScreen from "../screens/SignupForm/MobileNumberFormScreen";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {},
});

const AuthStack = createStackNavigator(
  {
    Login: LoginScreen,
    Signup: SignupScreen,
    NameForm: NameFormScreen,
    BirthdayForm: BirthdayFormScreen,
    GenderForm: GenderFormScreen,
    MobileNumberForm: MobileNumberFormScreen,
  },
  config
);

AuthStack.path = "";

export default AuthStack;
