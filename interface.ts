namespace ProductNamespace{
    export interface Product{
        name: string;
        price: number;
        expiryDate: string;
    }

    export function printDetails(product: Product){
        console.log(`Product details are: Name = ${product.name}, Price = ${product.price}, ExpiryDate = ${product.expiryDate} `);
    };
}