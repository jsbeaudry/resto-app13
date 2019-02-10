import React, { Component } from "react";
import { Text, View, Dimensions, StyleSheet } from "react-native";
import { Constants, Marker, MapView, Location, Permissions } from "expo";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const sampleSiteMarkers = [
  {
    id: 1,
    title: "Twin Lakes Hidden Spot",
    description: "Beautiful view of Twin Lakes off this hidden forest road.",
    coordinate: {
      latitude: 18.594395,
      longitude: -72.307434
    }
  },
  {
    id: 2,
    title: "Twin Lakes Hidden Spot",
    description: "Beautiful view of Twin Lakes off this hidden forest road.",
    coordinate: {
      latitude: 18.594765,
      longitude: -72.307434
    }
  },
  {
    id: 3,
    title: "Twin Lakes Hidden Spot",
    description: "Beautiful view of Twin Lakes off this hidden forest road.",
    coordinate: {
      latitude: 18.182695,
      longitude: -72.307434
    }
  }
];
export default class App extends Component {
  state = {
    mapRegion: null,
    hasLocationPermissions: false,
    locationResult: null
  };

  componentDidMount() {
    this._getLocationAsync();
  }

  _handleMapRegionChange = mapRegion => {
    console.log(mapRegion);
    this.setState({ mapRegion });
  };

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        locationResult: "Permission to access location was denied"
      });
    } else {
      this.setState({ hasLocationPermissions: true });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ locationResult: JSON.stringify(location) });

    // Center the map on the location we just fetched.
    this.setState({
      mapRegion: {
        latitude: 18.594395,
        longitude: -72.307434,
        latitudeDelta: 0.5,
        longitudeDelta: 0.5
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.locationResult === null ? (
          <Text>Finding your current location...</Text>
        ) : this.state.hasLocationPermissions === false ? (
          <Text>Location permissions are not granted.</Text>
        ) : this.state.mapRegion === null ? (
          <Text>Map region doesn't exist.</Text>
        ) : (
          <MapView
            style={{ alignSelf: "stretch", height: screenHeight }}
            region={this.state.mapRegion}
            onRegionChange={this._handleMapRegionChange}
          >
            {sampleSiteMarkers.map((marker, index) => {
              return (
                <MapView.Marker
                  key={marker.id}
                  coordinate={marker.coordinate}
                  title={marker.title}
                  description={marker.description}
                />
              );
            })}
          </MapView>
        )}

        {/*  <Text>Location: {this.state.locationResult}</Text>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1"
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#34495e"
  }
});
