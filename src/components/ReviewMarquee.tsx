"use client";

import { reviews } from "@/data/reviews";

export default function ReviewMarquee() {
  const row1 = reviews.slice(0, 3);
  const row2 = reviews.slice(3, 6);

  const ReviewCard = ({
    review,
  }: {
    review: (typeof reviews)[0];
  }) => (
    <div className="flex-shrink-0 w-80 p-6 bg-white rounded-2xl mx-3 shadow-sm">
      <p className="text-sm text-espresso-light leading-relaxed line-clamp-3">
        &ldquo;{review.content}&rdquo;
      </p>
      <div className="mt-4 flex items-center justify-between">
        <div>
          <span className="text-sm font-medium text-espresso">
            {review.name}
          </span>
          <span className="text-xs text-gray-400 ml-2">{review.age}</span>
        </div>
        <span className="text-xs px-3 py-1 bg-linen text-plum rounded-full font-medium">
          {review.treatment}
        </span>
      </div>
    </div>
  );

  return (
    <div className="space-y-4">
      {/* Row 1 - scroll left */}
      <div className="marquee-left flex">
        {[...row1, ...row1, ...row1, ...row1].map((review, i) => (
          <ReviewCard key={`r1-${i}`} review={review} />
        ))}
      </div>
      {/* Row 2 - scroll right */}
      <div className="marquee-right flex">
        {[...row2, ...row2, ...row2, ...row2].map((review, i) => (
          <ReviewCard key={`r2-${i}`} review={review} />
        ))}
      </div>
    </div>
  );
}
