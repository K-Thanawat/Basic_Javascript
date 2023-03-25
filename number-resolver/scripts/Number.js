const maxInput = document.getElementById('max-input')
const minInput = document.getElementById('min-input')
const resultText = document.getElementById('result-text')

const findLargest = () => {
    const max = +maxInput.value
    const min = +minInput.value

    let index = max
    let price = 0

    do{
        let loop = 2
        let limit = index
        let Isprime = true

        do{
            if(index % loop === 0){
                Isprime = false
                break
            }loop++
        }while(loop < limit)
        
        if(Isprime){
            prime = index
            break
        }index--
    }while(index >= min)

    if(prime !== 0){
        resultText.innerHTML = prime
    }
    else{
        resultText.innerHTML = 'NO PRICE NUMBER'
    }
}

const findLowest = () => {
    const max = +maxInput.value
    const min = +minInput.value
    let isPrime = 0

    for(let index = min; index < max; index++){
        let Isprime = true
        for(let nestIndex = 2; nestIndex < index; nestIndex++){
            if(index % nestIndex === 0){
                Isprime = false
                break
            }
        }
        
        if(Isprime){
            prime = index
            break
        }
    }
    if(prime !== 0){
        resultText.innerHTML = prime
    }
    else{
        resultText.innerHTML = 'NO PRICE NUMBER'
    }
}