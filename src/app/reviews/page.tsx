"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollAnimation from "@/components/ScrollAnimation";
import { reviews, reviewCategories, overallStats } from "@/data/reviews";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-3.5 h-3.5 ${
            star <= rating ? "text-amber-400" : "text-gray-200"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  const [activeCategory, setActiveCategory] = useState("전체");

  const filteredReviews =
    activeCategory === "전체"
      ? reviews
      : reviews.filter((r) => r.category === activeCategory);

  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-linen">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation type="blur">
            <p className="text-xs text-plum tracking-[0.3em] uppercase font-medium mb-3">
              Reviews
            </p>
            <h1 className="text-4xl md:text-5xl font-light text-espresso">
              고객{" "}
              <span className="text-plum">후기</span>
            </h1>
            <p className="text-espresso-muted mt-4 max-w-xl">
              루체피부과를 경험한 고객님들의 솔직한 후기입니다.
            </p>
          </ScrollAnimation>

          {/* Stats */}
          <ScrollAnimation type="blur" delay={1}>
            <div className="flex flex-wrap gap-8 mt-10">
              <div>
                <p className="text-3xl font-light text-plum">
                  {overallStats.averageRating}
                </p>
                <p className="text-xs text-gray-400 mt-1">평균 평점</p>
              </div>
              <div className="w-px bg-gray-200" />
              <div>
                <p className="text-3xl font-light text-plum">
                  {overallStats.totalReviews.toLocaleString()}
                </p>
                <p className="text-xs text-gray-400 mt-1">누적 후기</p>
              </div>
              <div className="w-px bg-gray-200" />
              <div>
                <p className="text-3xl font-light text-plum">
                  {overallStats.satisfactionRate}%
                </p>
                <p className="text-xs text-gray-400 mt-1">만족도</p>
              </div>
              <div className="w-px bg-gray-200" />
              <div>
                <p className="text-3xl font-light text-plum">
                  {overallStats.returnRate}%
                </p>
                <p className="text-xs text-gray-400 mt-1">재방문율</p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Filter + Reviews */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="sticky top-20 z-20 bg-white/95 backdrop-blur-sm py-4 -mx-6 px-6 lg:-mx-8 lg:px-8 border-b border-gray-100">
            <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
              {reviewCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap px-4 py-2 text-sm rounded-full transition-all ${
                    activeCategory === cat
                      ? "bg-plum text-white font-medium"
                      : "bg-linen text-espresso-muted hover:bg-plum/10 hover:text-plum"
                  }`}
                >
                  {cat}
                  {cat !== "전체" && (
                    <span className="ml-1.5 text-xs opacity-60">
                      {reviews.filter((r) => r.category === cat).length}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Review Count */}
          <p className="text-sm text-gray-400 mt-6 mb-6">
            {filteredReviews.length}개의 후기
          </p>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredReviews.map((review, i) => (
              <ScrollAnimation key={review.id} delay={Math.min((i % 3) + 1, 3)}>
                <div className="bg-linen rounded-2xl p-6 h-full flex flex-col">
                  {/* Rating */}
                  <StarRating rating={review.rating} />

                  {/* Content */}
                  <p className="text-sm text-espresso-light leading-relaxed mt-4 flex-1">
                    {review.content}
                  </p>

                  {/* Footer */}
                  <div className="mt-5 pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-espresso">
                          {review.name}
                        </p>
                        <p className="text-xs text-gray-400 mt-0.5">
                          {review.age} · {review.date}
                        </p>
                      </div>
                      <span className="text-[10px] px-2.5 py-1 bg-plum/8 text-plum rounded-full font-medium">
                        {review.treatment}
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-linen">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <ScrollAnimation type="blur">
            <h2 className="text-2xl md:text-3xl text-espresso font-light">
              당신도 변화를 경험해보세요
            </h2>
            <p className="text-gray-400 mt-3 text-sm">
              전문의와의 1:1 상담으로 시작하세요
            </p>
            <Link
              href="/contact"
              className="inline-flex px-8 py-3.5 bg-plum text-white font-medium rounded-full hover:bg-plum-dark transition-colors mt-8"
            >
              무료 상담 예약
            </Link>
          </ScrollAnimation>
        </div>
      </section>

      <div className="lg:hidden h-16" />
    </>
  );
}
