function calculateAveragePricePerDesigner(inventory) {
    var averagePricesOfDesigners = {};
    var designerArray = [];
    
    
    for (var i = 0; i < inventory.length; i++){
        var inventoryOfShoes = inventory[i].shoes;
        var sumOfPrices = 0;
        var designerObject = {};
        
        for (var j = 0; j < inventoryOfShoes.length; j++){
            sumOfPrices += inventoryOfShoes[j].price;
            designerObject.name = inventory[i].name;
            designerObject.averagePrice = sumOfPrices/inventoryOfShoes.length;
        }
        averagePricesOfDesigners.designers = designerArray;
        designerArray.push(designerObject);

    }
    return averagePricesOfDesigners;
}

// Create helper functions if needed
var currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];
console.log(calculateAveragePricePerDesigner(currentInventory));
