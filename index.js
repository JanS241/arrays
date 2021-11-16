// arrays and objects


//objects

let person = { name: 'Jan', age: 65 };
// console person
console.log(person);

// console only name
console.log(person.name);
console.log(person['name']);

//console only age
console.log(person.age);
console.log(person['age']);

// evaluations
let marks = { evaluations : 7, evaluations: 10, evaluations : 9};
console.log(marks);
// weergegeven waarde is 9

//arrays

let verzameling = [];
verzameling = ['green','blue', 'red'];

console.log(verzameling);

console.log(verzameling.length);

console.log(`number of elements:${verzameling.length}`);

console.log(verzameling[0]);
console.log(verzameling[2]);

verzameling.push('Yellow');
console.log(`number of elements:${verzameling.length}`);
console.log(verzameling[3]);

verzameling.push(5);
console.log(verzameling);
console.log(verzameling[4]);

console.log('samen met de groet wordt:');
verzameling.push ({ greeting: 'hi, I am an object'});
console.log(verzameling);
console.log(verzameling[5].greeting);

// cat example
const catBreeds = [{
    name: "Abyssinian",
    description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    dog_friendly: 4,
    energy_level: 5,
    life_span: "14 - 15",
    origin: "Egypt",
    temperament: ["Active", "Energetic", "Independent", "Intelligent", "Gentle"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
    food: {favourite_food: "fish",
    medium_liked_food: "dried fruits", 
    disliked_food: "walnuts"
    }},
    {name: "Aegean",
    description: "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
    dog_friendly: 4,
    energy_level: 53,
    life_span: "9- 12",
    origin: "Greece",
    temperament: [ "Affectionate", "Social", "Intelligent", "Playful", "Active"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
    food: {favourite_food: "tuna",
    medium_liked_food: "canned food", 
    disliked_food: "all fruits"
    }},
    {name: "American Bobtail",
    description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
    dog_friendly: 5,
    energy_level: 3,
    life_span: "11 - 15",
    origin: "United States",
    temperament: [ "Intelligent", "Interactive", "Lively", "Playful", "Sensitive"],
    wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
    food: {favourite_food: "meaty things",
    medium_liked_food: "tuna", 
    disliked_food: "canned food"
    }}
    ]





// 1 log the name of the last cat breed
console.log(`naam kat nummer drie:  ${catBreeds[2].name}`);

//log the energy level of the first cat breed

console.log('energy level cat breed 1 :'+ catBreeds[0].energy_level);

console.log(`energy level of Abyssinian:  ${catBreeds[0].energy_level}`);
console.log(`Energy level of ${catBreeds[0].name}: ${catBreeds[0].energy_level}`);

// log the first temperament of the temperaments of the second cat breed

console.log(`temperament of cat 2 ${catBreeds[1].temperament[0]}`);
console.log(`temperament of${catBreeds[1].name}: ${catBreeds[1].temperament[0]}`);

// log the last temperamentof the temperaments of the third cat

console.log(`latest temperament of Bobtail:${catBreeds[2].temperament[4]}`);
console.log(`Latest temperament of ${catBreeds[2].name}:${catBreeds[2].temperament[4]}`);

//log the favorite food of the third cat breed
console.log('favorite food of American Bobtail is:' +  ' ' + catBreeds[2].food.favourite_food);
console.log(`favorite food of ${catBreeds[2].name} is: ${catBreeds[2].food.favourite_food}`);
