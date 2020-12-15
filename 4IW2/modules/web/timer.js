import utils from "./utils.js";

setTimeout(() => console.log(utils.isDark), 3000);

export default async function Timer() {
  setTimeout(() => {
    throw "Timeout";
  }, 6000);
}
