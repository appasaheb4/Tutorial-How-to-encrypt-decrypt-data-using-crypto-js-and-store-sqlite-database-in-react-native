import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  WebView
} from "react-native";

export default class QrcodeImageReaderScreen extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      src: null
    };
  }

  render() {
    return (
      <View>
        <Text>Qrcode</Text>
      </View>
    );
  }
}
