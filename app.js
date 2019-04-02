const productList = document.querySelector('#product-list');

// create element & render product
function renderProduct(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let price = document.createElement('span');

    // li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    price.textContent = doc.data().price;

    li.appendChild(name);
    li.appendChild(price);

    productList.appendChild(li);
}

// getting data = promise
db.collection('products').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        console.log(doc.data())
        renderProduct(doc);
    });
});