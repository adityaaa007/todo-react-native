import { View, Text, TouchableOpacity, Image, BackHandler } from "react-native";
import React from "react";
import { ArrowLeftCircleIcon } from "react-native-heroicons/outline";
import Button from "../components/button";

export default function Welcome({ navigation }) {

  const navigateSignup = () => {
    navigation.navigate('Signup')
  }

  const navigateLogin = () => {
    navigation.navigate('Login')
  }

  return (
    <View style={{ padding: 20, paddingTop: 36, backgroundColor:'white', flex:1 }}>
      <TouchableOpacity
        onPress={() => {
          console.log("Pressed back");
          BackHandler.exitApp()
        }}
      >
        <ArrowLeftCircleIcon
          width={32}
          height={32}
          color={"black"}
        ></ArrowLeftCircleIcon>
      </TouchableOpacity>

      <Text
        style={{
          fontWeight: "bold",
          fontSize: 32,
          marginTop: 32,
          color: "#484B5A",
          paddingRight: "30%",
        }}
      >
        Welcome to our community
      </Text>
      <Text
        style={{
          fontWeight: "400",
          fontSize: 14,
          marginTop: 8,
          color: "#A4A6B2",
          paddingRight: "10%",
          lineHeight: 22,
        }}
      >
        our community is ready to help you to join our best platform
      </Text>
      <Image
        source={require("../assets/robot.png")}
        style={{ width: 180, height: 180, alignSelf: "center", marginTop: 16 }}
      ></Image>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20,
          marginTop: 16,
          color: "#484B5A",
          alignSelf: "center",
        }}
      >
        Get in through
      </Text>
      <Button color="#22B9FC" textColor="white" text="Sign up" handler={navigateSignup} marginTop={32}></Button>
      <Button color="#FAECE9" textColor="#FD6B22" text="Login" handler={navigateLogin} marginTop={12}></Button>
    </View>
  );
}
