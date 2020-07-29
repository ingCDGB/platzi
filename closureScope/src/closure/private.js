const person = () =>{
    var saveName = "name"

    return {
        getName: () =>{
            return saveName
        },
        setName: (name) =>{
            saveName = name
        }
    }
}


const carlos = person()

console.log(carlos.getName())
carlos.setName('Carlos David')
console.log(carlos.getName())