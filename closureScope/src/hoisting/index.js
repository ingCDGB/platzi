// al compilar el codigo 
// el hoisting declara var a arriba
a = 2 
var a //el hoisting eleva la declaraion
console.log(a)

// este codigo genera un undefined
// dado que esta tratando de acceder 
// y no de declarar
console.log(a)
var a = 2

nameOfDog('el perro')//funciona
//guarda primero en memoria y luego ejecuta
function nameOfDog(name){
    console.log(name)
}

nameOfDog('el perro')