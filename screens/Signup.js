import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert
} from "react-native";
import React from "react";
import { ArrowLeftCircleIcon } from "react-native-heroicons/outline";
import TextBox from "../components/authTextBox";
import Button from "../components/button";
import database from "@react-native-firebase/database";
import { useState } from "react";
import auth from "@react-native-firebase/auth";

export default function Signup({ navigation }) {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const register = async () => {
    await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {

        console.log("User account created & signed in!");
        //uploading user data
        database()
        .ref('/users/'+auth().currentUser.uid)
        .set({
          email: email,
          firstName: firstName,
          lastName: lastName,
        }).then(() => console.log('User data uploaded successfully !')).then(() => console.log('Data set.'));
      
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          console.log("That email address is already in use!");
        }

        if (error.code === "auth/invalid-email") {
          console.log("That email address is invalid!");
        }

        console.error(error);
      });
  };

  const firstNameHandler = value => setFirstName(value)
  const lastNameHandler = value => setLastName(value)
  const emailHandler = value => setEmail(value)
  const passwordHandler = value => setPassword(value)
  const signUpHandler = () => {
    if(firstName != '' && lastName != '' && email != '' && password != '') {
      if(!email.includes('@'))
        Alert.alert('Email is invalid !')
      else if(password.length < 6)
        Alert.alert('Password should be 6 chars or long !')
      else {
        console.log('all right')
        register()
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
            console.log("Pressed back")
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
          When community becomes unity
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
          Our community is always there 24 hours if you need it, don`t hesitate
          to join
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

        <TextBox hint="First name" handler={firstNameHandler} secure={false}></TextBox>
        <TextBox hint="Last name" handler={lastNameHandler} secure={false}></TextBox>
        <TextBox hint="Email" handler={emailHandler} secure={false}></TextBox>
        <TextBox hint="Password" handler={passwordHandler} secure={true}></TextBox>

        <Button
          color="#22B9FC"
          textColor="white"
          text="Next"
          handler={signUpHandler}
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
            Already have an account ?
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Login");
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
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
