import { Product } from "./interfaces";

abstract class ProductBase  implements Product {
  // constructor (auto implemented properties)
  constructor(public id: number, public name: string, public icon: string) {}

  validate(): boolean {
    throw new Error('Not implemented');
  }
}

export class FoodProduct extends ProductBase {
  // properties
  /**
  id = 0;
  name = '';
  icon = '';
   */

  // constructor
  /** 
  constructor(id: number, name: string, icon: string) {
    this.id = id;
    this.name = name;
    this.icon = icon;
  }
   */

  // functions
  validate(): boolean {
    return !!this.id && !!this.name && !!this.icon;
  }
}

class SportingGoodsProduct extends ProductBase {
  constructor(id: number, name: string, icon: string) {
    super(id, name, icon); //Exucute contructor base clase
  }
}

let fp = new FoodProduct(1, 'Pizza slice', 'icon.jpg');
console.log(fp);
