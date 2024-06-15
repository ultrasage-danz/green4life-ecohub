import { library } from "@fortawesome/fontawesome-svg-core";
import { faLeaf, faHandsHelping, faUsers } from "@fortawesome/free-solid-svg-icons";
let PRODUCTION = false;
try {
  PRODUCTION = process.env.NODE_ENV === "production";
} catch (e) {
}
function log(...args) {
  if (!PRODUCTION && console && typeof console.error === "function") {
    console.error(...args);
  }
}
library.add(faLeaf, faHandsHelping, faUsers);
export {
  log as l
};
