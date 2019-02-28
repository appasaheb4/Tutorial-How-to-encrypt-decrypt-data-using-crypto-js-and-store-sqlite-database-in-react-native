import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
//import Singleton from "../../app/constans/Singleton";
import CreateDatabase from "../../app/database/CreateDatabase/CreateDatabase";
var DbOperation = require("../../app/database/DbOperation/DbOperation");
export default class HomeScreen extends Component<any, any> {
  //TODO:func click_GoSetting
  // click_GoSetting() {
  //   let commonData = Singleton.getInstance();
  //   commonData.setEmailId("onlyappasaheb4@gamil.com");
  //   this.props.navigation.push("SettingsScreen");
  // }

  componentWillMount() {
    this.readData();
  }

  async readData() {
    const result = await DbOperation.readTablesData("tblUserDetails");
    console.log({ result });
  }

  //TODO: click_InserData
  async click_InserData() {
    const dateTime = Date.now();
    const fulldate = Math.floor(dateTime / 1000);

    const result = await DbOperation.insertUser(
      "tblUserDetails",
      fulldate,
      "onlyappasaheb4@gmail.com",
      "appa1234",
      "india"
    );

    if (result) {
      console.log("data insert");
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>

        <Button title="Setting" onPress={() => this.click_InserData()} />
        <CreateDatabase />
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
