// 4. Arrays

//1.1
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

console.log(avengers[0]);

//1.2
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

function cambiarAvengers() {
  avengers.shift();
  avengers.unshift("IRONMAN");
  console.log(avengers);
}

cambiarAvengers();

//1.3
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

alert(avengers.length);

//1.4
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

rickAndMortyCharacters.push("Morty", "Summer");

console.log(rickAndMortyCharacters.length);

console.log(rickAndMortyCharacters[4]);

//1.5
const rickAndMortyCharacters = [
  "Rick",
  "Beth",
  "Jerry",
  "Morty",
  "Summer",
  "Lapiz Lopez",
];

rickAndMortyCharacters.pop();

console.log(rickAndMortyCharacters.length);

console.log(rickAndMortyCharacters[0], rickAndMortyCharacters[4]);

//1.6
const rickAndMortyCharacters = [
  "Rick",
  "Beth",
  "Jerry",
  "Morty",
  "Summer",
  "Lapiz Lopez",
];

rickAndMortyCharacters.splice(1, 1);
console.log(rickAndMortyCharacters);