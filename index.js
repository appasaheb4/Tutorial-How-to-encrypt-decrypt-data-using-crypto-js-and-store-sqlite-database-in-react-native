/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React, { Component } from "react";
import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import { createAppContainer } from "react-navigation";
import { createRootNavigator } from "./src/app/router/router";

class Tutorial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
      isStartPage: "HomeNavigator"
    };
  }

  render() {
    const Layout = createRootNavigator(
      this.state.status,
      this.state.isStartPage
    );

    const AppContainer = createAppContainer(Layout);
    return <AppContainer />;
  }
}

AppRegistry.registerComponent(appName, () => Tutorial);
