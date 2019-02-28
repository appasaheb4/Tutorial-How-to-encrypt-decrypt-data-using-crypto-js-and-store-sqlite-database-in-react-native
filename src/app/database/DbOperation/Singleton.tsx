export default class Singleton {
  static myInstance = null;
  public emailId: string = "";
  public password: string = "1234";
  public rootViewController: string = "TabbarBottom";

  /**
   * @returns {Singleton}
   */
  static getInstance() {
    if (Singleton.myInstance == null) {
      Singleton.myInstance = new Singleton();
    }
    return this.myInstance;
  }

  //TODO: passcode
  getEmailId() {
    return this.emailId;
  }
  setEmailId(email: string) {
    this.emailId = email;
  }
  //TODO: rootViewController
  getRootViewController() {
    return this.rootViewController;
  }
  setRootViewController(controller: string) {
    this.rootViewController = controller;
  }
  //TODO: getPassword
  getPassword() {
    return this.password;
  }
}
