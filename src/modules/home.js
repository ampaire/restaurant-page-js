const homepage = () => {
  const items = document.createElement("div");
  items.id = "home";
  items.classList.add("homepage", "homepage-fluid");
  const container = document.createElement("div");
  container.classList.add("container", "text-danger");
  container.innerHTML = `
  <h1 class="display-4 ml-4"> Jerky's </h1>
  <p class="lead"><strong>It's finger licking good</strong></p>
  <hr class="my-4">
  <p> </p>`;
  items.appendChild(container);

  return items;
};
export default homepage;
