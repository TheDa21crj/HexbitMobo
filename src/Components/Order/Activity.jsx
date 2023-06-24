import React from "react";
import { View, Text } from "react-native";

// style
import ActivityCss from "./Css/ActivityCss";

const Activity = (props) => {
  return (
    <View
      style={[
        ActivityCss.ActivityBlock,
        props.num == 1 ? ActivityCss.num1 : "",
        props.num == 2 ? ActivityCss.num2 : "",
        props.num == 3 ? ActivityCss.num3 : "",
        props.num == 4 ? ActivityCss.num4 : "",
      ]}
    >
      <Text style={ActivityCss.amtText}>{props.amt}</Text>
      <Text style={ActivityCss.statusText}>{props.status}</Text>
    </View>
  );
};

export default Activity;
