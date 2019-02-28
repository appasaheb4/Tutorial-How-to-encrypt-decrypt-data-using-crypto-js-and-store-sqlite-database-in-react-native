import { Component } from "react";
import SQLite from "react-native-sqlite-storage";

export default class CreateDatabase extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var db = SQLite.openDatabase(
      { name: "Tutorial.db", readOnly: true },
      this.openCB,
      this.errorCB
    );

    db.transaction(function(txn) {
      //TODO: TABLE
      txn.executeSql(
        "CREATE TABLE IF NOT EXISTS tblUserDetails (id  INTEGER PRIMARY KEY AUTOINCREMENT,dateCreated TEXT,email TEXT,password TEXT,address TEXT)",
        []
      );
      console.log("create database.");
    });
  }

  errorCB(err) {
    console.log("SQL Error: " + err);
  }

  successCB() {
    console.log("SQL executed fine");
  }

  openCB() {
    console.log("Database OPENED");
  }

  render() {
    return null;
  }
}
