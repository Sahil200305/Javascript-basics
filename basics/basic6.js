// Stack (Primitive)      Heap(Non-Primitive)
// Stack
let Hero = "Hanuman"

let AnotherHero = "ShaktiMan"

console.log(Hero)
console.log(AnotherHero)


// Heap
let user1 = {emailid : "user@gil.com",password : "23434", city : "dehradun"}
 
let Anotheruser1 = user1

Anotheruser1.emailid = "snjd@hot.com"




console.log(user1.emailid);
console.log(Anotheruser1.emailid);