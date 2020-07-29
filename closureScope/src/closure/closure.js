
//NO ES UN CLOSURE
const moneyBox =  (coins) =>{
    var saveCoins = 0
    saveCoins += coins
    console.log(`MoneyBox: $${saveCoins}`)
}

moneyBox(5) //muestra 5
moneyBox(10) //muestra 10
moneyBox(5) //muestra 5

const closure = (numero) => {
    let saveCoins = 0
    console.log(`Mi chanchito num ${numero}`)
    const countCoins = (coins) =>{
        saveCoins += coins
        console.log(`MoneyBox: $${saveCoins}`)
    }

    return countCoins
}

let myMoneyBox = closure(1)

myMoneyBox(5) //muestra 5
myMoneyBox(10) //muestra 15
myMoneyBox(5) //muestra 20


let myMoneyBox2 = closure(2)
myMoneyBox2(3) //muestra 3
myMoneyBox2(7) //muestra 10
myMoneyBox2(5) //muestra 15
