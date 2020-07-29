
var scope = 'scope es global'

const helloWorld = () =>{
    const hello = 'hello'
    console.log(hello)
}

helloWorld()
//TIRA ERROR
//console.log(hello) NO ES GLOBAL

const functionScope = () =>{
    var scope = 'global ahora es local'

    const func = () =>{
        return scope// acceso a scope local
    }
    
    console.log(func())
}

functionScope()

console.log(scope)