//ES2015 Version of same keys and values

function createInstructor(firstName, lastName) {
    return {
        firstName,
        lastName
    }
}

//ES2015 version of computed property names

let favoriteNumber = 42;

let instructor = {
    firstName: "Colt",
    [favoriteNumber] : "That is my favorite!"
}

instructor[favoriteNumber] = "That is my favorite!"

//object methods ES2015 version

let instructor = {
    firstName = "Colt",
    sayHi() {
        return "Hi!";
    },
    sayBye() {
        return this.firstName + " says bye!";
    }
}

//createAnimal function

function createAnimal(species, verb, noise) {
    return {
        species,
        [verb]() {
            return noise;
        }
    }
}