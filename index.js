
let totalScore = 0;

let nameuser = document.getElementById("nameuser");
nameuser.innerText = localStorage['objectToPass'];
localStorage.removeItem('objectToPass');

document.getElementById("add-spec").addEventListener("submit", function(e) {
    e.preventDefault()

    let selectp = document.getElementById("processor");
    let valuep = selectp.options[selectp.selectedIndex].value;
    let benchProcie =valuep *(Math.floor(Math.random() * (1000 - 800 + 1) ) + 800)
    console.log(benchProcie);

    let selectv = document.getElementById("vga");
    let valuev = selectv.options[selectv.selectedIndex].value;
    let benchVga =valuev *(Math.floor(Math.random() * (1000 - 800 + 1) ) + 800)
    console.log(benchVga);

    let selectm = document.getElementById("motherboard");
    let valuem = selectm.options[selectm.selectedIndex].value;
    let benchMobo =valuem *(Math.floor(Math.random() * (1000 - 800 + 1) ) + 800)
    console.log(benchMobo);

    let selectr = document.getElementById("ram");
    let valuer = selectr.options[selectr.selectedIndex].value;
    let benchRam =valuer *(Math.floor(Math.random() * (1000 - 800 + 1) ) + 800)
    console.log(benchRam);

    totalScore = Number(benchProcie) + Number(benchVga) + Number(benchMobo) + Number(benchRam);
    
    let resultScore = document.getElementById("score");
    resultScore.innerText = totalScore;

    let pcspec = document.getElementById("pcspec");
    let recomgame = document.getElementById("recomgame");

    if(totalScore === 0) {
        pcspec.innerText = "n/a";
    } else if(totalScore >= 9750 ) {
        pcspec.innerText = "high";
        recomgame.innerText = 
        "1. Forza Horizon 5\n2. Cyberpunk 2077\n3. Red Dead Redemption 2";
    } else if (totalScore >= 6800) {
        pcspec.innerText = "mid";
        recomgame.innerText = 
        "1. Dark Souls II\n2. The Elder Scrolls V: Skyrim\n3. Fallout 3";
    } else {
        pcspec.innerText = "low";
        pcspec.innerText = "low";
        recomgame.innerText = 
        "1. Minecraft\n2. Zuma\n3. Plants vs. Zombies";
    }
    // if(totalScore === 0) {
    //     pcspec.innerText = "n/a";
    // } else if(totalScore <= 4) {
    //     pcspec.innerText = "low";
    //     recomgame.innerText = 
    //     "1. Minecraft\n2. Zuma\n3. Plants vs. Zombies";
    // } else if (totalScore <= 8) {
    //     pcspec.innerText = "mid";
    //     recomgame.innerText = 
    //     "1. Dark Souls II\n2. The Elder Scrolls V: Skyrim\n3. Fallout 3";
    // } else {
    //     pcspec.innerText = "high";
    //     recomgame.innerText = 
    //     "1. Forza Horizon 5\n2. Cyberpunk 2077\n3. Red Dead Redemption 2";
    // }
})

document.getElementById("processor").addEventListener("input", function(e) {
    let processor = document.getElementById("processor");
    processor.setAttribute("disabled", true);
})

document.getElementById("vga").addEventListener("input", function(e) {
    let vga = document.getElementById("vga");
    vga.setAttribute("disabled", true);
})

document.getElementById("motherboard").addEventListener("input", function(e) {
    let motherboard = document.getElementById("motherboard");
    motherboard.setAttribute("disabled", true);
})

document.getElementById("ram").addEventListener("input", function(e) {
    let ram = document.getElementById("ram");
    ram.setAttribute("disabled", true);
})

document.getElementById("add-spec").addEventListener("reset", function(e) {
    location.reload();
})