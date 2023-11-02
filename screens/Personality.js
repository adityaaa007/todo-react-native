import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowLeftCircleIcon } from "react-native-heroicons/outline";
import database from "@react-native-firebase/database";
import auth from "@react-native-firebase/auth";
import TextBox from "../components/textBox";
import Button from "../components/button";
import Snackbar from "react-native-snackbar";

export default function Personality({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [hobby, setHobby] = useState("");
  const [country, setCountry] = useState("");
  const [dob, setDob] = useState("");

  const showSnackbar = (message) => {
    Snackbar.show({
      text: message,
      duration: 2000,
      action: {
        text: "OK",
        textColor: "green",
        onPress: () => {
          console.log("Snackbar pressed");
        },
      },
    });
  };

  const firstNameHandler = (value) => setFirstName(value);
  const lastNameHandler = (value) => setLastName(value);
  const hobbyHandler = (value) => setHobby(value);
  const countryHandler = (value) => setCountry(value);
  const dobHandler = (value) => setDob(value);

  const uid = auth().currentUser.uid;
  const path = `/users/${uid}/`;

  useEffect(() => {
    const listener = database()
      .ref(path)
      .on("value", (snapshot) => {
        const userData = snapshot.val();

        console.log(userData['data']['message'])

        setFirstName(userData["firstName"]);
        setLastName(userData["lastName"]);
        setHobby(userData["hobby"]);
        setCountry(userData["country"]);
        setDob(userData["dob"]);
      });

    return () => database().ref(path).off("value", listener);
  }, []);

  const saveHandler = () => {
    database()
      .ref(path)
      .update({
        firstName: firstName,
        lastName: lastName,
        hobby: hobby,
        dob: dob,
        country: country,
      })
      .then(() => showSnackbar("Data updated successfully"))
      .then(() => console.log("Data updated."));
  };

  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        padding: 20,
        paddingTop: 36,
        paddingBottom: 0,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              console.log("Pressed back");
              navigation.goBack();
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
              color: "#494C5B",
              fontWeight: "600",
              fontSize: 18,
              marginLeft: 24,
            }}
          >
            Personality
          </Text>
        </View>

        <Image
          source={require("../assets/image-placeholder.png")}
          style={{
            width: 150,
            height: 150,
            marginTop: 32,
            alignSelf: "center",
          }}
        ></Image>
        <TouchableOpacity>
          <Text
            style={{
              color: "#FD894E",
              fontWeight: "500",
              fontSize: 14,
              alignSelf: "center",
              marginTop: 8,
              marginBottom: 16,
            }}
          >
            Edit photo
          </Text>
        </TouchableOpacity>

        <TextBox
          hint="First name"
          handler={firstNameHandler}
          secure={false}
          value={firstName}
        ></TextBox>
        <TextBox
          hint="Last name"
          handler={lastNameHandler}
          secure={false}
          value={lastName}
        ></TextBox>
        <TextBox
          hint="Hobby"
          handler={hobbyHandler}
          secure={false}
          value={hobby}
        ></TextBox>
        <TextBox
          hint="Date of birth"
          handler={dobHandler}
          secure={false}
          value={dob}
        ></TextBox>
        <TextBox
          hint="Country"
          handler={countryHandler}
          secure={false}
          value={country}
        ></TextBox>

        <Button
          color="#22B9FC"
          textColor="white"
          text="Save changes"
          handler={saveHandler}
          marginTop={24}
        ></Button>
        <View style={{ marginBottom: 32 }}></View>
      </ScrollView>
    </View>
  );
}
