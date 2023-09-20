export class Log {
  static success(msg: string) {
    console.log(`%c ${msg}`, "color : white ; background : green");
  }
  static warning(msg: string) {
    console.log(`%c ${msg}`, "color : white ; background : yellow");
  }
  static error(msg: string) {
    console.log(`%c ${msg}`, "color : white ; background : red");
  }
  static info(msg: string) {
    console.log(`%c ${msg}`, "color : white ; background : black");
  }
  static facny(msg: string) {
    console.log(`%c ${msg}`, "color : white ; background : violet");
  }
}
