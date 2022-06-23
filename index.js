

let processor = document.getElementById("processor")
let motherboard = document.getElementById("motherboard")
let vga = document.getElementById("vga")
let ram = document.getElementById("ram")
let resultScore = document.getElementById("score")

let totalScore = 0


function calcProcie(e) { // processor
    let value = e.target.value
    let score = 0

    if (value === "i3") {
        score += 1
    } else if (value === "i5") {
        score += 2
    }else if (value === "i7") {
        score += 3
    }else if (value === "r3") {
        score += 1
    }else if (value === "r5") {
        score += 2
    }else if (value === "r7") {
        score += 3
    }
    totalScore += score
    resultScore.innerText = totalScore
}

function calcMobo(e) { // motherboard
    let value = e.target.value
    let score = 0

    if (value == "a") {
        score += 1
    } else if (value == "b") {
        score += 2
    }else if (value == "x") {
        score += 3
    }
    totalScore += score
    resultScore.innerText = totalScore
}

function calcGpu(e) { // vga
    let value = e.target.value
    let score = 0

    if(isNaN(Number(value))) {
        if (value == "hd") {
            score += 1
        } else  if (value == "r") {
            score += 2
        } else  if (value == "rx") {
            score += 3
        }
    } else {
        let gen = Number(value)
        if( gen >= 5 && gen <= 7) {
            score +=1
        } else   if( gen >= 9 && gen <= 16) {
            score +=2
        } else   if( gen >= 17) {
            score +=3
        }
    }
    totalScore += score
    resultScore.innerText = totalScore
}


function calcRam(e) { // ram
    let value = e.target.value
    let score = 0

    let storage = Number(value)
    if(storage >= 16) {
        score += 3
    } else if (storage >= 8) {
        score += 2
    } else {
        score += 1
    }
    totalScore += score
    resultScore.innerText = totalScore
}



processor.addEventListener("input", calcProcie)
motherboard.addEventListener("input", calcMobo)
vga.addEventListener("input", calcGpu)
ram.addEventListener("input", calcRam)