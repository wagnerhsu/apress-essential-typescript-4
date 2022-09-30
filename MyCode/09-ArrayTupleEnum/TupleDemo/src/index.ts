/*eslint-disable no-debugger*/
const data = new Map();
data.set('Bob', 'London');
data.set('Alice', 'Paris');
debugger;
data.forEach((val, key, map) => console.log(`${key}-${val}`));