import React from "react";
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  TextInput,
  StatusBar,
  ScrollView,
  SafeAreaView,
  RefreshControl,
  Text,
  View,
  Image,
  Platform
} from "react-native";
import { createStackNavigator } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import Star from "react-native-star-view";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      refreshing: false,
      item: this.props.navigation.getParam("item", {})
    };
  }

  _onRefresh = () => {
    this.setState({ refreshing: true });
    setTimeout(() => {
      this.setState({ refreshing: false });
    }, 3000);
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "flex-start",
          marginTop: -100,
          borderBottomLeftRadius: 20
        }}
      >
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Image
          source={this.state.item.image}
          resizeMode="cover"
          style={{
            width: screenWidth,
            height: 300,
            borderRadius: 8
          }}
        />

        <View
          style={{
            flex: 1,
            backgroundColor: "#fff"
          }}
        >
          <ScrollView style={{ zIndex: 0, backgroundColor: "#fff" }}>
            <View
              style={{
                width: screenWidth,
                flex: 1,
                marginRight: 20,
                marginLeft: 5,
                marginTop: 0,
                alignSelf: "center",
                borderRadius: 5,
                backgroundColor: "#fff",
                padding: 20
              }}
            >
              <Text
                style={{
                  marginTop: 0,
                  height: 26,
                  marginLeft: 0,
                  textAlign: "left",
                  color: "#3b3b3b",
                  fontFamily: Platform.OS == "ios" ? "Helvetica" : "Roboto",
                  fontSize: 20
                }}
              >
                {this.state.item.name}
              </Text>
              <Star
                score={3}
                style={{
                  width: 100,
                  marginTop: 10,
                  height: 20,
                  marginLeft: 0,
                  marginBottom: 20
                }}
              />
              <View
                style={{
                  width: screenWidth,
                  marginLeft: 10,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignSelf: "center"
                }}
              >
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    margin: 10,
                    width: 100,
                    height: 30,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 3,
                    borderColor: "#f34949",
                    borderStyle: "solid",
                    borderWidth: 1,
                    backgroundColor: "#ffffff"
                  }}
                >
                  <Text
                    style={{
                      fontFamily: Platform.OS == "ios" ? "Helvetica" : "Roboto",
                      textAlign: "left",
                      marginRight: 10,
                      color: "#f34949",
                      fontSize: 10,
                      fontWeight: "500"
                    }}
                  >
                    Large
                  </Text>

                  <Text
                    style={{
                      color: "#000",
                      fontFamily: Platform.OS == "ios" ? "Helvetica" : "Roboto",
                      fontSize: 10,
                      textAlign: "right",
                      fontWeight: "600"
                    }}
                  >
                    1000HTG
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    margin: 10,
                    width: 100,
                    height: 30,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 3,
                    borderColor: "#f34949",
                    borderStyle: "solid",
                    borderWidth: 1,
                    backgroundColor: "#ffffff"
                  }}
                >
                  <Text
                    style={{
                      fontFamily: Platform.OS == "ios" ? "Helvetica" : "Roboto",
                      textAlign: "left",
                      marginRight: 10,
                      color: "#f34949",
                      fontSize: 10,
                      fontWeight: "500"
                    }}
                  >
                    Medium
                  </Text>
                  <Text
                    style={{
                      color: "#000",
                      fontFamily: Platform.OS == "ios" ? "Helvetica" : "Roboto",
                      fontSize: 10,
                      textAlign: "right",
                      fontWeight: "600"
                    }}
                  >
                    750HTG
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    margin: 10,
                    width: 100,
                    height: 30,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 3,
                    borderColor: "#f34949",
                    borderStyle: "solid",
                    borderWidth: 1,
                    backgroundColor: "#ffffff"
                  }}
                >
                  <Text
                    style={{
                      fontFamily: Platform.OS == "ios" ? "Helvetica" : "Roboto",
                      textAlign: "left",
                      marginRight: 10,
                      color: "#f34949",
                      fontSize: 10,
                      fontWeight: "500"
                    }}
                  >
                    Small
                  </Text>
                  <Text
                    style={{
                      color: "#000",
                      fontFamily: Platform.OS == "ios" ? "Helvetica" : "Roboto",
                      fontSize: 10,
                      textAlign: "right",
                      fontWeight: "600"
                    }}
                  >
                    450HTG
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  width: screenWidth,
                  marginLeft: 10,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignSelf: "center"
                }}
              >
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    margin: 10,
                    width: 100,
                    height: 30,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 3,
                    borderColor: "#1e60a8",
                    borderStyle: "solid",
                    borderWidth: 1,
                    backgroundColor: "#ffffff"
                  }}
                >
                  <Text
                    style={{
                      fontFamily: Platform.OS == "ios" ? "Helvetica" : "Roboto",
                      textAlign: "left",
                      marginRight: 10,
                      color: "#1e60a8",
                      fontSize: 10,
                      fontWeight: "500"
                    }}
                  >
                    Opt 1
                  </Text>

                  <Text
                    style={{
                      color: "#000",
                      fontFamily: Platform.OS == "ios" ? "Helvetica" : "Roboto",
                      fontSize: 10,
                      textAlign: "right",
                      fontWeight: "600"
                    }}
                  >
                    50HTG
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    margin: 10,
                    width: 100,
                    height: 30,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 3,
                    borderColor: "#1e60a8",
                    borderStyle: "solid",
                    borderWidth: 1,
                    backgroundColor: "#ffffff"
                  }}
                >
                  <Text
                    style={{
                      fontFamily: Platform.OS == "ios" ? "Helvetica" : "Roboto",
                      textAlign: "left",
                      marginRight: 10,
                      color: "#1e60a8",
                      fontSize: 10,
                      fontWeight: "500"
                    }}
                  >
                    Opt2
                  </Text>
                  <Text
                    style={{
                      color: "#000",
                      fontFamily: Platform.OS == "ios" ? "Helvetica" : "Roboto",
                      fontSize: 10,
                      textAlign: "right",
                      fontWeight: "600"
                    }}
                  >
                    75HTG
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    margin: 10,
                    width: 100,
                    height: 30,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 3,
                    borderColor: "#1e60a8",
                    borderStyle: "solid",
                    borderWidth: 1,
                    backgroundColor: "#ffffff"
                  }}
                >
                  <Text
                    style={{
                      fontFamily: Platform.OS == "ios" ? "Helvetica" : "Roboto",
                      textAlign: "left",
                      marginRight: 10,
                      color: "#1e60a8",
                      fontSize: 10,
                      fontWeight: "500"
                    }}
                  >
                    Opt3
                  </Text>
                  <Text
                    style={{
                      color: "#000",
                      fontFamily: Platform.OS == "ios" ? "Helvetica" : "Roboto",
                      fontSize: 10,
                      textAlign: "right",
                      fontWeight: "600"
                    }}
                  >
                    45HTG
                  </Text>
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  textAlign: "justify",
                  color: "#a9a9b0",
                  fontFamily: Platform.OS == "ios" ? "Helvetica" : "Roboto",
                  fontSize: 12,
                  fontWeight: "400",
                  lineHeight: 22
                }}
              >
                {
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                }
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: "#333",
                  fontWeight: "bold",
                  marginTop: 20
                }}
              >
                Relative
              </Text>
              <FlatList
                refreshControl={
                  <RefreshControl
                    refreshing={this.state.refreshing}
                    onRefresh={this._onRefresh.bind(this)}
                  />
                }
                style={{}}
                numColumns={3}
                keyExtractor={(item, index) => item.key + index.toString()}
                showsVerticalScrollIndicator={false}
                data={[
                  {
                    key: 1,
                    image: require("./burger.png"),
                    price: 250,
                    name: "Burger + Frites + Prestige"
                  },
                  {
                    key: 2,
                    image: require("./griot3.jpg"),
                    price: 250,
                    name: "Banane + Viande "
                  },
                  {
                    key: 3,
                    image: require("./biere.png"),
                    price: 250,
                    name: "Prestige + Guiness + Heineken"
                  },
                  {
                    key: 4,
                    image: require("./lambi.jpg"),
                    price: 250,
                    name: "Lambi créole"
                  }
                ]}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({ item: item });
                    }}
                  >
                    <ImageBackground
                      source={item.image}
                      resizeMode="cover"
                      borderRadius={8}
                      style={{
                        width: screenWidth / 3 - 20,
                        margin: 3,
                        borderRadius: 15,
                        height: screenWidth / 3 - 20,
                        flexDirection: "column"
                      }}
                    >
                      <View
                        style={{
                          width: screenWidth / 3 - 20,
                          height: screenWidth / 3 - 20,
                          borderRadius: 8,
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "rgba(0,0,0,0.5)"
                        }}
                      >
                        <Text
                          style={{
                            color: "#fff",
                            fontWeight: "bold",
                            fontSize: 17
                          }}
                        >
                          {item.price} HTG
                        </Text>
                        <Text
                          style={{
                            color: "#fff",
                            fontSize: 13,
                            textAlign: "center",
                            margin: 20
                          }}
                        >
                          {item.name}
                        </Text>
                      </View>
                    </ImageBackground>
                  </TouchableOpacity>
                )}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
