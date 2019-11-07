interface Mountain {
  name: string;
  height: number;
}

let mountains: Mountain[] = [
  { name: 'Kilimanjaro', height: 19341 },
  { name: 'Everest', height: 29029 },
  { name: 'Denali', height: 20310 }
];

function findNameOfTallestMountain(arrayOfMountains: Mountain[]): string {
  let tallest: number = mountains[0].height;
  let mountainName: string = mountains[0].name;
  arrayOfMountains.forEach(mountain => {
    if (mountain.height > tallest) {
      tallest = mountain.height;
      mountainName = mountain.name;
    }
  });
  return `Mount ${mountainName} is the tallest mountain.`;
}

console.log(findNameOfTallestMountain(mountains));

interface Product {
  name: string;
  price: number;
}

let products: Product[] = [
  { name: 'soap', price: 2 },
  { name: 'shampoo', price: 3 },
  { name: 'toothbrush', price: 1 },
  { name: 'hair gel', price: 4 }
];

function calcAverageProductPrice(arrayOfProducts: Product[]): number {
  let averagePrice: number = 0;
  arrayOfProducts.forEach(product => {
    averagePrice = averagePrice + product.price;
  });
  return averagePrice / 4;
}

console.log(calcAverageProductPrice(products));

interface InventoryItem {
  product: Product;
  quantity: number;
}

let inventory: InventoryItem[] = [
  { product: { name: 'motor', price: 10 }, quantity: 10 },
  { product: { name: 'sensor', price: 12.5 }, quantity: 4 },
  { product: { name: 'LED', price: 1.0 }, quantity: 20 }
];

function calcInventoryValue(inventoryArray: InventoryItem[]): number {
  // Variable declarations
  let total: number = 0;

  // Loop through array
  inventoryArray.forEach(item => {
    total += item.product.price * item.quantity;
  });
  return total;
}

console.log(calcInventoryValue(inventory)); // Expect: 170
