import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import DropDownPicker from "react-native-dropdown-picker";

// axios
import axios from "axios";

// style
import CompanyCss from "./Css/CompanyCss";

// env
import { REACT_NATIVE_BASE_URL } from "@env";

// Components
import Header from "../../Components/ONBOARDING/Header";
import Path from "../../Components/ONBOARDING/Path";

// theme
import { COLORS } from "../../constants/theme";

// img
import img from "./../../../assets/Login/company.png";

const Company = (props) => {
  const [showError, setError] = useState("");
  const [showName, setName] = useState("");
  const [showNature, setNature] = useState("");
  const [showType, setType] = useState("");

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Manufacturer ", value: "Manufacturer " },
    { label: "Trader", value: "Trader" },
    { label: "Retailer", value: "Retailer" },
    { label: "Importer", value: "Importer" },
  ]);

  const [open1, setOpen1] = useState(false);
  const [value1, setValue1] = useState(null);
  const [items1, setItems1] = useState([
    { label: "PVT", value: "PVT" },
    { label: "LTD", value: "LTD" },
    { label: "LLP", value: "LLP" },
    { label: "Other", value: "Other" },
  ]);

  const navigate = useNavigation();

  const handleButtonPress = async () => {
    if (showName.length > 0 && value !== null && value1 !== null) {
      console.log(showName, showNature, showType);

      let data = {
        WhatsAppNumber: props.route.params.WhatsAppNumber,
        name: showName,
        type: value,
        nature: value1,
      };

      try {
        const res = await axios.post(
          `http://192.168.43.29:8000/api/App/onborading/Company`,
          data
        );

        console.log(data);

        if (res.data.status === true) {
          setError("");
          console.log("res.data");
          console.log(res.data);

          console.log(data.WhatsAppNumber, "kkkkkkkkkkk");
          navigate.navigate("License", {
            WhatsAppNumber: `${data.WhatsAppNumber}`,
          });
        } else {
          setError("Error");
        }
      } catch (error) {
        console.log(error);
        setError("Error: An ");
      }
    } else {
      console.log("fill");
      setError("Please Enter A Valid Number");
    }
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={CompanyCss.mDIv}>
        <Header true={false} msg="Enter your Details" />
        <Path img={img} pos={3} />

        <Text style={CompanyCss.Enter}>Name of the company</Text>
        <TextInput
          style={CompanyCss.inpNumber}
          placeholder="Name"
          onChangeText={(txt) => {
            setName(txt);
          }}
        />

        <Text style={CompanyCss.Enter}>Nature of the company</Text>
        {/* <TextInput
          style={CompanyCss.inpNumber}
          placeholder="Select"
          onChangeText={(txt) => {
            setNature(txt);
          }}
        /> */}

        <DropDownPicker
          style={CompanyCss.inpNumber}
          open={open}
          value={value}
          items={items}
          placeholder="Select an option"
          setOpen={setOpen}
          // zIndex={10000}
          setValue={setValue}
          setItems={setItems}
        />

        <Text style={CompanyCss.Enter}>Type of company</Text>
        {/* <TextInput
          style={CompanyCss.inpNumber}
          placeholder="Select"
          onChangeText={(txt) => {
            setType(txt);
          }}
        /> */}

        <DropDownPicker
          style={CompanyCss.inpNumber}
          open={open1}
          value={value1}
          items={items1}
          placeholder="Select an option"
          setOpen={setOpen1}
          // zIndex={10000}
          setValue={setValue1}
          setItems={setItems1}
        />

        <Text style={CompanyCss.errorMsg}>
          {showError.length > 0 ? showError : ""}
        </Text>

        <LinearGradient
          start={{ x: 0, y: 0.75 }}
          end={{ x: 1, y: 0.25 }}
          colors={["#BB14E2", "#161FE4"]}
          style={CompanyCss.button}
        >
          <Text style={CompanyCss.SendOTP} onPress={handleButtonPress}>
            Next
          </Text>
        </LinearGradient>
      </View>
    </ScrollView>
  );
};

export default Company;
