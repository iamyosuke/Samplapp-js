export default class SaySomething {
  message: String;
  constructor(messsage: string) {
    this.message = message
  }
  public sayText(elem: HTMLElement) {
    if (elem) {
      elem.innerText + this.message
    }
  }
}