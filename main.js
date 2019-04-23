var money = 0;
let moneybutton = document.getElementById("makemoney");
let hungry = document.getElementById("hunger");
let sleepy = document.getElementById("sleep");
let play = document.getElementById("happy");



moneybutton.addEventListener("click", function () {
   money += 1;
   displaymoney(money);
});
hungry.addEventListener("click", function () {
    if (money < 10){
        return false;
    }
    else {
        money -= 10;
        displaymoney(money);
    }
});

sleepy.addEventListener("click", function () {
    if (money < 10){
        return false;
    }
    else {
        money -= 10;
        displaymoney(money);
    }
});
play.addEventListener("click", function () {
    if (money < 10){
        return false;
    }
    else {
        money -= 10;
        displaymoney(money);
    }
});

function displaymoney(moneylist){
    var kill = document.getElementById("money");
    kill.innerHTML = " ";
    kill.innerHTML = "$" + moneylist;



}