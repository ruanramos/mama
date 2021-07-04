import { useRouter } from 'next/router'

function ReviewList() {
    const router = useRouter();
    const reviewId = router.query.reviewId
    const productId = router.query.productId
    return (
        <>
            <h1>Product Reviews Listed Here</h1>
            <h2>This is product {productId} review {reviewId}</h2>
        </>
    )
}

export default ReviewList