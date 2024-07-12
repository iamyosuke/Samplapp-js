import SaySomething from "./saySomething";

const root: HTMLElement | null = document.getElementById("root");
const SaySomething = new SaySomething("Hello typescript");
SaySomething.sayText(root);
