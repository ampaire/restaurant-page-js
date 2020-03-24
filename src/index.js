import homepage from "./modules/home";
import menu from "./modules/menu";

const addItems = document.getElementById('content');

const start = () => {
  addItems.innerHTML = '';
  addItems.appendChild(homepage());
};

start();

const homePage = document.getElementById('#home');
const menuPage = document.getElementById('#menu');
const specialPage = document.getElementById('#special');
const contactPage = document.getElementById('#contact');

const togglePage = (event) => {
  if (event.target === homePage) {
    start();
  } else if (event.target === menuPage) {
    addItems.innerHTML = '';
    addItems.appendChild(menu());
  } else if (event.target === specialPage) {
    addItems.innerHTML = '';
    addItems.appendChild(special());
  } else {
    addItems.innerHTML = '';
    addItems.appendChild(contact());
  }
};

homePage.addEventListener('click', togglePage);
menuPage.addEventListener('click', togglePage);
specialPage.addEventListener('click', togglePage);
contactPage.addEventListener('click', togglePage);


