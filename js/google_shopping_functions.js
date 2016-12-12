var data = require('../products.json');

/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array
 */

// test question 1
function getItems(objectData){
  return data.items;
}


//test question 2
function getItemsByBrand(items, brand){
  var result = [];
  for (var i=0; i<items.length; i++){
    if(items[i].product.brand=== brand){
      result.push(items[i]);
    }
  }
  return result;
}

//question 3
function getItemsByAuthor(items, author){
  var result = [];
  for (var i=0; i<items.length; i++){
    if (items[i].product.author.name === author){
      result.push(items[i]);
    }
  }
  return result;
}


// question 4
function getAvailableProducts(items){
  var result = [];
  var inStock = false;
  for (var i=0; i < items.length; i++){
    var inventoryArr = items[i].product.inventories;
    for(var j=0; j < inventoryArr.length; j++){
      if(inventoryArr[j].availability === "inStock"){
        inStock = true;
      }
    }
    if(inStock){
      result.push(items[i]);
      inStock = false;
    }
  }
  return result;
}

//question 5
//All items made by Sony
console.log("test 1");
console.log(getItemsByBrand(getItems(data),"Sony"));
console.log("test 2");
console.log(getAvailableProducts(getItemsByBrand(getItems(data),"Sony")));
console.log("test 3");
console.log(getAvailableProducts(getItemsByAuthor(getItems(data),"Adorama Camera")));
console.log(getItemsByAuthor(getItems(data),"Adorama Camera"));
console.log(getItemsByAuthor(getItemsByBrand(getItems(data),"Nikon"),"eBay"));


function getItemsCount(itemData) {
  return itemData.items.length;
}

/*
 * Define and use your functions here
 */

// output item count using the getItemsCount function
console.log('Item Count: ' + getItemsCount(data));
