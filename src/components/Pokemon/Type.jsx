import React from "react";
import { map, capitalize } from "lodash";
import { View, Text, StyleSheet } from "react-native";
import getColorByPokemonType from "../../utils/getColorByPokemonType";

export default function Type(props) {
  const { types } = props;

  return (
    <View style={Styles.content}>
      {map(types, (item, index) => (
        <View key={index} style={{...Styles.pill, backgroundColor: getColorByPokemonType(item.type.name)}}>
          <Text>{capitalize(item.type.name)}</Text>
        </View>
      ))}
    </View>
  );
}

const Styles = StyleSheet.create({
  content: {
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  pill:{
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10,
  },
});
