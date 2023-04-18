
let input = document.querySelector(".content input")





function num (num) {
    input.value += num
}

function claer () {
    input.value = ""
}

function delet () {
    input.value = input.value.slice(0 , -1)
}

function numb () {
    try{
        input.value = eval(input.value)
    }catch{
        input.value = "Error"
    }
}