/* import getCatalogue */
import getCategories from './../templates/catalogo.template'

function init() { 
    console.log('HOLA')
    const doc = document; 

    getCategories();

    console.log(catalogo); 
}

function getLoggins() {
    
}

export { init , getLoggins }; 