
const routeApi = "http://localhost:3000/catalogo"
const main = document.getElementById('main');



const getCategories = () => {

  main.innerHTML = '';

  const res = fetch(routeApi);
  const apiData = res.json();

  console.log(apiData.name);

  apiData.map((product) => {
    main.insertAdjacentHTML('beforeend', `
        <ul>
          <li class"col s12 m12 l3">
            <div class="">
                <div class="col s12 m4">
                    <div class="card blue-grey darken-4">
                        <div class="card-content white-text">
                            <span class="card-title">${product.name}</span>
                            <p>${product.category}</p>
                            <p>R$ ${product.price}</p>
                        </div>
                        <div class="card-action">
                            <a class="btn-small waves-effect waves-light red darken-1">
                                <i class="fa-solid fa-x"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
          </li>
        </ul>`
    )}
  )
};

getCategories(); 

module.exports = {getCategories}