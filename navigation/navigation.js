import React, { useEffect, useState } from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from '../screens/Login'
import Signup from '../screens/Signup'
import Welcome from '../screens/Welcome'
import Home from '../screens/Home'
import Settings from '../screens/Settings'
import Personality from '../screens/Personality'
import WishList from '../screens/WishList'
import WorkToday from '../screens/WorkToday'

import auth from "@react-native-firebase/auth";

const Stack = createStackNavigator();

export default function navigation() {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

   // Handle user state changes
   function onAuthStateChanged(user) {
    console.log("auth state changed " + user);
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    console.log("user is null");
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Welcome" component={Welcome} />

        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    console.log("user is something");
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Personality" component={Personality} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="WorkToday" component={WorkToday} />
          <Stack.Screen name="WishList" component={WishList} />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}