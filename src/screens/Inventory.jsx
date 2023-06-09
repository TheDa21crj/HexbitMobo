import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";

// components
import Header from "./../Components/Header";
import Sales from "./../Components/Order/Sales";
import InventoryC from "./../Components/Order/Inventory";
import Filter from "./Filter";

// theme
import { COLORS } from "../constants/theme";

// style
import InventoryCss from "../Components/Order/Css/InventoryCss";

const Inventory = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={InventoryCss.mDiv}>
        <View style={InventoryCss.HeaderView}>
          <Header pageName="Orders" />
          <Sales />
          <Filter />
        </View>

        <View style={InventoryCss.InventoryC}>
          <InventoryC />
        </View>
      </View>
    </ScrollView>
  );
};

export default Inventory;
