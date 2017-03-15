@addCost(200)
export default class Cellphone {
  constructor() {
    this.model = "Samsung";
    this.storage = 16;
  }
}

function addCost(sum) {
  return function decorator(theThingWereDecorating) {
    theThingWereDecorating.prototype.cost = sum;
  };
}
