let CryptoJS = require("crypto-js");

const encrypt = (data: any, password: string) => {
  let ciphertext = CryptoJS.AES.encrypt(data, password);
  return ciphertext.toString();
};

const decrypt = (data: any, password: string) => {
  let bytes = CryptoJS.AES.decrypt(data, password);
  let str = false;
  try {
    str = bytes.toString(CryptoJS.enc.Utf8);
  } catch (e) {}
  return str;
};

module.exports = {
  encrypt,
  decrypt
};
