import homepage from './modules/home';
import menu from './modules/menu';
import contact from './modules/contact';

const addItems = document.getElementById('content');

const start = () => {
  addItems.innerHTML = '';
  addItems.appendChild(homepage());
};

start();

const homePage = document.getElementById('#home');
const menuPage = document.getElementById('#menu');
const contactPage = document.getElementById('#contact');

const togglePage = (event) => {
  if (event.target === homePage) {
    start();
  } else if (event.target === menuPage) {
    addItems.innerHTML = '';
    addItems.appendChild(menu());
  } else {
    addItems.innerHTML = '';
    addItems.appendChild(contact());
  }
};

homePage.addEventListener('click', togglePage);
menuPage.addEventListener('click', togglePage);
contactPage.addEventListener('click', togglePage);
