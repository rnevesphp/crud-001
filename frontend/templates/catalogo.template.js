
const routeApi = 'http://localhost:3000/' ; 
const main = document.getElementById('main'); 

const res = fetch(routeApi); 
const apiData = res.json(); 

const getCategories = ( res , apiData ) => {

    main.innerHTML = '';

}