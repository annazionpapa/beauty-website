import Link from "next/link";
import ScrollAnimation from "@/components/ScrollAnimation";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "비포&애프터 | 루체피부과의원",
  description:
    "루체피부과에서 경험한 실제 시술 전후 변화를 확인해보세요.",
};

const galleryItems = [
  {
    id: 1,
    category: "리프팅",
    before:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
    after:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=600&fit=crop",
    treatment: "울쎄라 리프팅 2회",
    patient: "40대 여성",
    period: "3개월 경과",
  },
  {
    id: 2,
    category: "레이저",
    before:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&h=600&fit=crop",
    after:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&h=600&fit=crop",
    treatment: "피코레이저 5회 + 물광주사",
    patient: "30대 여성",
    period: "2개월 경과",
  },
  {
    id: 3,
    category: "보톡스 & 필러",
    before:
      "https://images.unsplash.com/photo-1594824476967-48c8b964f137?w=800&h=600&fit=crop",
    after:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&h=600&fit=crop",
    treatment: "보톡스 + 필러 시술",
    patient: "30대 여성",
    period: "1개월 경과",
  },
  {
    id: 4,
    category: "피부관리",
    before:
      "https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?w=800&h=600&fit=crop",
    after:
      "https://images.unsplash.com/photo-1552693673-1bf958298935?w=800&h=600&fit=crop",
    treatment: "물광주사 3회 + PRP",
    patient: "20대 여성",
    period: "6주 경과",
  },
  {
    id: 5,
    category: "여드름",
    before:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&h=600&fit=crop",
    after:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=600&fit=crop",
    treatment: "여드름 집중관리 프로그램",
    patient: "20대 남성",
    period: "3개월 경과",
  },
  {
    id: 6,
    category: "색소",
    before:
      "https://images.unsplash.com/photo-1523263685509-57c1d050d19b?w=800&h=600&fit=crop",
    after:
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=800&h=600&fit=crop",
    treatment: "레이저토닝 8회 + 미백관리",
    patient: "50대 여성",
    period: "4개월 경과",
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-linen">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation type="blur">
            <p className="text-xs text-plum tracking-[0.3em] uppercase font-medium mb-3">
              Before &amp; After
            </p>
            <h1 className="text-4xl md:text-5xl font-light text-espresso">
              <span
                className="italic text-plum"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Real
              </span>{" "}
              Results
            </h1>
            <p className="text-espresso-muted mt-4 max-w-xl">
              루체피부과에서 경험한 실제 시술 전후 변화를 확인해보세요.
              드래그하여 비교할 수 있습니다.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryItems.map((item, i) => (
              <ScrollAnimation key={item.id} type="scale" delay={i % 2 === 0 ? 1 : 2}>
                <div className="rounded-3xl overflow-hidden bg-linen">
                  <BeforeAfterSlider
                    beforeImage={item.before}
                    afterImage={item.after}
                    beforeLabel="Before"
                    afterLabel="After"
                  />
                  <div className="p-5 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-espresso">
                        {item.treatment}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {item.patient} · {item.period}
                      </p>
                    </div>
                    <span className="text-xs px-3 py-1 bg-plum/8 text-plum rounded-full font-medium">
                      {item.category}
                    </span>
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
              나도 변화를 경험하고 싶다면
            </h2>
            <p className="text-gray-400 mt-3 text-sm">
              무료 상담을 통해 맞춤 시술 플랜을 받아보세요
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
