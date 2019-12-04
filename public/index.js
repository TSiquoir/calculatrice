//Vérifie si c'est un symbole

function isSymbol(value) {
   return ['/', 'x', '-', '+'].indexOf(value) !== -1
}

function getLastChar() {
    return screen.innerHTML.substr(-1)
  }

function addToScreen (value) {
    if (!isStarted) {
        screen.innerHTML = null
        isStarted = true
    }

    const lastChar = getLastChar()

    if (isSymbol(lastChar) && isSymbol(value))
        deleteToScreen()

    screen.innerHTML = screen.innerHTML + value
}

function deleteToScreen(length = -1) {
    screen.innerHTML = screen.innerHTML.slice(0, length)
    if (!screen.innerHTML) {
        screen.innerHTML = 0
        isStarted = false
    }
}

const screen = document.getElementById('screen')
const buttons = document.querySelectorAll('.btn')

let isStarted = false

buttons.forEach(element => {
    element.addEventListener('click', function() {
        console.log(getLastChar)
        let value = this.textContent

        if (value === 'CE') { 
            deleteToScreen()
        } else if (value === '=') { 
            // faire le calcul avec la function eval()
        } else {
            addToScreen(value)
        }
    })
})
console.log(buttons)

