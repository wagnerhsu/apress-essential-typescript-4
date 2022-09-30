import assert from 'assertion'
enum Product { Hat, Gloves = 3, Umbrella }

let p = Product.Gloves;
console.log(p);
console.log(Product.Gloves + 10);
enum City { London = "London", Paris = "Paris", NY = "New York" }
assert.equal(City.London.charAt(1), 'o');

let productValue: Product = 1;
console.log(productValue);
let cityValue: City = City.London;
console.log(cityValue);