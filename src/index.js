import "./style.css";
import loadContentHome from "./content-home.js";
import loadContentMenu from "./content-menu.js";
import loadContentContact from "./content-contact.js";

let home = document.querySelector("#home");
let menu = document.querySelector("#menu");
let contact = document.querySelector("#contact");

loadContentHome();
home.addEventListener("click", loadContentHome);
menu.addEventListener("click", loadContentMenu);
contact.addEventListener("click", loadContentContact);

function switchMenu() {}

// import MyImage from "./Images/image-1.jpg";
// const myIcon = new Image();
// myIcon.src = MyImage;
