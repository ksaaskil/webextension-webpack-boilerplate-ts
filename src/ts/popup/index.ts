import "../../scss/popup.scss";
import debug from "../utils/debug";

const debugLog = debug("extension:popup");

const myButton = document.getElementById("my-button");

myButton.onclick = () => {
  debugLog("Button was pressed!");
};
