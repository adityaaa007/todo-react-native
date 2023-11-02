import { View, Text, Image } from "react-native";
import React from "react";
import HomeButton from "../components/homeButton";

export default function Home({navigation}) {
  return (
    <View
      style={{
        marginTop: 16,
        backgroundColor: "white",
        flex: 1,
        alignItems: "center",
      }}
    >
      <Image
        source={require("../assets/image-placeholder.png")}
        style={{ width: 150, height: 150, marginTop: 64 }}
      ></Image>
      <Text style={{ color: "#494D59", fontWeight: "bold", fontSize: 20 }}>
        Chintu
      </Text>
      <Text style={{ color: "#494D59", fontWeight: "300", fontSize: 18 }}>
        Pintu
      </Text>
      <Text
        style={{
          color: "#494D59",
          fontWeight: "500",
          fontSize: 14,
          marginTop: 16,
          marginBottom: 24,
        }}
      >
        Joined 6 months ago
      </Text>

      <HomeButton
        icon="users"
        text="Personality"
        primaryColor="#FC6B22"
        secondaryColor="#FFF7F4"
        navigateTo='Personality'
        navigation={navigation}
      ></HomeButton>
      <HomeButton
        icon="document"
        text="Work Today`s"
        primaryColor="#5935FB"
        secondaryColor="#F7F5FF"
        navigateTo='WorkToday'
        navigation={navigation}
      ></HomeButton>
      <HomeButton
        icon="settings"
        text="Setting"
        primaryColor="#20B9FC"
        secondaryColor="#F3FBFE"
        navigateTo='Settings'
        navigation={navigation}
      ></HomeButton>
    </View>
  );
}
