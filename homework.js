//Question #1

function dog(astring,arrayString){
    let newList = astring.split(' ')
    let result = []
    for(let i = 0; i < arrayString.length; i++){
        if(newList.includes(arrayString[i])){
            result.push(arrayString[i])
        }
    }
    return result
}


console.log(dog("Come here Fido and Gizmo come here",["Max","Fido","Gizmo","Nala"]))
console.log(dog("My Dog is fast, her name is Tippi",["Max","Fido","Gizmo","Nala"]))

//Question #2

function inchFeet(array){
    let result = [ ];
    for(let i = 0; i < array.length; i++){
        let b = array[i] / 12;
        result.push(b)
    
    }
    return result;
}

console.log(inchFeet([66, 64, 60, 52, 72, 80, 51]))


//Question #3

function hello(array){
    result = []
    var word;
    for(let i = 0; i < array.length; i++){
        if(array[i].endsWith('o')){
            word = array[i] + ' is eating pizza'
        }else{
            word = array[i] + ' is being rude'
        }
        result.push(word)
    }
    return result
}

console.log(hello(["Leonardo", "Michelangelo", "Donatello", "Raphael"]))


//question 4

function sean(array){
    let num = -1
    for(let i =0; i <array.length; i++){
        if (array[i] > num){
            num = array[i]
        }
    }
    return num
}

console.log(sean([123,5436,45784,1234,34,65,234125,645,3452,13216,49]))





