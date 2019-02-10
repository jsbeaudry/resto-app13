import React, { Component } from "react";

import {
  Text,
  StatusBar,
  Platform,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
  Dimensions,
  FlatList
} from "react-native";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
import Star from "react-native-star-view";
import Swiper from "react-native-swiper";
const { width } = Dimensions.get("window");

const styles = {
  wrapper: { height: 330 },

  slide: {
    height: 180,
    marginTop: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "#333"
  },
  image: {
    borderRadius: 10,

    width: width - 30,
    flex: 1,
    backgroundColor: "#333"
  },

  loadingView: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    right: 0,
    borderRadius: 10,
    top: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,.2)"
  },

  loadingImage: {
    width: 60,
    height: 60
  }
};

const Slide = props => {
  return (
    <View style={styles.slide}>
      <Image
        onLoad={props.loadHandle.bind(null, props.i)}
        style={styles.image}
        source={props.image}
      />
      {!props.loaded && (
        <View style={styles.loadingView}>
          <Image
            style={styles.loadingImage}
            source={{
              uri: "https://ubisafe.org/images/gif-transparent-loading-4.gif"
            }}
          />
        </View>
      )}
    </View>
  );
};

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgList: [
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
          name: "Prestige, Guiness, Heineken"
        },
        {
          key: 4,
          image: require("./lambi.jpg"),
          price: 250,
          name: "Lambi créole"
        }
      ],
      loadQueue: [0, 0, 0, 0]
    };
    this.loadHandle = this.loadHandle.bind(this);
  }
  loadHandle(i) {
    let loadQueue = this.state.loadQueue;
    loadQueue[i] = 1;
    this.setState({
      loadQueue
    });
  }
  render() {
    return (
      <ScrollView style={{ marginBottom: 20 }}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Text
          style={{
            color: "#3b3b3b",
            fontFamily: Platform.OS == "ios" ? "Helvetica" : "Roboto",
            fontSize: 20,
            fontWeight: "700",
            marginTop: 20,
            marginLeft: 20
          }}
        >
          Recommended
        </Text>
        <Text
          style={{
            color: "#a9a9b0",
            fontFamily: Platform.OS == "ios" ? "Helvetica" : "Roboto",
            fontSize: 10,
            fontWeight: "700",
            marginLeft: 20
          }}
        >
          Based on your purchase history
        </Text>
        <View style={{ height: 470, marginTop: 5 }}>
          <Swiper
            loadMinimal
            loadMinimalSize={1}
            style={styles.wrapper}
            loop={false}
          >
            {this.state.imgList.map((item, i) => (
              <View key={item}>
                <Slide
                  loadHandle={this.loadHandle}
                  loaded={!!this.state.loadQueue[i]}
                  image={item.image}
                  i={i}
                  key={item}
                />
                <Text
                  style={{
                    marginTop: 20,
                    height: 26,
                    marginLeft: 15,
                    textAlign: "left",
                    color: "#3b3b3b",
                    fontFamily: Platform.OS == "ios" ? "Helvetica" : "Roboto",
                    fontSize: 20
                  }}
                >
                  {item.name}
                </Text>
                <Star
                  score={3}
                  style={{
                    width: 100,
                    marginTop: 5,
                    height: 20,
                    marginLeft: 15,
                    marginBottom: 0
                  }}
                />
                <View
                  style={{
                    width: screenWidth,
                    marginLeft: 0,
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
                        fontFamily:
                          Platform.OS == "ios" ? "Helvetica" : "Roboto",
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
                        fontFamily:
                          Platform.OS == "ios" ? "Helvetica" : "Roboto",
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
                        fontFamily:
                          Platform.OS == "ios" ? "Helvetica" : "Roboto",
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
                        fontFamily:
                          Platform.OS == "ios" ? "Helvetica" : "Roboto",
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
                        fontFamily:
                          Platform.OS == "ios" ? "Helvetica" : "Roboto",
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
                        fontFamily:
                          Platform.OS == "ios" ? "Helvetica" : "Roboto",
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
                    marginLeft: 0,
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
                        fontFamily:
                          Platform.OS == "ios" ? "Helvetica" : "Roboto",
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
                        fontFamily:
                          Platform.OS == "ios" ? "Helvetica" : "Roboto",
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
                        fontFamily:
                          Platform.OS == "ios" ? "Helvetica" : "Roboto",
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
                        fontFamily:
                          Platform.OS == "ios" ? "Helvetica" : "Roboto",
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
                        fontFamily:
                          Platform.OS == "ios" ? "Helvetica" : "Roboto",
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
                        fontFamily:
                          Platform.OS == "ios" ? "Helvetica" : "Roboto",
                        fontSize: 10,
                        textAlign: "right",
                        fontWeight: "600"
                      }}
                    >
                      45HTG
                    </Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  onPress={() => {}}
                  style={{
                    marginTop: 20,
                    width: 215,
                    height: 40,
                    borderRadius: 8,
                    backgroundColor: "#f34949",
                    alignSelf: "center",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontFamily: Platform.OS == "ios" ? "Helvetica" : "Roboto",
                      fontSize: 12,
                      fontWeight: "600"
                    }}
                  >
                    Add to cart
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </Swiper>
        </View>
        <Text
          style={{
            color: "#3b3b3b",
            fontFamily: Platform.OS == "ios" ? "Helvetica" : "Roboto",
            fontSize: 20,
            fontWeight: "700",
            marginTop: 20,
            marginLeft: 20
          }}
        >
          Menu
        </Text>
        <Text
          style={{
            color: "#a9a9b0",
            fontFamily: Platform.OS == "ios" ? "Helvetica" : "Roboto",
            fontSize: 10,
            fontWeight: "700",
            marginLeft: 20,
            marginBottom: 10
          }}
        >
          What’s on our menu
        </Text>
        <FlatList
          style={{
            backgroundColor: "#fff",
            alignSelf: "center"
          }}
          numColumns={2}
          keyExtractor={(item, index) => item.key + index.toString()}
          showsVerticalScrollIndicator={false}
          data={this.state.imgList}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Details", { item: item });
              }}
            >
              <ImageBackground
                source={item.image}
                resizeMode="cover"
                borderRadius={8}
                style={{
                  width: (screenWidth - 40) / 2,
                  margin: 3,
                  borderRadius: 15,
                  height: (screenWidth - 40) / 2,
                  flexDirection: "column"
                }}
              >
                <View
                  style={{
                    width: (screenWidth - 40) / 2,
                    height: (screenWidth - 40) / 2,
                    borderRadius: 8,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(0,0,0,0.6)"
                  }}
                >
                  {/*<Text
                    style={{
                      color: "#fff",
                      fontWeight: "bold",
                      fontSize: 17
                    }}
                  >
                    {item.price} HTG
                  </Text>*/}
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 15,
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
      </ScrollView>
    );
  }
}
