import homepage from "./modules/home";

const addItems = document.getElementById('content');

const start = () => {
  addItems.innerHTML = '';
  addItems.appendChild(homepage());
};

start();


