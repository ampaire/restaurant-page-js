
const menu = () => {
  const drinks = [
    {
      img: 'images/juice.jpg',
      title: 'Fruit juice',
      caption: 'Passion, mango, strawberry, pineapple',
      price: '$8',
    },
    {
      img: 'images/juice2.jpg',
      title: 'Mixed Fruit juice',
      caption: 'Natural refreshing mixed fruit juice',
      price: '$12',
    },
    {
      img: 'images/cocktail.jpg',
      title: 'Cocktail',
      caption: 'Classic cocktails',
      price: '$15',
    },
    {
      img: 'images/beer.jpg',
      title: 'Beers',
      caption: 'All kinds of beer',
      price: 'Prices may vary',
    },
  ];
  const foodItems = [
    {
      img: 'images/nyamachoma.jpg',
      title: 'East African Nyama Choma',
      caption: 'beef, goat meat, lamb',
      price: '$11',
    },
    {
      img: 'images/full-chkn.jpg',
      title: 'Whole Chicken',
      caption: 'Whole Chicken- deepfried',
      price: '$14',
    },
    {
      img: 'images/more.jpg',
      title: 'Chips and Mchomo',
      caption: 'Plate of chips and Mchomo',
      price: '$14',
    },
    {
      img: 'images/nyama.jpg',
      title: 'Roasted meat',
      caption: 'Roasted Goat or beef ',
      price: '$12',
    },
    {
      img: 'images/rolex.jpg',
      title: 'UGRolex',
      caption: 'Meat rolex, vegetable rolex',
      price: '$13',
    },
    {
      img: 'images/luwombo.jpg',
      title: 'Chicken Luwombo',
      caption: 'Whole chicken Luwombo',
      price: '$13',
    },
  ];

  const menuItems = document.createElement('div');
  menuItems.id = 'menu';
  menuItems.classList.add('menuItems', 'content');
  const container = document.createElement('div');
  container.classList.add('containers');
  menuItems.appendChild(container);

  const row1 = document.createElement('div');
  row1.classList.add('row');
  container.appendChild(row1);

  const col1 = document.createElement('div');
  col1.classList.add('col-lg-12', 'col-md-12', 'col-sm-12', 'col-xs-12', 'text-center');
  row1.appendChild(col1);

  const menuSection = document.createElement('div');
  menuSection.classList.add('menu-section');
  col1.appendChild(menuSection);

  const pageTitle = document.createElement('h1');
  pageTitle.classList.add('page-title');
  pageTitle.innerHTML = 'Food Menu';
  menuSection.appendChild(pageTitle);

  const row2 = document.createElement('div');
  row2.classList.add('row');
  container.appendChild(row2);

  const col2 = document.createElement('div');
  col2.classList.add('col-lg-4', 'col-md-4', 'col-sm-6', 'col-xs-12', 'mb40');
  row2.appendChild(col2);

  const col5 = document.createElement('div');
  col5.classList.add('col-lg-4', 'col-md-4', 'col-sm-6', 'col-xs-12', 'mb40');
  row2.appendChild(col5);

  const menuItem2 = document.createElement('div');
  menuItem2.classList.add('menu-block');
  col5.appendChild(menuItem2);

  const menuTitle2 = document.createElement('h3');
  menuTitle2.classList.add('menu-title');
  menuTitle2.innerHTML = 'Food';
  menuItem2.appendChild(menuTitle2);

  foodItems.forEach((food) => {
    const menuContent = document.createElement('div');
    menuContent.classList.add('menu-content');
    menuItem2.appendChild(menuContent);

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

  const col8 = document.createElement('div');
  col8.classList.add('col-lg-4', 'col-md-4', 'col-sm-6', 'col-xs-12', 'mb40');
  row2.appendChild(col8);

  const menuItem3 = document.createElement('div');
  menuItem3.classList.add('menu-block');
  col8.appendChild(menuItem3);

  const menuTitle3 = document.createElement('h3');
  menuTitle3.classList.add('menu-title');
  menuTitle3.innerHTML = 'Drinks';
  menuItem3.appendChild(menuTitle3);

  drinks.forEach((drink) => {
    const drinksContent = document.createElement('div');
    drinksContent.classList.add('menu-content');
    menuItem3.appendChild(drinksContent);

    const row5 = document.createElement('div');
    row5.classList.add('row');
    drinksContent.appendChild(row5);

    const col9 = document.createElement('div');
    col9.classList.add('col-lg-3', 'col-md-3', 'col-sm-3', 'col-xs-12');
    row5.appendChild(col9);

    const drinkImg = document.createElement('div');
    drinkImg.classList.add('drink-img');
    col9.appendChild(drinkImg);

    const img = document.createElement('img');
    img.setAttribute('src', drink.img);
    img.setAttribute('alt', drink.title);
    img.classList.add('img-div');
    drinkImg.appendChild(img);

    const col10 = document.createElement('div');
    col10.classList.add('col-lg-9', 'col-md-9', 'col-sm-9', 'col-xs-12');
    row5.appendChild(col10);

    const dishContent = document.createElement('div');
    dishContent.classList.add('dish-content');
    col10.appendChild(dishContent);

    const dishTitle = document.createElement('h5');
    dishTitle.classList.add('dish-title');
    dishTitle.innerHTML = `<a href='#'>${drink.title}</a>`;
    dishContent.appendChild(dishTitle);

    const drinkCaption = document.createElement('span');
    drinkCaption.classList.add('dish-caption');
    drinkCaption.innerHTML = drink.caption;
    dishContent.appendChild(drinkCaption);

    const drinkprice = document.createElement('div');
    drinkprice.classList.add('dish-price');
    dishContent.appendChild(drinkprice);

    const priceTag = document.createElement('p');
    priceTag.innerHTML = drink.price;
    drinkprice.appendChild(priceTag);
  });


  return menuItems;
};
export default menu;
