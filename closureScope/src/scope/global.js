//No nos da error si se declara dos veces 
//la misma variable con var
//Es decir, puede ser reasignada
var hello = 'hello Carlos'
var hello = 'hello 2' 

//con let y const no se podrá reasignar la variable
let world = 'David'
//let world = 'David 2'
const helloWorld = 'Hello world!'

const anotherFunction = () => {
    console.log(hello)
    console.log(world)
    console.log(helloWorld)
}
anotherFunction()

const helloWorld2 = () => {
    //se esta creando una variable global 
    //aunque este dentro de la function
    globalVar = 'i am global var into helloWorld2 function'    
}

helloWorld2()
console.log(globalVar)

//al crear una function y a esta funcion
//le asignamos una doble asignacion de variables

const otraFuncion = () => {
    var localVar = globalVar2 = 'globalVar2 Tambien es var global'
}
otraFuncion()
//console.log(localVar) NO ES GLOBAL
console.log(globalVar2) //SI ES GLOBAL