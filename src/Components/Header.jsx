import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { COLORS, SIZES } from "../constants/theme";

const Header = (props) => {
  return (
    <View>
      <Text style={HeaderCss.HeaderMDIv}>Hexbit.io</Text>
      <Text style={HeaderCss.pageName}>{props.pageName}</Text>
    </View>
  );
};

const HeaderCss = StyleSheet.create({
  HeaderMDIv: {
    color: COLORS.primary,
    fontWeight: 900,
    fontSize: 20,
  },
  pageName: {
    color: COLORS.primary,
    fontWeight: 900,
    fontSize: 40,
  },
});

export default Header;
