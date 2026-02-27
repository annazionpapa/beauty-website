import Image from "next/image";
import Link from "next/link";
import ScrollAnimation from "@/components/ScrollAnimation";
import { treatments } from "@/data/treatments";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "시술안내 | 루체피부과의원",
  description:
    "리프팅, 레이저, 보톡스, 필러, 피부관리, 여드름 치료까지. 루체피부과의 다양한 전문 시술을 안내합니다.",
};

export default function TreatmentsPage() {
  return (
    <>
      {/* Page Header - Clean, no dark overlay */}
      <section className="pt-32 pb-16 bg-linen">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation type="blur">
            <p className="text-xs text-plum tracking-[0.3em] uppercase font-medium mb-3">
              Treatments
            </p>
            <h1 className="text-4xl md:text-5xl font-light text-espresso">
              <span className="text-plum">전문</span>{" "}
              시술 안내
            </h1>
            <p className="text-espresso-muted mt-4 max-w-xl">
              다양한 피부 고민에 맞는 전문 시술을 제공합니다. 피부과 전문의가 직접 상담 후 최적의 시술을 제안합니다.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Treatments - Alternating editorial layout */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {treatments.map((treatment, i) => (
            <div
              key={treatment.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center py-16 ${
                i < treatments.length - 1 ? "border-b border-gray-100" : ""
              }`}
            >
              {/* Image */}
              <ScrollAnimation
                type={i % 2 === 0 ? "left" : "right"}
                className={i % 2 === 1 ? "lg:order-2" : ""}
              >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                  <Image
                    src={treatment.image}
                    alt={treatment.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </ScrollAnimation>

              {/* Content */}
              <ScrollAnimation
                type={i % 2 === 0 ? "right" : "left"}
                className={i % 2 === 1 ? "lg:order-1" : ""}
              >
                <div>
                  <span className="text-xs text-plum tracking-wider uppercase font-medium">
                    {treatment.subtitle}
                  </span>
                  <h2 className="text-3xl font-light text-espresso mt-2">
                    <span className="text-plum font-medium">
                      {treatment.title}
                    </span>
                  </h2>
                  <p className="text-espresso-muted mt-4 leading-relaxed">
                    {treatment.description}
                  </p>

                  {/* Details */}
                  <ul className="mt-6 space-y-2">
                    {treatment.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-2 text-sm text-espresso-light"
                      >
                        <span className="text-plum mt-1">·</span>
                        {detail}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-3 mt-8">
                    {treatment.duration && (
                      <span className="px-4 py-1.5 bg-plum/8 text-plum text-xs rounded-full">
                        ⏱ {treatment.duration}
                      </span>
                    )}
                    {treatment.recovery && (
                      <span className="px-4 py-1.5 bg-sage/15 text-espresso-muted text-xs rounded-full">
                        🔄 {treatment.recovery}
                      </span>
                    )}
                    {treatment.priceHint && (
                      <span className="px-4 py-1.5 bg-nude/30 text-espresso-muted text-xs rounded-full">
                        💰 {treatment.priceHint}
                      </span>
                    )}
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-plum text-white text-sm font-medium rounded-full hover:bg-plum-dark transition-colors"
                  >
                    상담 예약하기
                  </Link>
                </div>
              </ScrollAnimation>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-linen">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <ScrollAnimation type="blur">
            <h2 className="text-2xl md:text-3xl text-espresso font-light">
              어떤 시술이 적합한지 모르시겠나요?
            </h2>
            <p className="text-gray-400 mt-3 text-sm">
              전문의가 직접 상담 후 최적의 시술을 추천해 드립니다
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
