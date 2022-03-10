const fruits = [{color: 'red', fruit: 'apple'}, {color: 'red', fruit: 'plum'}];
const veggies = [{color: 'pink', veggie: 'onion'}, {color: 'pink', veggie: 'tree'}];
process.env.FRUITS = JSON.stringify(fruits);
process.env.VEGGIES = JSON.stringify(veggies);
