import { StyleSheet } from "react-native";

const InventoryCss = StyleSheet.create({
  StatusText: {
    color: COLORS.primary,
    fontWeight: 900,
    fontSize: 20,
    marginBottom: 15,
  },
  tabView: {
    backgroundColor: COLORS.ActivityBlock,
    borderRadius: 10,
    marginBottom: 15,
  },
  ViewRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 10,
    paddingLeft: 10,
  },
  txt1: {
    color: "white",
    padding: 12,
    fontWeight: 500,
    fontSize: 16,
    width: 230,
    borderColor: "white",
    borderRightWidth: 1,
    borderBottomWidth: 1,
    marginTop: 10,
  },
  txt2: {
    color: "white",
    padding: 12,
    fontWeight: 500,
    fontSize: 16,
    width: 120,
    borderColor: "white",
    borderBottomWidth: 1,
    marginTop: 10,
  },
  txt3: {
    color: "white",
    padding: 12,
    fontWeight: 500,
    fontSize: 16,
    width: 230,
    borderColor: "white",
    borderRightWidth: 1,
    marginBottom: 10,
  },
  txt4: {
    color: "white",
    padding: 12,
    fontWeight: 500,
    fontSize: 16,
    borderColor: "white",
    marginBottom: 10,
  },
  toggleBtn: {
    marginTop: 5,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "center",
    borderColor: COLORS.ActivityBlock,
    borderWidth: 1,
    borderRadius: 10,
    overflow: "hidden",
  },
  selected: {
    backgroundColor: COLORS.ActivityBlock,
    textAlign: "center",
    fontWeight: 500,
    paddingTop: 10,
    paddingBottom: 10,
    width: "25%",
    color: "white",
  },

  All: {
    color: COLORS.primary,
    textAlign: "center",
    fontWeight: 500,
    paddingTop: 10,
    paddingBottom: 10,
    width: "25%",
    borderRightWidth: 1,
    borderRightColor: COLORS.ActivityBlock,
  },
  Shipped: {
    color: "#216445",
    textAlign: "center",
    fontWeight: 500,
    paddingTop: 10,
    paddingBottom: 10,
    width: "25%",
    borderRightWidth: 1,
    borderRightColor: COLORS.ActivityBlock,
  },
  Cancelled: {
    color: "#882830",
    textAlign: "center",
    fontWeight: 500,
    paddingTop: 10,
    paddingBottom: 10,
    width: "25%",
    borderRightWidth: 1,
    borderRightColor: COLORS.ActivityBlock,
  },
  On: {
    color: "#8f9d4b",
    textAlign: "center",
    fontWeight: 500,
    paddingTop: 10,
    paddingBottom: 10,
    width: "25%",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    paddingVertical: 10,
  },
  headerCell: {
    fontWeight: "bold",
    flex: 1,
  },
  tableCell: {
    flex: 1,
  },
});

export default InventoryCss;