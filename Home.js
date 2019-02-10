import React, { Component } from "react";
import {
  Text,
  View,
  Platform,
  TouchableOpacity,
  Image,
  Dimensions
} from "react-native";
import Swiper from "react-native-swiper";
const { width } = Dimensions.get("window");

const Slide = props => {
  return (
    <View style={styles.slide}>
      <Image
        onLoad={props.loadHandle.bind(null, props.i)}
        style={styles.image}
        source={require("./burger.png")}
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

const Section = props => {
  return (
    <View style={{ flexDirection: "row", width: 375 }}>
      <View style={{ flex: 10, flexDirection: "column" }}>
        <Text>op1</Text>
        <Text>op2</Text>
        <Text>op3</Text>
        <Text>op4</Text>
        <Text>op5</Text>
      </View>

      <View style={{ flex: 90 }}>
        {props.index == 1 ? (
          <Table
            header={["colonne1a", "colonne2b", "colonne3c"]}
            data={[
              { a1: "prod11", a2: "prod12", a3: "prod13" },
              { a1: "prod21", a2: "prod22", a3: "prod23" }
            ]}
          />
        ) : props.index == 2 ? (
          <Table
            header={["colonne1", "colonne2", "colonne3"]}
            data={[
              { a1: "prod11", a2: "prod12", a3: "prod13" },
              { a1: "prod21", a2: "prod22", a3: "prod23" }
            ]}
          />
        ) : props.index == 3 ? (
          <Text>3</Text>
        ) : props.index == 4 ? (
          <Text>4</Text>
        ) : (
          <Text>0</Text>
        )}
      </View>
    </View>
  );
};

const Table = props => {
  return (
    <View>
      <View
        style={{
          height: 30,
          width,
          backgroundColor: "#fff"
        }}
      >
        <View style={{ flex: 1, flexDirection: "row", marginBottom: 10 }}>
          {props.header.map(index => {
            return (
              <Text
                style={{
                  flex: 1,
                  height: 40,
                  marginBottom: 10,
                  backgroundColor: "#fff",
                  textAlign: "center",
                  borderColor: "#000",
                  borderWidth: 1,
                  alignSelf: "center"
                }}
              >
                {index}
              </Text>
            );
          })}
        </View>
        <View style={{ flex: 1, flexDirection: "column" }}>
          {props.data.map(index => {
            return (
              <View style={{ flexDirection: "row", height: 30 }}>
                <Text
                  style={{
                    flex: 1,
                    height: 30,
                    backgroundColor: "#fff",
                    textAlign: "center",
                    borderColor: "grey",
                    borderWidth: 1,
                    alignSelf: "center"
                  }}
                >
                  {index.a1}
                </Text>
                <Text
                  style={{
                    flex: 1,
                    height: 30,
                    backgroundColor: "#fff",
                    textAlign: "center",
                    borderColor: "grey",
                    borderWidth: 1,
                    alignSelf: "center"
                  }}
                >
                  {index.a2}
                </Text>
                <Text
                  style={{
                    flex: 1,
                    height: 30,
                    backgroundColor: "#fff",
                    textAlign: "center",
                    borderColor: "grey",
                    borderWidth: 1,
                    alignSelf: "center"
                  }}
                >
                  {index.a3}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
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
          image:
            "https://static.cuisineaz.com/680x357/i101450-10-aliments-originaux-que-l-on-peut-mettre-sur-une-pizza.jpg"
        },
        {
          key: 2,
          image: "http://www.kbc.co.ke/wp-content/uploads/2017/07/fast-food.jpg"
        },
        {
          key: 3,
          image:
            "https://i.kinja-img.com/gawker-media/image/upload/s--5y89NkRm--/c_scale,f_auto,fl_progressive,q_80,w_800/qobu5l5zd8jtimssrrvl.jpg"
        },
        {
          key: 4,
          image:
            "https://www.quotidianpost.it/wp-content/uploads/2018/03/fast-food.jpg"
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
      <View style={{ marginTop: 50 }}>
        {/*<Section index={1} />*/}

        <View style={{ height: 360, marginTop: 10 }}>
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
                  uri={item.image}
                  i={i}
                  key={item}
                />
                <Text
                  style={{
                    marginTop: 20,
                    height: 26,
                    textAlign: "center",
                    color: "#3b3b3b",
                    fontFamily: Platform.OS == "ios" ? "Helvetica" : "Roboto",
                    fontSize: 20
                  }}
                >
                  Soft & Crispy
                </Text>
                <Text
                  style={{
                    width: 335,
                    height: 54,
                    color: "#a9a9b0",
                    fontFamily: Platform.OS == "ios" ? "Helvetica" : "Roboto",
                    fontSize: 12,
                    textAlign: "center",
                    alignSelf: "center",
                    lineHeight: 18
                  }}
                >
                  Donec facilisis tortor ut augue lacinia, at viverra est
                  semper. Sed sapien metus, scelerisque nec pharetra id, tempor
                  a tortor. Pellentesque non dignissim neque.
                </Text>
              </View>
            ))}
          </Swiper>
        </View>

        <TouchableOpacity
          style={{
            marginTop: 10,
            width: 215,
            height: 40,
            borderRadius: 8,
            backgroundColor: "#3b5998",
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text
            style={{
              color: "#ffffff",
              fontFamily: Platform.OS == "ios" ? "Helvetica" : "Roboto",
              fontSize: 12,
              fontWeight: "600"
            }}
          >
            Signup with Facebook
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: 20,
            width: 215,
            height: 40,
            borderRadius: 8,
            backgroundColor: "#f14336",
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text
            style={{
              color: "#ffffff",
              fontFamily: Platform.OS == "ios" ? "Helvetica" : "Roboto",
              fontSize: 12,
              fontWeight: "600"
            }}
          >
            Signup with Google
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            marginTop: 10,
            color: "#333",
            fontFamily: Platform.OS == "ios" ? "Helvetica" : "Roboto",
            fontSize: 12,
            fontWeight: "600",
            textAlign: "center"
          }}
        >
          OR
        </Text>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("Signin");
          }}
          style={{
            marginTop: 20,
            width: 215,
            height: 40,
            borderRadius: 8,
            backgroundColor: "#f9f9f9",
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text
            style={{
              color: "#000",
              fontFamily: Platform.OS == "ios" ? "Helvetica" : "Roboto",
              fontSize: 12,
              fontWeight: "600"
            }}
          >
            Signup with Email
          </Text>
        </TouchableOpacity>
        <View
          style={{ flexDirection: "row", marginTop: 20, alignSelf: "center" }}
        >
          <Text
            style={{
              fontFamily: Platform.OS == "ios" ? "Helvetica" : "Roboto",
              fontSize: 12,
              color: "#3b3b3b",
              fontSize: 12,
              fontWeight: "400",
              marginRight: 10
            }}
          >
            Existing user?
          </Text>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Signin");
            }}
          >
            <Text
              style={{
                color: "#f34949",
                fontFamily: Platform.OS == "ios" ? "Helvetica" : "Roboto",
                fontSize: 12,
                fontWeight: "600"
              }}
            >
              Login now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = {
  wrapper: { height: 200 },

  slide: {
    height: 200,
    marginTop: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "transparent"
  },
  image: {
    borderRadius: 10,
    width: width - 80,
    flex: 1,
    backgroundColor: "transparent"
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
