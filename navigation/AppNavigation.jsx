import React, { useContext, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import Login from "./../src/screens/ONBOARDING/Login";
import LoginMain from "./../src/screens/ONBOARDING/LoginMain";
import Otp from "./../src/screens/ONBOARDING/Otp";
import WhatsApp from "./../src/screens/ONBOARDING/WhatsApp";
import Name from "./../src/screens/ONBOARDING/Name";
import Email from "./../src/screens/ONBOARDING/Email";
import Company from "./../src/screens/ONBOARDING/Company";
import License from "./../src/screens/ONBOARDING/License";

// Bottom Nav
import BottomNav from "./BottomNav";

// state
import AuthContext from "./../store/auth-context";

const AppNavigation = () => {
  const { isLoading, userToken } = useContext(AuthContext);

  if (isLoading) {
    return (
      <View
        style={{ flex: 1, justifyContent: "center", alignContent: "center" }}
      >
        <ActivityIndicator size={"large"} />
      </View>
    );
  }

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={userToken !== null ? "Home" : "Login"}>
        {userToken !== null ? (
          <Stack.Screen
            name="Home"
            options={{ headerShown: false }}
            component={BottomNav}
          />
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginMain"
              component={LoginMain}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WhatsApp"
              component={WhatsApp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Otp"
              component={Otp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Name"
              component={Name}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Email"
              component={Email}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Company"
              component={Company}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="License"
              component={License}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppNavigation;
