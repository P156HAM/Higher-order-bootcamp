//--------------------------Övning 1----------------------------------
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = [];
for(let i=0; i<numbers.length; i++) {
    if(numbers[i]%2 === 0) {
        evenNumbers.push(numbers[i]);
    }
}
console.log(evenNumbers);



let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers2 = [];
evenNumbers2 = numbers2.filter((number) => number % 2 === 0)

console.log(evenNumbers);

//--------------------------Övning 2------------------------------------

let books = [
    { author: 'Oscar Wilde', title: 'The importance of being earnest'},
    { author: 'Lewis Carroll', title: 'Alice in wonderland'},
    { author: 'Jules Verne', title: 'Around the world in eighty days'},
    { author: 'Victor Hugo', title: ' The Hunchback of Notre-Dame'},
];
let specBook = []; 
specBook = books.filter((book) => (book.author === 'Jules Verne'))

console.log(specBook);

//------------------------------Övning 3------------------------------

let people = [
    { age: 10, name: 'Gun-Britt'},
    { age: 20, name: 'Conny'},
    { age: 30, name: 'Aurora'},
    { age: 40, name: 'Kalle'},
    { age: 55, name: 'Max'},
]
let total = 0;

totalAge = people.reduce((total, user) => user.age + total, 0);
console.log(totalAge);

//-------------------------------Övning 4--------------------------

let numbers3 = [2, 3, 1, 5, 4, 10, 8, 7, 9, 6];

biggestNumber = numbers3.reduce((perviousNumber, currentNumber) => { 
    return perviousNumber < currentNumber ? currentNumber : perviousNumber
}, 0);

console.log(biggestNumber)

//-----------------------------Övning 5-----------------------------

let books2 = [
    { author: 'Oscar Wilde', title: 'The importance of being earnest'},
    { author: 'Lewis Carroll', title: 'Alice in wonderland'},
    { author: 'Jules Verne', title: 'Around the world in eighty days'},
    { author: 'Victor Hugo', title: ' The Hunchback of Notre-Dame'},
]

titles = books2.map((book) => {
    return book.title;
})
console.log(titles)

//----------------------------Övning 6--------------------------------

let people2 = [
    { age: 10, name: 'Gun-Britt'},
    { age: 20, name: 'Conny'},
    { age: 30, name: 'Aurora'},
    { age: 40, name: 'Kalle'},
    { age: 55, name: 'Max'},
]

checkIfUnder40 = people2.map((people) => {
    if(people.age < 40) {
        people.under40 = true
    } else {
        people.under40 = false
    }
})
console.log(people2)

//------------------------------Övning 7-------------------------------

let countries = [
    {
        name : 'Qatar',
        continent : 'Asia'
    },
    {
        name : 'Sweden',
        continent : 'Europe'
    },
    {
        name : 'Brazil',
        continent : 'South America'
    },
    {
        name : 'USA',
        continent : 'North America'
    },
    {
        name : 'Maroco',
        continent : 'Africa'
    },
    {
        name : 'India',
        continent : 'Asia'
    },
    {
        name : 'Canada',
        continent : 'North America'
    },
    {
        name : 'Ethiopia',
        continent : 'Africa'
    },
    {
        name : 'Australia',
        continent : 'Australia'

    },
]

const countryName = countries.map(country => country.name)
const continentName = countries.map(country => country.continent)
const europeanCountry = countries.filter((country) => country.continent === 'Europe' ? country : false)


function searchCountry(searchValue) {
    const result = countries.filter((country) => 
        country.name === searchValue || country.continent === searchValue ? country : console.log('Country not found!'))
    return result
}
console.log(searchCountry('Asia'))




