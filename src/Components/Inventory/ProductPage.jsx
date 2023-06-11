import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";

// style
import PPCss from "../Inventory/Css/ProductPageCss";

// img
import img from "./../../../assets/Cart/pod.png";

const ProductPage = () => {
  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={PPCss.headerDiv}>
        <Text style={PPCss.headerText}>Product Details</Text>
      </View>

      <View style={PPCss.AddImgView}>
        <Image source={img} style={PPCss.pimg}></Image>
      </View>

      <View style={PPCss.EditVIew}>
        <Text>Edit</Text>
      </View>
    </ScrollView>
  );
};

export default ProductPage;
