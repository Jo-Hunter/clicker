let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let bankEl = document.getElementById("bank-el")
let count = 0
let bankRecord = 0

function increment() {
    count += 1
    countEl.textContent = count
    if(count > bankRecord){
        bankRecord = count
    }
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    bankEl.textContent = bankRecord
}


