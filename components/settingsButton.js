import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ChevronRightIcon } from 'react-native-heroicons/solid'

export default function settingsButton({text, navigation, route}) {

  const handler = () => {
    if(route == 'personality')
      navigation.navigate('Personality')
    else if(route == 'language') {
      // route to language screen
    }
    else {
      // route to language screen
    }
  }

  return (
    <TouchableOpacity
          style={{
            width: '95%',
            height: 64,
            backgroundColor: '#F9F9F9',
            borderRadius: 16,
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor:'#999',
            shadowOffset:{height:1,width:1},
            shadowOpacity:1,
            shadowRadius:1,
            elevation:10,
            margin:8,
            flexDirection:'row',
            paddingHorizontal:32
          }}
          activeOpacity={0.1}
          onPress={handler}
        >
          <Text style={{color:'#757982', flexGrow:1, textAlign:'center', fontWeight:'400'}}>{text}</Text>
          <ChevronRightIcon
            width={16}
            height={16}
            color={"black"}
          ></ChevronRightIcon>
        </TouchableOpacity>
  )
}