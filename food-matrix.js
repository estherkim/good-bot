const fruits = [{color: 'red', fruit: 'apple'}, {color: 'red', fruit: 'plum'}];
const veggies = [{color: 'pink', veggie: 'onion'}, {color: 'pink', veggie: 'tree'}];

const all = {fruits, veggies};
process.stdout.write(JSON.stringify(all));
