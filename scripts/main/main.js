

//const width = window.innerWidth;
//let height = Telegram.WebApp.viewportStableHeight;
//let app = new PIXI.Application({ width: width * 0.9, height: height});

const moneyElem = document.getElementById("money");

console.log(Telegram.WebApp.initData);
console.log("qwe");
moneyElem.innerHTML = Telegram.WebApp.initData;
// ToDo: getBoons amount
//let boonAmount = 0.01;
// ToDo: getBoons per second
//let boonPerSecond = 0.0001;
// Timer to increase boonAmount
setInterval(() => {moneyElem.innerHTML = Telegram.WebApp.initData;}, 1000);
//setInterval(() => {boonAmount += boonPerSecond; moneyElem.innerHTML = boonAmount.toFixed(4)}, 1000);