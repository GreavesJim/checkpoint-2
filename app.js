let dirt = {
  count: 0,
  mulitplier: 2
};

let shovel = {
  purchased: 0,
  count: 0,
  cost: 50,
  countAdd: 1
};
let drill = [
  {
    purchased: 0,
    count: 0,
    cost: 200,
    multiplierAdd: 1.5
  }
];

let digger = [
  {
    purchased: 0,
    count: 0,
    cost: 200,
    passiveAdd: 1
  }
];

let driller = [
  {
    purchased: 0,
    count: 0,
    cost: 600,
    passiveAdd: 5
  }
];

let dirtTotal = document.querySelector("#dirt-total");
let multiplierTotal = document.querySelector("#multiplier-total");
let clickAdd = document.querySelector("#click-add");
let passiveTotal = document.querySelector("#passive-add");

function mine() {
  dirt.count++;

  drawMine();
}

function drawMine() {
  dirtTotal.innerText = dirt.count;
}
drawMine();

function purchaseShovel() {
  dirt.count - shovel.cost;
  shovel.purchased++;
  drawMine();
}
