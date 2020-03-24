
  const menu = () => {
    const drinks = [
      {
        img: "images/juice.jpg",
        title: "Fruit juice",
        caption: "Passion, mango, strawberry, pineapple",
        price: "$8"
      },
      {
        img: "images/juice2.jpg",
        title: "Mixed Fruit juice",
        caption: "Natural refreshing mixed fruit juice",
        price: "$12"
      },
      {
        img: "images/cocktail.jpg",
        title: "Cocktail",
        caption: "Classic cocktails",
        price: "$15"
      },
      {
        img: "images/beer.jpg",
        title: "Beers",
        caption: "All kinds of beer",
        price: "Prices may vary"
      }
    ];
    const foodItems = [
      {
        img: "images/nyamachoma.jpg",
        title: "East African Nyama Choma",
        caption: "beef, goat meat, lamb",
        price: "$15"
      },
      {
        img: "images/full-chkn.jpg",
        title: "Whole Chicken",
        caption: "Whole Chicken- deepfried",
        price: "$14"
      },
      {
        img: "media/more.jpg",
        title: "Chips and Mchomo",
        caption: "Plate of chips and Mchomo",
        price: "$9"
      },
      {
        img: "images/nyama.jpg",
        title: "Roasted meat",
        caption: "Roasted Goat or beef ",
        price: "$11"
      },
      {
        img: "images/rolex.jpg",
        title: "UGRolex",
        caption: "Meat rolex, vegetable rolex",
        price: "$13"
      }
    ];

    const menuItems = document.createElement('div');
    menuItems.id = 'menu';
    menuItems.classList.add('menuItems', 'content');
    const container = document.createElement('div');
    container.classList.add('containers');
    menuItems.appendChild(container);

    const row1 = document.createElement("div");
    row1.classList.add("row");
    container.appendChild(row1);

    const col1 = document.createElement("div");
    col1.classList.add("col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "text-center");
    row1.appendChild(col1);

    const menuSection = document.createElement("div");
    menuSection.classList.add("menu-section");
    col1.appendChild(menuSection);

    const pageTitle = document.createElement("h1");
    pageTitle.classList.add("page-title");
    pageTitle.innerHTML = "Food Menu";
    menuSection.appendChild(pageTitle);

    const row2 = document.createElement("div");
    row2.classList.add("row");
    container.appendChild(row2);

    const col2 = document.createElement("div");
    col2.classList.add("col-lg-4", "col-md-4", "col-sm-6", "col-xs-12", "mb40");
    row2.appendChild(col2);

    const col5 = document.createElement("div");
    col5.classList.add("col-lg-4", "col-md-4", "col-sm-6", "col-xs-12", "mb40");
    row2.appendChild(col5);

    const menuItem2 = document.createElement("div");
    menuItem2.classList.add("menu-block");
    col5.appendChild(menuItem2);

    const menuTitle2 = document.createElement("h3");
    menuTitle2.classList.add("menu-title");
    menuTitle2.innerHTML = "Food";
    menuItem2.appendChild(menuTitle2);

    const col8 = document.createElement("div");
    col8.classList.add("col-lg-4", "col-md-4", "col-sm-6", "col-xs-12", "mb40");
    row2.appendChild(col8);

    const menuItem3 = document.createElement("div");
    menuItem3.classList.add("menu-block");
    col8.appendChild(menuItem3);

    const menuTitle3 = document.createElement("h3");
    menuTitle3.classList.add("menu-title");
    menuTitle3.innerHTML = "Drinks";
    menuItem3.appendChild(menuTitle3);

    return menuItems;
  };
  export default menu;
  
