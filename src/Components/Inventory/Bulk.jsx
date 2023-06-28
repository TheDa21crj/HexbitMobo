import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";

// style
import BulkCss from "../Inventory/Css/BulkCss";

// document-picker
import * as DocumentPicker from "expo-document-picker";

// img
import img from "./../../../assets/Inventory/bulk.png";

const Bulk = () => {
  const navigation = useNavigation();

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync();
      if (result.type === "success") {
        console.log("result");
        console.log(result);

        console.log("File selected:", result.uri);
        // Process the selected document here
      }
    } catch (error) {
      console.log("Error picking document:", error);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <View style={BulkCss.imgVIew}>
          <Image source={img} style={BulkCss.img}></Image>
        </View>
        <Text style={BulkCss.UploadFile}>Upload Your File</Text>
        <Text style={BulkCss.FileDesText}>
          Upload XL Sheet, JSON, XML files only
        </Text>

        <View style={BulkCss.btnRowDiv}>
          <TouchableOpacity onPress={pickDocument}>
            <Text style={BulkCss.Browse}>Browse Files</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("InventoryScreen");
            }}
          >
            <Text style={BulkCss.Submit}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Bulk;
