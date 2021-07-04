class Product {
    constructor(productId, name, price) {
        this.productId = productId
        this.name = name
        this.price = price
    }

}

const products = [
    new Product(1, "ball", 20.0),
    new Product(2, "spoon", 5.0),
    new Product(3, "broom", 13.5),
    new Product(4, "bottle", 2.25),
    new Product(4, "shoes", 56.35)
]

export default products