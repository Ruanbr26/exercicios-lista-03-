const exercicio01 = document.querySelector("#ex001")
const exercicio02 = document.querySelector("#ex002")
const exercicio03 = document.querySelector("#ex003")
const exercicio04 = document.querySelector("#ex004")
const exercicio05 = document.querySelector("#ex005")
const exercicio06 = document.querySelector("#ex006")
const exercicio07 = document.querySelector("#ex007")
const exercicio08 = document.querySelector("#ex008")
const exercicio09 = document.querySelector("#ex009")
const exercicio10 = document.querySelector("#ex010")
const exercicio11 = document.querySelector("#ex011")
const exercicio12 = document.querySelector("#ex012")
const exercicio13 = document.querySelector("#ex013")
const exercicio14 = document.querySelector("#ex014")
const exercicio15 = document.querySelector("#ex015")
const res = document.querySelector(".res")

exercicio01.addEventListener("click", () => {

    let contadora = 1
    while (contadora <= 10) {
        res.innerHTML += contadora
        contadora++
    }
})




exercicio02.addEventListener("click", () => {
    /* escreva um programa que calcule a soma dos numeros de 1 a 100 usando loop "while*/
    let contadora = 1
    let soma = 0
    while (contadora <= 100) {
        soma += contadora
        contadora++
    }
    res.innerHTML = `o resultado da soma = ${soma} `
})








exercicio03.addEventListener("click", () => {
let contadora = 1 
while (contadora <= 50){
     if(contadora % 2 == 0) {
        res.innerHTML += contadora
     }
    contadora++

}

})
exercicio04.addEventListener("click", () => {
/*faça um numero que leia os 5 numeros inteiros que use o loop "while" e exiba as medidas aritimetica dos valores lidos */
clearDiv()

let contadora = 1 
let soma = 0 
let media = 0
while (contadora <=5 ) {
    const numero = Number(prompt(`digite o ${contadora} ° numero`))
    soma += numero
    contadora++
}
media = soma / 5 
res.innerHTML = media 
})



exercicio05.addEventListener("click", () => {
const numero = parseInt(prompt("digite um numero"))
let contadota = 1 
while (contadora <= 10) {
    res.innerHTML += `<p>${numero} x ${contadora} 
    = ${ numero * contadora}</p>`

    contadora++
}
})



exercicio06.addEventListener("click", () => {
clearDiv()
let numero = parseInt (prompt("digite  um numero "))

let contadora = 1 
while(contadora <= numeoro){
    if(numero % contadora == 0) {
        res.innerHTML += contadora + "<br>"
    }
    contadora++
}


})