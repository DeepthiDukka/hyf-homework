console.log('Script loaded');

const testProductNames = ['Flat screen', 'iphoneX', 'headphones', 'Charger', 'Google glass', 'apple-watch'];

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
            name: 'iphoneX',
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

renderProducts(products);