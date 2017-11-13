namespace ProductNamespace{
    export function purchaseProduct(product: Product ): void{
        console.log(`You have purchased: Name = ${product.name}. Please consume it before expiry.`);
    };
}