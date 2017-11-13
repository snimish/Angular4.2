/// <reference path="interface.ts" />
/// <reference path="function.ts" />

let product: ProductNamespace.Product = { name: "Milk", price: 50, expiryDate: "2017.08.15"};
ProductNamespace.printDetails(product);
ProductNamespace.purchaseProduct(product);

