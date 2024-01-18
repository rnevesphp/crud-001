// primeiro vamos criar uma variavel para manipular o DOM 
import { init } from "./controllers/initPage.controller.js";

let web ; 

window.onload = function () {
    if (document.readyState == "complete") {
        web = new init();
    }
}