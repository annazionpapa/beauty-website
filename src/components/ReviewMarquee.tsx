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
    <div className="flex-shrink-0 w-[360px] bg-white rounded-3xl mx-3 p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Large decorative quote mark */}
      <span
        className="text-5xl leading-none text-plum/15 block -mb-4"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        &ldquo;
      </span>

      {/* Review content in serif italic */}
      <p className="text-[15px] text-espresso-light leading-relaxed line-clamp-4">
        {review.content}
      </p>

      {/* Divider */}
      <div className="w-8 h-px bg-plum/20 mt-6 mb-4" />

      {/* Author info */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-espresso">{review.name}</p>
          <p className="text-xs text-gray-400 mt-0.5">{review.age}</p>
        </div>
        <span className="text-xs px-3 py-1.5 bg-plum/8 text-plum rounded-full font-medium">
          {review.treatment}
        </span>
      </div>
    </div>
  );

  return (
    <div className="space-y-5">
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
