const Bros = ['Bilal', 'Mehtab', 'Assad', 'Shery'];
const BrosComplete = ['Baba', 'Ammi'];
const name = 'Mehtab';
const age = 29;
const occupation = 'programmer';
const company = 'KOMATSU';
console.log(Bros, BrosComplete, name,age, occupation, company);
// Promises
const PostsPromise = fetch('https://jsonplaceholder.typicode.com/users');
const StreetCarsPromise = fetch('http://data.ratp.fr/api/datasets/1.0/search/?q=paris');


Promise
  .all([PostsPromise, StreetCarsPromise])
  .then(responses => Promise.all(responses.map(res => res.json())))
  .then((responses) => { console.log(responses); });
