const cityList = document.querySelector('#city-list');

// new collection
var citiesRef = db.collection("cities");

citiesRef.doc("SF").set({
    name: "San Francisco", state: "CA", country: "USA",
    capital: false, population: 860000,
    regions: ["west_coast", "norcal"] });
citiesRef.doc("LA").set({
    name: "Los Angeles", state: "CA", country: "USA",
    capital: false, population: 3900000,
    regions: ["west_coast", "socal"] });
citiesRef.doc("DC").set({
    name: "Washington, D.C.", state: null, country: "USA",
    capital: true, population: 680000,
    regions: ["east_coast"] });
citiesRef.doc("TOK").set({
    name: "Tokyo", state: null, country: "Japan",
    capital: true, population: 9000000,
    regions: ["kanto", "honshu"] });
citiesRef.doc("BJ").set({
    name: "Beijing", state: null, country: "China",
    capital: true, population: 21500000,
    regions: ["jingjinji", "hebei"] });


// create element & render product
function renderCity(doc) {
    let li = document.createElement('li');
    let name = document.createElement('span');
    let state = document.createElement('span');
    let country = document.createElement('span');
    let capital = document.createElement('span');
    let population = document.createElement('span');
    let regions = document.createElement('span');


    name.textContent = doc.data().name;
    state.textContent = doc.data().state;
    country.textContent = doc.data().country;
    capital.textContent = doc.data().capital;
    population.textContent = doc.data().population;
    regions.textContent = doc.data().regions;

    li.appendChild(name);
    li.appendChild(state);
    li.appendChild(country);
    li.appendChild(capital);
    li.appendChild(population);
    li.appendChild(regions);

    cityList.appendChild(li);

}

// getting data = promise
db.collection('cities').where("state", "==", "CA").where("population", ">", 1000000).get().then(snapshot => {
    console.log(snapshot.docs)
    snapshot.docs.forEach(doc => {
        renderCity(doc);
    });
});