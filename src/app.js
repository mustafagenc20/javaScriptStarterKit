console.log('Hello world')

let dolarDun = 9.20;
let dolarBugun = 9.30;

{
    let dolarDun = 9.10;
}

console.log(dolarDun);

const euroDun = 11.2;
// euroDun = 11; atama yaparsak hata verir
console.log(euroDun);

// array
// camelCasing
// PascalCasing
let konutKredileri = ["Konut kredisi", "Tasit kredisi", "Ozel kredi"];
console.log(konutKredileri)


console.log("<ul>")
    
for (let index = 0; index < konutKredileri.length; index++) {
    // const element = konutKredileri[index];
    // console.log("<li>" + element + "</li>")
    console.log("<li>" + konutKredileri[index] + "</li>")
    
} 
console.log("<ul>")
