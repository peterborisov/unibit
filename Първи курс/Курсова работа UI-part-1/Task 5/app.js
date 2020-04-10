class Car {
    constructor(make, year, color, minPrice, maxPrice, doors, extras) {
        this.make = make;
        this.year = year;
        this.color = color;
        this.minPrice = minPrice;
        this.maxPrice = maxPrice;
        this.doors = doors;
        this.extras = extras;
    }
}

function createCarProfile() {
    let make = document.getElementById('make'),
        year = document.getElementById('year'),
        color = document.getElementById('color'),
        minPrice = document.getElementById('minPrice'),
        maxPrice = document.getElementById('maxPrice'),
        submit = document.getElementById('submit'),
        carResult = document.getElementById('carResult');

    submit.onclick = () => {
        let userCar = new Car(make[make.selectedIndex].value, year.value, color.value, minPrice.value,
            maxPrice.value, doors(), extras());
        carResult.innerText =
            `Make: ${userCar.make}
        Year: ${userCar.year}
        Color: ${userCar.color}
        Min price: ${userCar.minPrice}
        Max price: ${userCar.maxPrice}
        Doors: ${userCar.doors}
        Extras: ${userCar.extras}`;
    }
}

function doors() {
    let door = document.getElementsByName('doors');
    let doorsResult = '';
    door[0].checked ? doorsResult = door[0].value :
        door[1].checked ? doorsResult = door[1].value : doorsResult = '';
    return doorsResult;
}

function extras() {
    let extras = document.getElementsByName('extras');
    let extrasResult = [];
    extras.forEach(e => {
        if (e.checked) {
            extrasResult.push(e.value);
        }
    })
    return extrasResult;
}

createCarProfile();
