# Explain first class and second class citizens in an md file  

A programming language is said to have First-class citizen when functions in that language are treated like any other variable

const foo = function() {
   console.log("foobar");
}

foo();

While second class citizen is an entity of which the value can be passed as a parameter, but that can neither be returned from a function, nor can it be assigned to a variable.