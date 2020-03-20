function component() {
  const element = document.createElement('div');
  const element2 = document.createElement("h1");



  element2.innerText= "This is a heading";
  element.appendChild(element2);
  return element;
}

document.body.appendChild(component());

// var cat = "meaw";
// // return cat;
// console.log(cat);