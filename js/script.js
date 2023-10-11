var form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); updateCars();} 
form.addEventListener('submit', handleForm);

const cars = [];
class Car {
    constructor(brand, img, price, model, year){
        this.brand = brand;
        this.img = img;
        this.price = price;
        this.model = model;
        this.year = year;
    }
}

const updateCars = () => {
    $("#list").html("");
    let brand = $("#brand");
    let img = $("#imgLink");
    let price = $("#price");
    let model = $("#model");
    let year = $("#year");

    if(brand.val() != ""){
        let car = new Car(brand.val(), img.val(), price.val(), model.val(), year.val());
        brand.val(""), img.val(""), price.val(""), model.val(""), year.val("");
        cars.push(car);
    }
    cars.forEach(element => {
        $("#list").append(`<li>Brand: ${element.brand}, Img: ${element.img}, Price: ${element.price}, Model: ${element.model}, Year: ${element.year},</li>`);
    });
    console.clear();
    console.log(cars);
}

// Base 10 Cars 
let car1 = new Car("Brand 1", "Image 1", "Price 1", "Model 1", "Year 1");
let car2 = new Car("Brand 2", "Image 2", "Price 2", "Model 2", "Year 2");
let car3 = new Car("Brand 3", "Image 3", "Price 3", "Model 3", "Year 3");
let car4 = new Car("Brand 4", "Image 4", "Price 4", "Model 4", "Year 4");
let car5 = new Car("Brand 5", "Image 5", "Price 5", "Model 5", "Year 5");
let car6 = new Car("Brand 6", "Image 6", "Price 6", "Model 6", "Year 6");
let car7 = new Car("Brand 7", "Image 7", "Price 7", "Model 7", "Year 7");
let car8 = new Car("Brand 8", "Image 8", "Price 8", "Model 8", "Year 8");
let car9 = new Car("Brand 9", "Image 9", "Price 9", "Model 9", "Year 9");
let car10 = new Car("Brand 10", "Image 10", "Price 10", "Model 10", "Year 10");
cars.push(car1, car2, car3, car4, car5, car6, car7, car8, car9, car10);
updateCars();

fetch("https://dummyjson.com/products")
.then(res => res.json())
.then(data => 
    data.products.forEach(element => {
        console.log(element);
        $("#list2").append(`<li>Title: ${element.title}, <br>Description: ${element.description}, <br>Price: ${element.price} <br><img src="${element.thumbnail}"></li>`);
    })
);

