import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class SettingsScreen extends Component<any, any> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Settings</Text>

        <Button
          title="Setting"
          onPress={() => {
            this.props.navigation.push("AboutUsScreen");
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
