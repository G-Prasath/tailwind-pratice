import ReviewCard from "../components/ReviewCard"
import { reviews } from '../constance'
const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What our
        <span className="text-coral-red"> Customer </span>
        Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, nobis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, sapiente.</p>

      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {
          reviews.map((reviewData) => (
            <ReviewCard
              key={reviewData.customerName}
              {...reviewData}
            />
          ))
        }
      </div>
    </section>
  )
}

export default CustomerReviews