import ReviewComment from "@/app/(dashboard)/_components/review-comment";

const PropertyReviews = () => {
    return(
        <div className="fixed inset-x-[25rem] inset-y-[19rem] m-4">
            <ReviewComment rating={4.5}/>
            <ReviewComment rating={3.5}/>
            <ReviewComment rating={3.0}/>
            <ReviewComment rating={4.5}/>
        </div>
    )
}

export default PropertyReviews;