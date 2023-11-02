import { TextInput } from "react-native";
import React from "react";

export default function authTextBox(props) {
  return (
    <TextInput
      style={{
        width: "100%",
        padding: 12,
        paddingLeft: 24,
        borderColor: "#ddd",
        borderWidth: 1,
        borderRadius: 12,
        fontWeight: "500",
        marginTop:20
      }}
      secureTextEntry={props.secure}
      placeholder={props.hint}
      placeholderTextColor={"#aaa"}
      onChangeText={(value) => {
        props.handler(value)
      }}
    ></TextInput>
  );
}
