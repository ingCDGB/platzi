const anotherFunction = () =>{
    //for (var i=0; i<10; i++){//siempre muestra 10
    for (let i=0; i<10; i++){//muestra bien las iteraciones
        setTimeout(() => console.log(i) , 1000)
    }
}
anotherFunction()