const fruits = () =>{
    if(true){
        //con var asignamos la variable 
        //a nivel de la funcion
        var fruits1 = 'apple'
        let fruits2 = 'banana'
        const fruits3 = 'kiwi'
        
        console.log(fruits2)
        console.log(fruits3)
    }
    
    console.log(fruits1)
    //console.log(fruits2) ERROR 
    //console.log(fruits3) ERROR
}
//var
//   es una asignación a nivel
//   local dentro de la funcion
//let 
//   es una asignacion a nivel de bloque
//const 
//  asignacion de bloque
fruits()

let x = 1
{
    let x = 2
    console.log('let x = '+x)    
}
console.log('let x = '+x)   
var y = 1
{
    var y = 2
    console.log('var y = '+x)    
}
console.log('var y = '+x)


const anotherFunction = () =>{
    //for (var i=0; i<10; i++){//siempre muestra 10
    for (let i=0; i<10; i++){//muestra bien las iteraciones
        setTimeout(() => console.log(i) , 1000)
    }
}
anotherFunction()