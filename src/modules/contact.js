const contact = () => {
  const items = document.createElement('div');
  items.id = 'contact';

  items.classList.add('homepage', 'homepage-fluid');
  const container = document.createElement('div');
  container.classList.add('new', 'card', 'text-white');
  container.innerHTML = `
  <h3 class="display-4 ml-4 welcome text-center fa fa-phone"> Contact us Today</h3>
  <hr>
  <p class="phrase  ml-3 fa fa-whatsapp"><strong>  : +256782010352</strong></p>
  <p class="phrase  ml-3 fa fa-twitter"><strong>  : @AmpaPhem</strong></p>
  <p class="phrase  ml-3 fa fa-facebook"><strong>  : Effie Ampaire Phemia</strong></p>
  <p class="phrase  ml-3 fa fa-envelope"><strong>  : femayapr@gmail.com</strong></p>
  <p> </p>`;
  items.appendChild(container);

  return items;
};

export default contact;