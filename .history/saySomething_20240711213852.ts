export default class SaySomething {
  message: String;
  constructor(message: String) {
    this.message = message;
  }
  public sayText(elem: HTMLElement | null) {
    if (elem) {
      elem.innerText = this.message;
    }
  }
}
