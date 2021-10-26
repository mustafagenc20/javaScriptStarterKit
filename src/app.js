// console.log('Hello world')

// let dolarDun = 9.20;
// let dolarBugun = 9.30;

// {
//     let dolarDun = 9.10;
// }

// console.log(dolarDun);

// const euroDun = 11.2;
// // euroDun = 11; atama yaparsak hata verir
// console.log(euroDun);

// // array
// // camelCasing
// // PascalCasing
// let konutKredileri = ["Konut kredisi", "Tasit kredisi", "Ozel kredi"];
// console.log(konutKredileri)


// console.log("<ul>")
    
// for (let index = 0; index < konutKredileri.length; index++) {
//     // const element = konutKredileri[index];
//     // console.log("<li>" + element + "</li>")
//     console.log("<li>" + konutKredileri[index] + "</li>")
    
// } 
// console.log("<ul>")

let sayi1 = 10;
sayi1 = "MG"
// // console.log(sayi1)

let student ={id: 1 , name : "Mustafa"}


// function save(ogrenci, puan=10) {
//     console.log(ogrenci.name + " : " + puan)
// }
// save(student,100);

let students =["MG", "JHG", "SG"]
// // console.log(students)
let students2 =[student, {id: 2 , name : "MGNC"},"ankara",{city:"istanbul"}]
// console.log(students2)

// rest-params-varArgs
let showProducts = function (id, ...products) {
    console.log(id)
    console.log(products)
}

// console.log(typeof showProducts())
// showProducts(10,"elma", "armut", "karpuz")

// spread
let points = [1,2,3,4,54,34,62,7]
console.log(...points)
// console.log(Math.max(1,2,3,4,54,34,62,7))
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H")

// destructuring
let populations = [10000,20000,30000,[40000,100000]]
let [small,medium,high,[veryHigh, maximum]] = populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1],number) {
    console.log(small1)
}
someFunction(populations)

let category = {id:1,name:"drinks"}
console.log(category.id)
console.log(category["name"])

let {id,name} = category
console.log(id)
console.log(name)