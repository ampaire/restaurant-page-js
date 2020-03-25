const homepage = () => {
  const items = document.createElement('div');
  items.id = 'home';
  items.classList.add('homepage', 'homepage-fluid');
  const container = document.createElement('div');
  container.classList.add('container', 'text-white');
  container.innerHTML = `
  <h1 class="display-4 ml-4 welcome"> Jerky's </h1>
  <br />

  <p class="phrase"><strong>It's finger licking good !!</strong></p>
  <p class="phrase"><strong>Satisfy your bear appetite Today.</strong></p>
  <p class="phrase"><strong>Don't forget to check for our Today's special</strong></p>
  <p> </p>`;
  items.appendChild(container);

  return items;
};
export default homepage;
