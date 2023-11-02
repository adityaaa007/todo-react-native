import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function button(props) {
  return (
    <TouchableOpacity
        style={{
          width: "100%",
          height: 56,
          borderRadius: 12,
          backgroundColor: props.color,
          marginTop: props.marginTop,
          justifyContent: "center",
        }}
        onPress={props.handler}
      >
        <Text
          style={{
            alignSelf: "center",
            color: props.textColor,
            fontWeight: "500",
            fontSize: 16,
          }}
        >
          {props.text}
        </Text>
      </TouchableOpacity>
  )
}