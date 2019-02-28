import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
//import Singleton from "../../app/constans/Singleton";
export default class AboutUsScreen extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      email: ""
    };
  }

  componentWillMount() {
    // let commonData = Singleton.getInstance();
    // let email = commonData.getEmailId();
    // this.setState({
    //   email
    // });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>About us</Text>

        <Text>Email Id: {this.state.email}</Text>
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
