import React from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  View,
  Image
} from "react-native";
import { createStackNavigator } from "react-navigation";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <View style={{ flex: 1 }}>
          <Image
            source={require("./assets/logo.png")}
            style={{ width: 200, height: 100, marginTop: 200 }}
          />
        </View>
        <View style={{ flex: 1 }}>
          <View
            style={{
              width: 300,

              marginTop: 20,
              borderRadius: 10,
              alignItems: "flex-start",
              justifyContent: "center"
            }}
          >
            <Text style={{ color: "#888" }}>Email</Text>
            <TextInput
              style={{
                height: 40,
                width: 300,
                borderBottomWidth: 1,
                borderColor: "#888"
              }}
              placeholder="john@gmail.com"
              onChangeText={text => this.setState({ text })}
            />
          </View>
          <View
            style={{
              width: 300,

              marginTop: 20,
              borderRadius: 10,
              alignItems: "flex-start",
              justifyContent: "center"
            }}
          >
            <Text style={{ color: "#888" }}>Password</Text>
            <TextInput
              style={{
                height: 40,
                width: 300,
                borderBottomWidth: 1,
                borderColor: "#888"
              }}
              placeholder="************"
              onChangeText={text => this.setState({ text })}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Explore");
            }}
            style={{
              width: 300,
              height: 50,

              marginTop: 30,
              borderRadius: 10,
              backgroundColor: "#f14336",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text style={{ color: "#fff" }}>Signin</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 100,
            backgroundColor: "transparent",
            justifyContent: "flex-end"
          }}
        >
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Signup");
            }}
          >
            <Text style={{ marginBottom: 80 }}>
              Don't have an account. Signup
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
