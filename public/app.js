/*
var rabbit = {};
rabbit.speak = function (line) {
    console.log("The rabbit says '" + line + "'");
};
rabbit.speak("I'm alive.");
console.log(rabbit);

function speak(line) {  // this is a function that is not a method of any object
    console.log("The " + this.type + " rabbit says '" + line + "'"); // this refers to the object that the function was called on
}
var whiteRabbit = { type: "white", speak: speak }; // speak is a method of whiteRabbit
var fatRabbit = { type: "fat", speak: speak };  // speak is a method of fatRabbit

whiteRabbit.speak("Oh my ears and whiskers, " + "how late it's getting!"); // this refers to whiteRabbit
fatRabbit.speak("I could sure use a carrot right now.");  // this refers to fatRabbit
console.log(whiteRabbit);  // this refers to whiteRabbit
console.log(fatRabbit);   // this refers to fatRabbit

function speak(line) {
    console.log("The " + this.type + " pig says " + line);
}
var blackPig = { type: "black", speak: speak };
var pinkPig = { type: "pink", speak: speak };

blackPig.speak("I'm happy." + "I'm rich.");
pinkPig.speak("I'm sad." + "I'm poor.");



var empty = {};
console.log(empty.toString);
console.log(empty.toString());

console.log(Object.getPrototypeOf({}) == Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype));

console.log(Object.getPrototypeOf(isNaN) == Function.prototype);
console.log(Object.getPrototypeOf([]) == Array.prototype);

var protoRabbit = {
    speak: function (line) {
        console.log(this.type + " królik mówi: „" + line + "”");
    }
};
var killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "Zabójczy";
killerRabbit.speak("ARGHHHH!");
// → Zabójczy królik mówi: „ARGHHHH!”

Rabbit.prototype.speak = function (line) {
    console.log("The " + this.type + " rabbit says '" + line + "'");
};
blackRabbit.speak("Doom...");
// → The black rabbit says 'Doom...'
*/

