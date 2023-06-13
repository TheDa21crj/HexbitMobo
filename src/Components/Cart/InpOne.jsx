import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

// style
import InpOneCss from "./Css/InpOneCss";

const InpOne = (props) => {
  const [stName, setstName] = useState("");
  const [stType, setstType] = useState("");
  const [stLocation, setstLocation] = useState("");
  const [stWebsite, setstWebsite] = useState("");
  const [showError, setError] = useState("");

  const navigation = useNavigation();

  const handleButtonPress = async () => {
    if (
      stName.length > 0 &&
      stType.length > 0 &&
      stLocation.length > 0 &&
      stWebsite.length > 0
    ) {
      console.log(stName, stType, stLocation, stWebsite);

      let data = {
        StoreName: stName,
        StoreType: stType,
        Location: stLocation,
        Website: stWebsite,
      };

      navigation.navigate("InpTwo");
    } else {
      console.log("fill");
      setError("Please Enter A Valid Number");
    }
  };
  return (
    <View style={InpOneCss.imp1View}>
      <Text style={InpOneCss.StoreName}>Store Name</Text>
      <TextInput
        style={InpOneCss.inpNumber}
        placeholder="ABC Store"
        onChangeText={(txt) => {
          setstName(txt);
        }}
      />

      <Text style={InpOneCss.StoreName}>Store Type</Text>
      <TextInput
        style={InpOneCss.inpNumber}
        placeholder="Select Store type"
        onChangeText={(txt) => {
          setstType(txt);
        }}
      />

      <Text style={InpOneCss.StoreName}>Location</Text>
      <TextInput
        style={InpOneCss.inpNumber}
        placeholder="Delhi, India"
        onChangeText={(txt) => {
          setstLocation(txt);
        }}
      />

      <Text style={InpOneCss.StoreName}>Website</Text>
      <TextInput
        style={InpOneCss.inpNumber}
        placeholder="https://www.abcstore.com"
        onChangeText={(txt) => {
          setstWebsite(txt);
        }}
      />

      <View style={InpOneCss.btnView}>
        <TouchableOpacity
          style={InpOneCss.btnNext}
          onPress={
            handleButtonPress
            // navigation.navigate("InpTwo");
          }
        >
          <Text style={InpOneCss.Next}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InpOne;
