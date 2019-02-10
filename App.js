import React from "react";
import { View, Text, Platform } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./Home";
import Explore from "./explore";
import Details from "./details";
import Signin from "./signin";
import Signup from "./signup";
import Maps from "./map";
import { Ionicons } from "@expo/vector-icons";
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: "",
      header: null,
      gesturesEnabled: false
    })
  },
  Signin: {
    screen: Signin,
    navigationOptions: ({ navigation }) => ({
      title: "",
      header: null,
      gesturesEnabled: false
    })
  },
  Signup: {
    screen: Signup,
    navigationOptions: ({ navigation }) => ({
      title: "",
      header: null,
      gesturesEnabled: false
    })
  },
  Details: {
    screen: Details,
    navigationOptions: ({ navigation }) => ({
      title: "",

      headerLeft: (
        <Ionicons
          style={{ marginLeft: 10 }}
          name={Platform.OS == "ios" ? "ios-arrow-back" : "md-arrow-back"}
          onPress={() => {
            navigation.goBack();
          }}
          size={32}
          color="#fff"
        />
      ),

      headerRight: (
        <View style={{ flexDirection: "row" }}>
          <Ionicons
            name="ios-person"
            style={{ marginRight: 10 }}
            size={32}
            color="#eee"
          />
          <Ionicons
            name="md-locate"
            style={{ marginRight: 10 }}
            size={32}
            color="#fff"
            onPress={() => {
              navigation.navigate("Maps");
            }}
          />
        </View>
      ),
      headerTitleStyle: {
        fontWeight: "bold",
        color: "#fff"
      },
      headerStyle: {
        backgroundColor: "rgba(0,0,0,0.2)",
        elevation: 0
      },
      gesturesEnabled: false
    })
  },
  Explore: {
    screen: Explore,
    navigationOptions: ({ navigation }) => ({
      title: "",
      headerLeft: (
        <Ionicons
          style={{ marginLeft: 10 }}
          name={Platform.OS == "ios" ? "ios-arrow-back" : "md-arrow-back"}
          onPress={() => {
            navigation.goBack();
          }}
          size={32}
          color="#fff"
        />
      ),

      headerRight: (
        <Ionicons
          name="ios-person"
          style={{ marginRight: 10 }}
          size={32}
          color="#fff"
        />
      ),
      headerTitleStyle: {
        fontWeight: "bold",
        color: "#fff"
      },
      headerStyle: {
        backgroundColor: "#f34949"
      },
      gesturesEnabled: false
    })
  },
  Maps: {
    screen: Maps,
    navigationOptions: ({ navigation }) => ({
      title: "",
      headerLeft: (
        <Ionicons
          style={{ marginLeft: 10 }}
          name={Platform.OS == "ios" ? "ios-arrow-back" : "md-arrow-back"}
          onPress={() => {
            navigation.goBack();
          }}
          size={32}
          color="#fff"
        />
      ),

      headerRight: (
        <Ionicons
          name="ios-person"
          style={{ marginRight: 10 }}
          size={32}
          color="#fff"
        />
      ),
      headerTitleStyle: {
        fontWeight: "bold",
        color: "#fff"
      },
      headerStyle: {
        backgroundColor: "#f34949"
      },
      gesturesEnabled: false
    })
  }
});

export default createAppContainer(AppNavigator);
