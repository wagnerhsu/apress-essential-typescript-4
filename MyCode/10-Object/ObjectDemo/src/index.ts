import assert from 'assertion'
const obj = {
    a:1,
    b: {
        c:2
    }
}
assert.equal("c" in obj, false);
assert.equal("b" in obj, true);

type Person = {
    id: string,
    name: string, 
    city: string,
};

type Employee = {
    id: string,
    company: string,
    dept: string
};

type EmployedPerson = Person & Employee;

let people: Person[] =
 [{ id: "bsmith", name: "Bob Smith", city: "London" },
 { id: "ajones", name: "Alice Jones", city: "Paris"},
 { id: "dpeters", name: "Dora Peters", city: "New York"}];
let employees: Employee[] =
 [{ id: "bsmith", company: "Acme Co", dept: "Sales" },
 { id: "dpeters", company: "Acme Co", dept: "Development" }];

 const defaults = { company: "None", dept: "None"};
 console.log({...people[0], ...employees.find(e=>e.id == "bsmith") || {...defaults}});