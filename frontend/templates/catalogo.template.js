
const routeApi = 'http://localhost:3000/' ; 
const main = document.getElementById('main'); 

const res = fetch(routeApi); 
const apiData = res.json(); 

const getCategories = ( res , apiData ) => {

    main.innerHTML = '';

   `<div class="uk-card uk-card-default uk-width-1-2@m">
      <div class="uk-card-header">
        <div class="uk-grid-small uk-flex-middle" uk-grid>
          
          <div class="uk-width-expand">
            <h3 class="uk-card-title uk-margin-remove-bottom">Title</h3>
          </div>
        </div>
      </div>
      <div class="uk-card-body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>
      <div class="uk-card-footer">
        <a href="#" class="uk-button uk-button-text">Read more</a>
      </div>
    </div>`
}