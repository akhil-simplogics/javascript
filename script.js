let products= 
[       {
    "id": 1,
    "title": "The Original Super Donut",
    "price": 135,
    "image": "./images/product-1.jpg"
},
{
    "id": 2,
    "title": "The Original Super Donut",
    "price": 950,
    "image": "./images/product-2.jpg"
},
{
    "id": 3,
    "title": "The Original Super Donut",
    "price": 750,
    "image": "./images/product-3.png"
},
{
    "id": 4,
    "title": "The Original Super Donut",
    "price": 999,
    "image": "./images/product-4.jpeg"
},
{
    "id": 5,
    "title": "The Original Super Donut",
    "price": 250,
    "image": "./images/product-5.jpg"

},
{
    "id": 6,
    "title": "The Original Super Donut",
    "price": 850,
    "image": "./images/product-6.jpg"

},
{
    "id": 7,
    "title": "The Original Super Donut",
    "price": 600,
    "image": "./images/product-7.jpg"
},
{
    "id": 8,
    "title": "The Original Super Donut",
    "price": 350,
    "image": "./images/product-8.jpg"
},
{
    "id": 9,
    "title": "The Original Super Donut",
    "price": 799,
    "image": "./images/product-8.jpg"
},
{
    "id": 10,
    "title": "The Original Super Donut",
    "price": 150,
    "image": "./images/product-9.jpg"
},
{
    "id": 11,
    "title": "The Original Super Donut",
    "price": 650,
    "image": "./images/product-7.jpg"
}
]
var prices = document.getElementsByClassName('price');
var i=0;

Array.from(prices).forEach(function(item)

{   
    
    item.innerHTML=products[i].price;
    i++;
})




