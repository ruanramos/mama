import { useRouter } from "next/router"
import products from "../../../data/products"

const ProductDetail = () => {
    const router = useRouter()
    const productId = router.query.productId
    return (
        <>
            <h1>Product Details Listed Here</h1>
            <h2>This is product {productId}</h2>
        </>
    )
}

const bla = (productId) => {
    const pr = products.filter((p) => {
        return (productId === p.productId)
    })

    console.log(pr)
    return pr
}

export default ProductDetail