import { productsURL } from '../lib';

const prefix = '🐉 ';

type ProductType = {
  id: number;
  name: string;
  icon?: string;
};

export default async function updateOutput(id: string = 'output') {
  const products = await getProducts();
  const output = document.getElementById(`${id}`);
  const html = layoutProducts(products);

  if (output && html) {
    output.innerHTML = html;
  }
}

function layoutProducts(products: ProductType[]) {
  const items = products.map(({ id, name, icon }) => {
    const productHtml = `
    <span class="card-id">#${id}</span>
      <i class="card-icon ${icon} fa-lg"></i>
    <span class="card-name">${name}</span>
    `;
    const cardHtml = `
    <li>
      <div class="card">
        <div class="card-content">
          <div class="content">
            ${productHtml}
          </div>
        </div>
      </div>
    </li>
    `;
    return cardHtml;
  });

  let productsHtml = `<ul>${items.join('')}</ul>`;
  return productsHtml;
}

async function getProducts(): Promise<ProductType[]> {
  const response: Response = await fetch(productsURL);
  const products: ProductType[] = await response.json();
  return products;
}

/************************************************
 * Learning sample code.
 ***********************************************/

// run our samples
runTheLearningSamples();

// defining functions
function runTheLearningSamples() {
  // hoisted
  function displayProductInfo(id: number, name: string) {
    console.log(`${prefix} typed parameters`);
    console.log(`Product id=${id} and name=${name}`);
  }

  displayProductInfo(10, 'Pizza');

  // see addNumbersDeclaration
  console.log(`${prefix} Function declarations`);
  console.log(addNumbersDeclarations(8, 12));
  function addNumbersDeclarations(x: number, y: number) {
    const sum: number = x + y;
    return sum;
  }

  const addNumbersExpressions = function (x: number, y: number) {
    const sum: number = x + y;
    return sum;
  };
  console.log(`${prefix} Function declarations`);
  console.log(addNumbersExpressions(81, 9));

  const samplesProducts = [
    {
      id: 10,
      name: 'Pizaa slice',
      icon: 'fas fa-pizza-silce',
    },
    {
      id: 20,
      name: 'Ice cream',
      icon: 'fas fa-ice-cream',
    },
    {
      id: 30,
      name: 'Cheese',
      icon: 'fas fa-cheese',
    },
  ];

  function getProductNames(): string[] {
    return samplesProducts.map((product) => product.name);
  }

  console.log(`${prefix} Return array`);
  console.log(getProductNames());

  /**  Return Types
    CREATE type ProductType
  */
  function getPRoductById(id: number): ProductType | undefined {
    // return samplesProducts.find(function(product) {
    //   return product.id === id;
    // });
    return samplesProducts.find((product) => product.id === id);
  }

  const getPRoductById2 = (id: number): ProductType | undefined =>
    samplesProducts.find((product) => product.id === id);

  console.log(`${prefix} Return ProductType`);
  console.log(getPRoductById(10));

  console.log(`${prefix} Arrow function`);
  console.log(getPRoductById2(30));

  function displayProducts(products: ProductType[]): void {
    const productNames = products.map((product: ProductType) => {
      const name = product.name.toLowerCase();
      return name;
    });
    const msg = `Sample product include: ${productNames.join(', ')}`;
    console.log(`${prefix} Return void`);
    console.log(msg);
  }

  displayProducts(samplesProducts);

  // async/await function

  // *** async function getProducts()

  // Arrow functions

  // see function displayProducts()
  // and layoutProducts()
  // and getProductById()

  // Optional parameters

  const { floor, random } = Math;
  const getRamdomInt = (max: number = 1000) => floor(random() * max);

  function createProduct(name: string, icon?: string): ProductType {
    const id = getRamdomInt(1000);
    return {
      id,
      name,
      icon,
    };
  }

  console.log(`${prefix} Optional parameters`);
  let pineapple = createProduct('pineapple', 'fas fa-pineapple');
  let mango = createProduct('mango');
  console.log(pineapple, mango);

  // Default parameters
  function createProductWithDefaults(
    name: string,
    icon: string = 'generic-fruit.jpg',
  ): ProductType {
    const id = getRamdomInt();
    return {
      id,
      name,
      icon,
    };
  }

  console.log(`${prefix} Default parameters`);
  pineapple = createProductWithDefaults('pineapple', 'fas fa-pineapple');
  mango = createProductWithDefaults('mango');
  console.log(pineapple, mango);

  // Rest parameters

  function buildAddress(
    street: string,
    city: string,
    ...restOfAddress: string[]
  ) {
    console.table(restOfAddress);
    const address = `${street} ${city} ${restOfAddress.join(' ')}`;
    return address;
  }

  const someAddress = buildAddress(
    '1 Lois Lane', // street
    'Smallville', // city
    'Apto 101', // rest arg [0]
    'Area', // rest arg [1]
    'Mistery Country', // rest arg [2]
  );

  console.log(`${prefix} Rest parameters`);
  console.log(someAddress);

  // Destructuring parameters

  function displayProduct({ id, name }: ProductType): void {
    console.log(`${prefix} Destructuring parameters`);
    console.log(`Product id=${id} and name=${name}`);
  }
  const prod = getPRoductById(20);
  if (prod) displayProduct(prod);
}
