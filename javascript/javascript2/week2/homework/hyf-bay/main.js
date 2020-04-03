console.log('Script loaded');

const products = getAvailableProducts();
const productsList = document.querySelector('section.products ul');
console.log(productsList);

function renderProducts(products) {
    productsList.textContent = '';

    products.forEach(product => {
        const li = document.createElement('li');
        const shipsToHTML = product.shipsTo.reduce((acc, country) => `<li>${acc}</li><li>${country}</li>`);
        li.innerHTML = `
        <ul>
        <li>${product.name}</li>
                <li>${product.price}</li>
                <li>${product.rating}</li>
                <ul class="ships-to">${shipsToHTML}</ul>
                <li class="btn"><button>Add to cart</button</li>
        </ul>
        `;
        productsList.appendChild(li);
    });
}

renderProducts(products);

/* const testProductNames = ['Flat screen', 'iphoneX', 'headphones', 'Charger', 'Google glass', 'apple-watch'];

function getAvailableProducts() {
    return [{
            id: 23771823,
            name: 'Flat screen',
            price: 4000,
            rating: 4.2,
            shipsTo: ['Denmark', 'Germany']
        },
        {
            id: 23771824,
            name: 'IphoneX',
            price: 14000,
            rating: 4.6,
            shipsTo: ['Denmark', 'Germany']
        }
    ]

}
const products = getAvailableProducts();

// code abstarction & rendering Products

function renderProducts(products) {
    document.getElementsByClassName('products');
    const productUl = document.querySelector('ul');
    // testProductNames.forEach(function (productName) { // test product array
    products.forEach(function (productName) {
        const testProductList = document.createElement('li');
        // showing more details to the user
        testProductList.textContent = `${productName.name}` //| ${productName.price} | ${productName.rating} | ${productName.shipsTo}`;
        // Showing more details to the user in a nice way
        const productDetails = document.createElement('ul');
        const productDetailsList = document.createElement('li');
        const productDetailsList2 = document.createElement('li');
        const productDetailsList3 = document.createElement('li');
        // Optional ships to rendering
        const productShipTolists = document.createElement('ul');
        // const productShipTolist1 = document.createElement('li');
        // const productShipTolist2  = document.createElement('li');
        productDetailsList.textContent = productName.price;
        productDetailsList2.textContent = productName.rating;
        // productDetailsList3.textContent = productName.shipsTo;
        productName.shipsTo.forEach(function (shipTo) {
            const productShipTo = document.createElement('li');
            productShipTo.textContent = shipTo;
            productUl.appendChild(testProductList);
            testProductList.appendChild(productDetails);
            productDetails.appendChild(productDetailsList);
            productDetails.appendChild(productDetailsList2);
            productDetails.appendChild(productDetailsList3);
            productDetailsList3.appendChild(productShipTolists);
            productShipTolists.appendChild(productShipTo);
        })

    })
}

renderProducts(products);  */

// to renderProducts(products);

const searchValue = document.querySelector('div.search > input');
searchValue.addEventListener('keyup', filterInput);

function filterInput() {
    const writtenInputText = searchValue.value;
    const filterProducts = products.filter(product => product.name.toLowerCase().includes(writtenInputText));
    renderProducts(filterProducts);
}

// Showing products that ships to country

const country = document.querySelector('.country > select');
country.addEventListener('change', shipsToCountry);

function shipsToCountry() {
    const selectCountry = country.value;
    const selectedTheCountry = selectCountry.charAt(0).toUpperCase() + selectCountry.slice(1);
    const shipsToProducts = products.filter(product => product.shipsTo.includes(selectedTheCountry));
    renderProducts(shipsToProducts);
}

// sort the products - optional
const sort = document.querySelector('.sort > select');
sort.addEventListener('change', sortTheProducts);

function sortTheProducts() {
    if (sort.value === 'name') {
        const sortName = products.sort((a, b) => (a.name > b.name ? 1 : -1));
        renderProducts(sortName);
    } else if (sort.value === 'expensive') {
        const sortExpensive = products.sort((a, b) => b.price - a.price);
        renderProducts(sortExpensive);
    } else if (sort.value === 'cheap') {
        const sortCheapest = products.sort((a, b) => a.price - b.price);
        renderProducts(sortCheapest);
    }
}

/* shoppingcart - optional

  const addToCartBtn = document.querySelector('.btn > button')
   const shoppingCart = document.querySelector('.cart');
    addToCartBtn.addEventListener('click', addToShoppingCart);
    products.forEach(product => {
         const cartList = document.createElement('li');
         cartList.innerHTML = `
         <div class="name">${product.name}</div>
         <div class="prices">${product.price}</div>

      `}) ; 

     cartList.addEventListener(cartList); */