import { Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  UsersIcon,
  ArrowRightIcon,
  DocumentTextIcon,
  Cog6ToothIcon,
} from "react-native-heroicons/solid";

export default function homeButton({
  icon,
  text,
  primaryColor,
  secondaryColor,
  navigateTo,
  navigation
}) {
  const iconFunc = () => {
    if (icon == "users")
      return (
        <UsersIcon height={20} width={20} color={primaryColor}></UsersIcon>
      );
    else if (icon == "document")
      return (
        <DocumentTextIcon
          height={20}
          width={20}
          color={primaryColor}
        ></DocumentTextIcon>
      );
    else if (icon == "settings")
      return (
        <Cog6ToothIcon
          height={20}
          width={20}
          color={primaryColor}
        ></Cog6ToothIcon>
      );
  };

  return (
    <TouchableOpacity
      style={{
        width: "84%",
        height: 56,
        borderRadius: 12,
        backgroundColor: secondaryColor,
        marginTop: 12,
        marginHorizontal: "16%",
        paddingHorizontal: 32,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
      }}
      onPress={() => navigation.navigate(navigateTo)}
    >
      {iconFunc()}
      <Text
        style={{
          alignSelf: "center",
          color: primaryColor,
          fontWeight: "500",
          fontSize: 16,
        }}
      >
        {text}
      </Text>
      <ArrowRightIcon
        height={20}
        width={20}
        color={primaryColor}
      ></ArrowRightIcon>
    </TouchableOpacity>
  );
}
