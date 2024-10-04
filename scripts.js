// STEP 1: DECLARING ARRAYS

// Declare the array
let list = ["God of War", 1, "PS5", 2, "XBOX", "Gran Turismo"];

// Print to co nsole
console.log(list);

// STEP 2: ACCESSING ARRAYS
let firstIndex = list.at(0);

let lastIndex = list.at(-1);

let middleIndex = list.at(2);

// Print to console
console.log("First Element:", firstIndex);
console.log("Last Element:", lastIndex);
console.log("Middle Element:", middleIndex);

// STEP 3: USING ARRAY PROPERTIES

let arrayLength = list.length;

// Print to console
console.log("Number of elements in the array:", arrayLength);


// STEP 4: ARRAY METHODS

// using push()
list.push("Nintendo Switch");
console.log(list);

// using pop()
list.pop();
console.log(list);

// unshift()
list.unshift("PlayStation 4");
console.log(list);

// STEP 5: ITERATING 

// forEach
list.forEach((element, index) => {
  console.log(`Element ${index}: ${element}`);
});

// STEP 6: DESTRUCTING??? 
// very confused
