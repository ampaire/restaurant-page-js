const special = () => {
  const specialMenu = [
    {
      img: 'images/nyamachoma.jpg',
      title: 'East African Nyama Choma',
      caption: 'beef, goat meat, lamb',
      price: '$5.5',
    },
    {
      img: 'images/full-chkn.jpg',
      title: 'Whole Chicken',
      caption: 'Whole Chicken- deepfried',
      price: '$7',
    },
    {
      img: 'images/more.jpg',
      title: 'Chips and Mchomo',
      caption: 'Plate of chips and Mchomo',
      price: '$7',
    },
    {
      img: 'images/nyama.jpg',
      title: 'Roasted meat',
      caption: 'Roasted Goat or beef ',
      price: '$6',
    },
    {
      img: 'images/rolex.jpg',
      title: 'UGRolex',
      caption: 'Meat rolex, vegetable rolex',
      price: '$6.5',
    },
    {
      img: 'images/luwombo.jpg',
      title: 'Chicken Luwombo',
      caption: 'Whole chicken Luwombo',
      price: '$6.5',
    },
  ];
  const items = document.createElement('div');
  items.id = 'special';
  items.classList.add('spec-today', 'spec-fluid');
  const container = document.createElement('div');
  container.classList.add('containers', 'text-white', 'blinking');
  container.innerHTML = `
  <h1 class="display-4 ml-4 welcome"> Do not miss out on the discounted food items for Today!!</h1>`;
  items.appendChild(container);

  const row1 = document.createElement('div');
  row1.classList.add('row');
  container.appendChild(row1);

  const col1 = document.createElement('div');
  col1.classList.add('col-lg-12', 'col-md-12', 'col-sm-12', 'col-xs-12', 'text-center');
  row1.appendChild(col1);

  const specialSection = document.createElement('div');
  specialSection.classList.add('special-section');
  col1.appendChild(specialSection);

  const pageTitle = document.createElement('h1');
  pageTitle.classList.add('page-title');
  pageTitle.innerHTML = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
  specialSection.appendChild(pageTitle);

  specialMenu.forEach((food) => {
    const menuContent = document.createElement('div');
    menuContent.classList.add('menu-content');
    specialSection.appendChild(menuContent);

    const row4 = document.createElement('div');
    row4.classList.add('row');
    menuContent.appendChild(row4);

    const col6 = document.createElement('div');
    col6.classList.add('col-lg-3', 'col-md-3', 'col-sm-3', 'col-xs-12');
    row4.appendChild(col6);

    const foodImg = document.createElement('div');
    foodImg.classList.add('food-img');
    col6.appendChild(foodImg);

    const img = document.createElement('img');
    img.setAttribute('src', food.img);
    img.setAttribute('alt', food.title);
    img.classList.add('img-div');
    foodImg.appendChild(img);

    const col7 = document.createElement('div');
    col7.classList.add('col-lg-9', 'col-md-9', 'col-sm-9', 'col-xs-12');
    row4.appendChild(col7);

    const foodContent = document.createElement('div');
    foodContent.classList.add('food-content');
    col7.appendChild(foodContent);

    const foodTitle = document.createElement('h5');
    foodTitle.classList.add('food-title');
    foodTitle.innerHTML = `<a href='#'>${food.title}</a>`;
    foodContent.appendChild(foodTitle);

    const foodcaption = document.createElement('span');
    foodcaption.classList.add('food-caption');
    foodcaption.innerHTML = food.caption;
    foodContent.appendChild(foodcaption);

    const foodPrice = document.createElement('div');
    foodPrice.classList.add('food-price');
    foodContent.appendChild(foodPrice);

    const priceTag = document.createElement('p');
    priceTag.innerHTML = food.price;
    foodPrice.appendChild(priceTag);
  });

  return items;
};

export default special;