let money = 0;
let moneybutton = document.getElementById("makemoney");
let hungry = document.getElementById("hunger");
let sleepy = document.getElementById("sleep");
let play = document.getElementById("happy");



moneybutton.addEventListener("click", function () {
   money += 2;
   displaymoney(money);
});
hungry.addEventListener("click", function () {
    if (money < 10){
        return false;
    }
    else {
        money -= 10;
        hungrybar.value = 100;
        displaymoney(money);
    }
});

sleepy.addEventListener("click", function () {
    if (money < 10){
        return false;
    }
    else {
        money -= 10;
        sleepybar.value = 100;
        displaymoney(money);
    }
});
play.addEventListener("click", function () {
    if (money < 10){
        return false;
    }
    else {
        money -= 10;
        happybar.value = 100;
        displaymoney(money);
    }
});

function displaymoney(moneylist){
    let kill = document.getElementById("money");
    kill.innerHTML = " ";
    kill.innerHTML = "$" + moneylist;



}
setInterval(myTimer, 1000);
let hungrybar = document.getElementById("hungerbar");
let sleepybar = document.getElementById("sleepbar");
let happybar = document.getElementById("happybar");


function myTimer() {
    hungrybar.value -= 1;
    sleepybar.value -= 1;
    happybar.value -= 1;


}