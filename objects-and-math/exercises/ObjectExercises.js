let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};

let monkey = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6
};

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5
};


let micro = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1
};
let animalList = [superChimpOne, salamander, monkey, dog, micro];
// After you have created the other object literals, add the astronautID property to each one.
function addId(list) {
  for (let i = 0; i < list.length; i++){
   let selectedAnimal = list[i];
   selectedAnimal["ID"] = Math.floor(Math.random()*10);
   console.log(selectedAnimal.ID + selectedAnimal.name);
   // selectedAnimal["ID"] = Math.floor(Math.random()*10);
  } 
}
console.log(addId(animalList));
// Create an array to hold the animal objects.

// Print out the relevant information about each animal.
function printInfo(a){
console.log(a);
}
console.log(animalList.map(printInfo));
// Start an animal race!