let dirt = {
  count: 0,
  mulitplier: 1
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
  cost: 200,
  multiplierAdd: 1.5
};
let digger = {
  purchased: 0,
  count: 0,
  cost: 200,
  passiveAdd: 1
};
let driller = {
  purchased: 0,
  count: 0,
  cost: 6,
  passiveAdd: 5
};
let dirtTotal = document.querySelector("#dirt-total");
let multiplierTotal = document.querySelector("#multiplier-total");
let clickAdd = document.querySelector("#click-add");
let passiveTotal = document.querySelector("#passive-add");

function mine() {
  dirt.count++;
  dirt.count += countAdd;
  dirt.cout * multiplier.count;
  drawMine();
}

function drawMine() {
  dirtTotal.innerText = dirt.count;
  multiplierTotal.innerText = multiplier.count;
  clickAdd.innerText = countAdd;
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
    drill.cost += 4;
  }
  drawMine();
}
function purchaseDigger() {
  if (dirt.count >= digger.cost) {
    dirt.count -= digger.cost;
    digger.purchased++;
    countAdd++;
    digger.cost += 4;
  }
  drawMine();
}
function purchaseDriller() {
  if (dirt.count >= driller.cost) {
    dirt.count -= driller.cost;
    driller.purchased++;
    countAdd++;
    driller.cost += 4;
  }
  drawMine();
}
