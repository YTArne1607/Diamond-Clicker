/*let diamond = document.querySelector(".dia-zähler");
let parsedDia = parseFloat(diamond.innerHTML);

let clickerCost = document.querySelector(".clicker-cost");
let parsedPickaxeCost = parseFloat(clickerCost.innerHTML);
let PickaxeLevel = document.querySelector(".pickaxe-level");
let clickerIncrease = document.querySelector(".clicker-increase");
let parsedClickerIncrease = parseFloat(clickerIncrease.innerHTML);

let gpc = 1;

function incrementDia() {
    diamond.innerHTML = Math.round(parsedDia += gpc);
}

function buyPickaxe() {
    if (parsedDia >= parsedPickaxeCost) {
        diamond.innerHTML = Math.round(parsedDia -= parsedPickaxeCost);

        PickaxeLevel.innerHTML ++

        parsedClickerIncrease = parseFloat((parsedClickerIncrease * 1.03).toFixed(2))
        clickerIncrease.innerHTML = parsedClickerIncrease;
        gpc += parsedClickerIncrease;

        parsedPickaxeCost *= 1.18;
        clickerCost = Math.round(parsedPickaxeCost)
    }
}*/

var diamanten = 0;
var parsedDiamanten = parseFloat(diamanten.innerHTML);
var dpc = 1;
var dps = 1.1;
var pickaxeCost = 15;
var diaZahl = document.getElementById("dia-zähler");
var pickeLevel = document.getElementById("picke-level");
var parsedPickeLevel = parseFloat(pickeLevel.innerHTML);
var level = 1;
var minerCost = 40;
var minerLevel = document.getElementById("miner-level");
var parsedMinerLevel = parseFloat(minerLevel.innerHTML);
let clickerIncrease = document.getElementById("clicker-increase");
let parsedClickerIncrease = parseFloat(clickerIncrease.innerHTML);


function clicker() {
    diaZahl.innerHTML = Math.round(diamanten += dpc);
}

function buyPickaxe() {
    if (diamanten >= pickaxeCost) {
        dpc += 1;
        diaZahl.innerHTML = Math.round(diamanten -= pickaxeCost);
        pickeLevel.innerHTML = Math.round(parsedPickeLevel += level);
        //pickaxeCost.innerHTML = Math.round(pickaxeCost.innerHTML *= 2);
        document.getElementById("pickaxe-cost").innerHTML = Math.round(pickaxeCost *= 1.18);
    }
}

function buyMiner() {
    if (diamanten >= minerCost) {
        dpc += 1;
        dps *= 1.001;
        diaZahl.innerHTML = Math.round(diamanten -= minerCost);
        minerLevel.innerHTML = Math.round(parsedMinerLevel += level);
        //pickaxeCost.innerHTML = Math.round(pickaxeCost.innerHTML *= 2);
        document.getElementById("miner-cost").innerHTML = Math.round(minerCost *= 1.18);
        setInterval (() => {
            document.getElementById("dia-zähler").innerHTML = Math.round(diamanten += dps);
        }, 1000)
    }
}

