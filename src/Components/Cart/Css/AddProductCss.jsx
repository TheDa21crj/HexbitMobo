import { StyleSheet } from "react-native";

// theme
import { COLORS } from "../../../constants/theme";

const ADCss = StyleSheet.create({
  AddProductText: {
    marginVertical: 20,
    color: "#350B5E",
    textAlign: "center",
    fontSize: 24,
    fontWeight: 900,
  },
  AddImgView: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  AddImgBorder: {
    borderStyle: "dotted",
    borderWidth: 1.23,
    borderRadius: 18,
    padding: 10,
  },
  AddImgGrey: {
    backgroundColor: "#c9c9c9",
    borderRadius: 7.97,
    paddingVertical: 60,
    paddingHorizontal: 30,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  previewImg: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  plusCircle: {
    width: 25.18,
    height: 25.18,
    marginBottom: 14,
  },
  AddpodText: {
    color: "#3E3E3E",
    fontSize: 16,
    fontWeight: 600,
  },
  paddView: {
    paddingHorizontal: 30,
  },
  label: {
    color: "#454444",
    fontSize: 16,
    fontWeight: 600,
  },
  TextInputTag: {
    borderColor: "#7D629B",
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 8,
    paddingLeft: 12,
    marginVertical: 10,
  },
  rowInp: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 30,
  },
  w45Div: {
    width: "45%",
  },
  btnView: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 30,
  },
  btnNext: {
    paddingVertical: 11,
    backgroundColor: "#622AC3",
    width: 100,
    borderRadius: 10,
  },
  Next: {
    color: "#fff",
    fontWeight: 800,
    fontSize: 18,
    textAlign: "center",
  },
  btnDelete: {
    paddingVertical: 11,
    width: 100,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FF5D4F",
  },
  Delete: {
    color: "#FF6D60",
    fontWeight: 800,
    fontSize: 18,
    textAlign: "center",
  },
  errorMsg: {
    textAlign: "center",
    color: "#800000",
    marginTop: 15,
  },
});

export default ADCss;
