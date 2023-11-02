import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { useState } from "react";
import { ArrowLeftCircleIcon } from "react-native-heroicons/outline";
import TextBox from "../components/authTextBox";
import Button from "../components/button";
import auth from "@react-native-firebase/auth";

export default function Login({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const emailHandler = value => setEmail(value)
  const passwordHandler = value => setPassword(value)

  const login = async () => {
    await auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("User signed in!");
      })
      .catch((error) => {
        if (error.code === "auth/invalid-email") {
          console.log("That email address is invalid!");
        }

        console.error(error);
      });
  };

  const loginHandler = () => {
    if(email != '' && password != '') {
      if(!email.includes('@'))
        Alert.alert('Email is invalid !')
      else if(password.length < 6)
        Alert.alert('Password should be 6 chars or long !')
      else {
        console.log('all right')
        login()
      }
    }
    else
      Alert.alert('Fill the fields !')
  }

  return (
    <View
      style={{
        padding: 20,
        paddingTop: 36,
        paddingBottom: 0,
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          onPress={() => {
            console.log("Pressed back");
            navigation.goBack()
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
          This is your community, help them to grow more
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
          Our community is your community too so let`s strengthen our community together
        </Text>
        <Image
          source={require("../assets/robot.png")}
          style={{
            width: 150,
            height: 150,
            alignSelf: "center",
            marginTop: 16,
          }}
        ></Image>

        <TextBox hint="Email" handler={emailHandler} secure={false}></TextBox>
        <TextBox hint="Password" handler={passwordHandler} secure={true}></TextBox>

        <Button
          color="#22B9FC"
          textColor="white"
          text="Next"
          handler={loginHandler}
          marginTop={24}
        ></Button>
        <View
          style={{
            flexDirection: "row",
            marginBottom: 24,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "400",
              fontSize: 14,
              marginTop: 16,
              color: "#A4A6B2",
              lineHeight: 22,
            }}
          >
            Don`t have an account ?
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Signup");
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 14,
                marginTop: 16,
                color: "#FD6B22",
                paddingHorizontal: "3%",
                lineHeight: 22,
              }}
            >
              SignUp
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}