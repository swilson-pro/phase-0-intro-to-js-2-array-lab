// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push(name);
}

function destructivelyPrependCat(name) {
    return cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    return cats.pop();

}

function destructivelyRemoveFirstCat() {
    return cats.shift();
}

function appendCat(name) {
    return appendCat = [...cats, name];
}

function prependCat(name) {
    return prependCat = [name, ...cats];
}

function removeLastCat() {
    return removeLastCat = cats.slice(0, cats.length-1);
}

function removeFirstCat() {
    return removeFirstCat = cats.slice(1, cats.length);
}