'use client';

import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import { FaQuoteLeft } from "react-icons/fa";
import { CUSTOMER_REVIEWS } from '@/constants/reviews';

const CustomerReviews = () => {
    return (
        <section className="py-10 px-12 lg:pb-20">
            <h1 className="heading text-[35px] lg:text-[45px] text-primary mb-10">
                Customer Reviews
            </h1>
            
            <div className="flex lg:flex-row flex-col items-center justify-center gap-10">
                {CUSTOMER_REVIEWS.map((review, index) => (
                    <ReviewCard key={index} {...review} />
                ))}
            </div>
        </section>
    );
};

const ReviewCard = ({ name, role, rating, review }) => {
    return (
        <div className="lg:h-[295px] lg:w-[399px] bg-[#192738] border-l-4 border-primary px-3 lg:px-10 py-2 lg:py-5 hover:shadow-xl transition-shadow duration-300">
            <div className="h-8">
                <FaQuoteLeft className="text-primary text-2xl" />
            </div>
            
            <div className="space-y-1">
                <h2 className="font-lato text-[26px] text-white">
                    {name}
                </h2>
                {role && (
                    <p className="text-gray-400 text-sm">
                        {role}
                    </p>
                )}
            </div>
            
            <div className="flex items-center justify-start gap-1 mt-2">
                <div className="flex items-center justify-start">
                    {[...Array(Math.floor(rating))].map((_, index) => (
                        <IoIosStar key={index} className="text-yellow-300 text-xl" />
                    ))}
                    {rating % 1 !== 0 && (
                        <IoIosStarHalf className="text-yellow-300 text-xl" />
                    )}
                </div>
                <p className="font-thin text-gray-400 text-[14px]">{rating}/5</p>
            </div>
            
            <p className="font-lato font-thin text-white text-[15px] mt-2 line-clamp-5">
                {review}
            </p>
        </div>
    );
};

export default CustomerReviews;