const data = new Map();
data.set("Bob", "London");
data.set("Alice", "Paris");
data.forEach((val, key, map) => console.log(`${key}-${val}`));