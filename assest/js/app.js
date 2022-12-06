var cl = console.log;

var city = [{
    name: "USA",
    population: 543278654,
    area: 7654359,
    capital: "Washington,D.C.",
    language:"English",
},
{
    name: "Canada",
    population: 26654327,
    area: 159994,
    capital: 'Ottawa',
    language:"English and French",
},
{
    name: "Mexico",
    population: 8765432,
    area: 201797,
    capital: 'Mexico City',
    language:"Spanish",
},
{
    name: "France",
    population: 457324772,
    area: 8765497,
    capital: 'Paris',
    language:"French",
},
{
    name: "Germany",
    population: 56743232,
    area: 760397,
    capital: 'Berlin',
    language:"German",
},
];

var stdInfoContainer = document.getElementById("stdInfoContainer");
var result = '';
city.forEach(function(el,i){
    result += "<tr>";
    result += "<td>" + (i + 1) + "</td>";
    result += "<td>" + el.name + "</td>";
    result += "<td>" + el.population + "</td>";
    result += "<td>" + el.area + "</td>";
    result += "<td>" + el.capital + "</td>";
    result += "<td>" + el.language + "</td>";
    result += "</tr>";
})
cl(result);
stdInfoContainer.innerHTML = result;

cl("break");

var mobile = [{
    name: "Apple iPhone 12",
    price: 999,
    color: "Black",
    storage: 128,
    camera:"Dual-Lens",
},
{
    name: "Samsung Galaxy S21",
    price: 874,
    color: "White",
    storage: 128,
    camera:"Triple-Lens",
},
{
    name: "Google Pixel 4a",
    price: 349,
    color: "Black",
    storage: 64,
    camera:"Single-Lens",
},
{
    name: "OnePlus 8T",
    price: 799,
    color: "Aquamarine Green",
    storage: 128,
    camera:"Quad-Lens",
},
{
    name: "Huawei P40 Pro",
    price: 799,
    color: "Silver Frost",
    storage: 256,
    camera:"Quad-Lens",
},
];

var InfoContainer = document.getElementById("InfoContainer");
var result = '';
mobile.forEach(function(el,i){
    result += "<tr>";
    result += "<td>" + (i + 1) + "</td>";
    result += "<td>" + el.name + "</td>";
    result += "<td>" + el.price + "</td>";
    result += "<td>" + el.color + "</td>";
    result += "<td>" + el.storage + "</td>";
    result += "<td>" + el.camera + "</td>";
    result += "</tr>";
})
cl(result);
InfoContainer.innerHTML = result;