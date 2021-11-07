// string, number, boolean, array, null, undefined, any

let firstName: string = 'Albeiro'; //type inference

let lastName: string | undefined | null;

lastName = undefined;

let age: number;

age = 32;

let hasPursched: boolean = true;

let sports: string[] = ['basketball', 'soccer', 'golf'];

let productList: string[] = [];
productList.push('pencil');

let petCount: number[] = [];
petCount.push(6);

console.log(lastName, age, hasPursched, productList, petCount);

let productType = 'sports'; // homeGoods, grocery
if (productType === 'sports') {
  console.log('Found sports product type.');
}

// Using Enums
enum ProductType {
  Sports,
  HomeGoods,
  Groceries,
}
let pt = ProductType.Sports;
if (pt === ProductType.Sports) {
  console.log('Found sports product type.');
}


// When enums use const takes number position
const enum ProductTypes {
  Sports,
  HomeGoods,
  Groceries
}

let pts= ProductType.Sports      // 0
let ptg = ProductTypes.Groceries // 2

