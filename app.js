let dirt = {
  count: 0,
  mulitplier: 1,
  passive: 0
};
let countAdd = 0;
let multiplier = {
  count: 1
};

let shovel = {
  purchased: 0,
  count: 0,
  cost: 20,
  countAdd: 1
};
let drill = {
  purchased: 0,
  count: 0,
  cost: 400,
  multiplierAdd: 1.5
};
let digger = {
  purchased: 0,
  count: 0,
  cost: 50,
  passiveAdd: 1
};
let driller = {
  purchased: 0,
  count: 0,
  cost: 75,
  passiveAdd: 5
};
let dirtTotal = document.querySelector("#dirt-total");
let multiplierTotal = document.querySelector("#multiplier-total");
let clickAdd = document.querySelector("#click-add");
let passiveTotal = document.querySelector("#passive-add");
let shovelOnpage = document.querySelector("#shovel");
let drillerOnpage = document.querySelector("#driller");
let drillOnpage = document.querySelector("#drill");
let diggerOnpage = document.querySelector("#digger");
let shovelCost = document.querySelector("#shovel-cost");
let drillCost = document.querySelector("#drill-cost");
let drillerCost = document.querySelector("#driller-cost");
let diggerCost = document.querySelector("#digger-cost");

function mine() {
  dirt.count++;
  dirt.count += countAdd;
  dirt.count *= multiplier.count;
  drawMine();
}

function drawMine() {
  dirtTotal.innerText = dirt.count;
  multiplierTotal.innerText = multiplier.count;
  clickAdd.innerText = countAdd;
  passiveTotal.innerText = dirt.passive;
  shovelOnpage.innerText = shovel.purchased;
  drillerOnpage.innerText = driller.purchased;
  drillOnpage.innerText = drill.purchased;
  diggerOnpage.innerText = digger.purchased;
  shovelCost.innerText = shovel.cost;
  drillCost.innerText = drill.cost;
  drillerCost.innerText = driller.cost;
  diggerCost.innerText = digger.cost;
}
drawMine();

function purchaseShovel() {
  if (dirt.count >= shovel.cost) {
    dirt.count -= shovel.cost;
    shovel.purchased++;
    countAdd++;
    shovel.cost += 4;
  }
  drawMine();
}

function purchaseDrill() {
  if (dirt.count >= drill.cost) {
    dirt.count -= drill.cost;
    drill.purchased++;
    multiplier.count++;
    drill.cost += 100;
  }
  drawMine();
}
function purchaseDigger() {
  if (dirt.count >= digger.cost) {
    dirt.count -= digger.cost;
    digger.purchased++;
    dirt.passive++;
    digger.cost += 8;
    setInterval(function() {
      dirt.count += dirt.passive;
      drawMine();
    }, 3000);
  }
  drawMine();
}
function purchaseDriller() {
  if (dirt.count >= driller.cost) {
    dirt.count -= driller.cost;
    driller.purchased++;
    dirt.passive += 2;
    driller.cost += 10;
    setInterval(function() {
      dirt.count += dirt.passive;
      drawMine();
    }, 3000);
  }
  drawMine();
}

function dirtInterval() {
  dirt.count += dirt.passive;
}
