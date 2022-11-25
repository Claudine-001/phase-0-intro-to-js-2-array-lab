let cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
cats.push(name)
}

function destructivelyPrependCat(name){
    cats.unshift(name)
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(name){
    let temporaryCatName = cats.slice()
    temporaryCatName.push(name)
    return temporaryCatName
}

function prependCat(name){
    let temporaryCatName = cats.slice()
    temporaryCatName.unshift(name)
    return temporaryCatName
}

function removeLastCat(){
    let temporaryCatName = cats.slice()
    temporaryCatName.pop()
    return temporaryCatName
}

function removeFirstCat(){
    let temporaryCatName = cats.slice()
    temporaryCatName.shift()
    return temporaryCatName
}