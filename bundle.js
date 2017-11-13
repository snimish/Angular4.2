var ProductNamespace;
(function (ProductNamespace) {
    function printDetails(product) {
        console.log("Product details are: Name = " + product.name + ", Price = " + product.price + ", ExpiryDate = " + product.expiryDate + " ");
    }
    ProductNamespace.printDetails = printDetails;
    ;
})(ProductNamespace || (ProductNamespace = {}));
var ProductNamespace;
(function (ProductNamespace) {
    function purchaseProduct(product) {
        console.log("You have purchased: Name = " + product.name + ". Please consume it before expiry.");
    }
    ProductNamespace.purchaseProduct = purchaseProduct;
    ;
})(ProductNamespace || (ProductNamespace = {}));
/// <reference path="interface.ts" />
/// <reference path="function.ts" />
var product = { name: "Milk", price: 50, expiryDate: "2017.08.15" };
ProductNamespace.printDetails(product);
ProductNamespace.purchaseProduct(product);
