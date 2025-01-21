import { FaStar } from "react-icons/fa";

const ReviewSection: React.FC<{ reviews: any[] }> = ({ reviews }) => {
  return (
    <div className="mt-4">
      <h3 className="text-2xl font-semibold">Reviews</h3>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
        {reviews.map((review, index) => (
          <div key={index} className="border-b pb-4 mt-4 mb-4">
            <div className="flex items-center">
              <img
                src={review?.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-bold">{review.name}</p>
                <span className="text-yellow-500 flex space-x-2 items-center">
                  <FaStar />
                  <p>{review.rating}</p>
                </span>
              </div>
            </div>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
