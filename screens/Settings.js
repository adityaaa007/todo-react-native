import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { ArrowLeftCircleIcon, ArrowSmallDownIcon } from "react-native-heroicons/outline";
import SettingsButton from "../components/settingsButton";
import auth from "@react-native-firebase/auth";

export default function Settings({navigation}) {

  const logOut = async () => {
    await auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  }

  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        padding: '5%',
        paddingTop: 36,
        paddingBottom: 0,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
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
            fontWeight: "700",
            fontSize: 28,
            marginTop:64
          }}
        >
          Settings
        </Text>
        <Text
          style={{
            fontWeight: "400",
            fontSize: 14,
            marginTop: 8,
            color: "#A4A6B2",
            paddingRight: "10%",
            lineHeight: 22,
            marginBottom:32
          }}
        >
          You can modify all your settings
        </Text>
        <SettingsButton text='Personality' navigation={navigation} route='personality'></SettingsButton>
        <SettingsButton text='Language' navigation={navigation} route='language'></SettingsButton>
        <SettingsButton text='Terms and Conditions' navigation={navigation} route='terms'></SettingsButton>

        <TouchableOpacity
          style={{
            width: '95%',
            height: 64,
            backgroundColor: '#FFF3F3',
            borderWidth:1.5,
            borderColor:'#FE7676',
            borderRadius: 12,
            justifyContent: 'center',
            alignItems: 'center',
            margin:8,
            flexDirection:'row',
            paddingHorizontal:32,
            marginTop:100
          }}
          activeOpacity={0.1}
          onPress={logOut}
        >
          <Text style={{color:'#FE7676', flexGrow:1, textAlign:'center', fontWeight:'600', fontSize:15}}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
