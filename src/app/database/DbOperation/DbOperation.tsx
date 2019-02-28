import Singleton from "./Singleton";

const getPasscode = () => {
  let commonData = Singleton.getInstance();
  return commonData.getPassword();
};

import SQLite from "react-native-sqlite-storage";
var db = SQLite.openDatabase("Tutorial.db", "1.0", "Read Database", 200000);
var utils = require("./Utils");

const readTablesData = (tableName: any) => {
  let passcode = getPasscode();
  return new Promise((resolve, reject) => {
    var temp = [];
    db.transaction(tx => {
      tx.executeSql("SELECT * FROM  tblUserDetails ", [], (tx, results) => {
        var len = results.rows.length;
        if (len > 0) {
          for (let i = 0; i < len; i++) {
            let data = results.rows.item(i);
            data.id = data.id;
            data.dateCreated = utils.decrypt(data.dateCreated, passcode);
            data.email = utils.decrypt(data.email, passcode);
            data.password = utils.decrypt(data.password, passcode);
            data.address = utils.decrypt(data.address, passcode);
            temp.push(data);
          }
          resolve({ temp });
        }
      });
    });
  });
};

//insert
const insertUser = (
  tblName: string,
  fulldate: string,
  email: any,
  password: any,
  address: string
) => {
  let code = getPasscode();
  return new Promise((resolve, reject) => {
    db.transaction(function(txn) {
      txn.executeSql(
        "INSERT INTO    tblUserDetails (dateCreated,email,password,address) VALUES (:dateCreated,:email,:password,:address)",
        [
          utils.encrypt(fulldate.toString(), code),
          utils.encrypt(email.toString(), code),
          utils.encrypt(password.toString(), code),
          utils.encrypt(address.toString(), code)
        ]
      );
      resolve(true);
    });
  });
};

module.exports = {
  insertUser,
  readTablesData
};
