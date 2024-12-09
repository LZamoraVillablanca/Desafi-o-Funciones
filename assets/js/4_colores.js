const divs = document.querySelectorAll('#c1, #c2, #c3, #c4')

divs.forEach((div) => {
    div.style.height = '200px'
    div.style.width = '200px'
    div.style.border = '1px solid #000'
})


document.querySelector('#c1').style.backgroundColor = 'blue'
document.querySelector('#c2').style.backgroundColor = 'red'
document.querySelector('#c3').style.backgroundColor = 'green'
document.querySelector('#c4').style.backgroundColor = 'yellow'


function paintBlack(event) {
    event.target.style.backgroundColor = 'black'
}


divs.forEach((div) => {
    div.addEventListener('click', paintBlack);
})


const pintarUnico = (color) => {
    const unico = document.getElementById("unico")
    unico.style.backgroundColor = color
}


const crearDiv = (color) => {
    const nuevoDiv = document.createElement("div")
    nuevoDiv.style.height = "200px"
    nuevoDiv.style.width = "200px"
    nuevoDiv.style.border = "1px solid #000"
    nuevoDiv.style.backgroundColor = color
    document.body.appendChild(nuevoDiv)
}


document.addEventListener("keydown", (event) => {

    if (event.key === "a") {
        pintarUnico("pink")
    }
    else if (event.key === "s") {
        pintarUnico("orange")
    }
    else if (event.key === "d") {
        pintarUnico("skyblue")
    }

    else if (event.key === "q") {
        crearDiv("purple")
    }

    else if (event.key === "w") {
        crearDiv("gray")
    }
    else if (event.key === "e") {
        crearDiv("brown")
    }

    console.log(event.key)
})

