import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// style
import EditProfileCss from "./Css/EditProfileCss";

// state
import AuthContext from "./../../../store/auth-context";

// axios
import axios from "axios";

const EditProfile = (props) => {
  const [StoreName, setStoreName] = useState("");
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Nature, setNature] = useState("");
  const [showError, setError] = useState("");

  const { userInfo, AddStore } = useContext(AuthContext);

  const navigation = useNavigation();

  useEffect(() => {
    setName(userInfo.name);
    setEmail(userInfo.email);
    setNature(userInfo.CompanyNature);
    setStoreName(props.route.params.StoreName);
  }, []);

  const saveData = async () => {
    let data = {
      SellerID: userInfo._id,
      StoreID: AddStore,
      Name: Name,
      Email: Email,
      StoreName: StoreName,
      Nature: Nature,
    };

    console.log(data);

    try {
      const res = await axios.post(
        `http://192.168.43.29:8000/api/App/Profile/UpdateProfile`,
        data
      );

      if (res.data.status === true) {
        setError("");
        console.log("res.data");
        console.log(res.data);

        navigation.navigate("ProfileMain");
      }
    } catch (error) {
      console.log(error);
      setError("Error: An Unexpected Error Happened");
    }
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={EditProfileCss.EPHeaderView}>
        <Text style={EditProfileCss.EditProfile}>Edit Profile</Text>
      </View>

      <View style={EditProfileCss.ViewInp}>
        <Text style={EditProfileCss.SNText}>Store Name</Text>
        <TextInput
          style={EditProfileCss.inpNumber}
          placeholder="ABC Store"
          value={StoreName}
          onChangeText={(txt) => {
            setStoreName(txt);
          }}
        />
      </View>

      <View style={EditProfileCss.ViewInp}>
        <Text style={EditProfileCss.SNText}>Name</Text>
        <TextInput
          style={EditProfileCss.inpNumber}
          placeholder="Name"
          value={Name}
          onChangeText={(txt) => {
            setName(txt);
          }}
        />
      </View>

      <View style={EditProfileCss.ViewInp}>
        <Text style={EditProfileCss.SNText}>Email</Text>
        <TextInput
          style={EditProfileCss.inpNumber}
          placeholder="example@email.com"
          value={Email}
          onChangeText={(txt) => {
            setEmail(txt);
          }}
        />
      </View>

      <View style={EditProfileCss.ViewInp}>
        <Text style={EditProfileCss.SNText}>Nature of the company</Text>
        <TextInput
          style={EditProfileCss.inpNumber}
          placeholder="Retailer"
          value={Nature}
          onChangeText={(txt) => {
            setNature(txt);
          }}
        />
      </View>

      <Text style={EditProfileCss.errorMsg}>
        {showError.length > 0 ? showError : ""}
      </Text>

      <View style={EditProfileCss.mDIV}>
        <TouchableOpacity onPress={saveData}>
          <Text style={EditProfileCss.mDIVSave}>Save</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default EditProfile;
