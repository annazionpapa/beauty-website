import ScrollAnimation from "@/components/ScrollAnimation";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "상담 예약 | 루체피부과의원",
  description:
    "루체피부과 온라인 상담 예약. 피부과 전문의가 직접 맞춤 상담해 드립니다.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-linen">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation type="blur">
            <p className="text-xs text-plum tracking-[0.3em] uppercase font-medium mb-3">
              Consultation
            </p>
            <h1 className="text-4xl md:text-5xl font-light text-espresso">
              <span
                className="italic text-plum"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                상담
              </span>{" "}
              예약
            </h1>
            <p className="text-espresso-muted mt-4 max-w-xl">
              피부 고민을 알려주시면, 전문의가 직접 맞춤 상담해 드립니다.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form - 3/5 */}
            <ScrollAnimation type="left" className="lg:col-span-3">
              <div className="bg-linen rounded-3xl p-8 lg:p-10">
                <h2
                  className="italic text-2xl text-espresso mb-2"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  온라인 상담 신청
                </h2>
                <p className="text-sm text-gray-400 mb-8">
                  아래 양식을 작성해 주시면 빠른 시간 내에 연락드리겠습니다.
                </p>
                <ContactForm />
              </div>
            </ScrollAnimation>

            {/* Info - 2/5 */}
            <ScrollAnimation type="right" className="lg:col-span-2">
              <div className="space-y-8">
                {/* Quick Contact */}
                <div className="bg-linen rounded-3xl p-8">
                  <h3 className="text-sm font-semibold text-espresso mb-5">
                    빠른 상담
                  </h3>
                  <div className="space-y-4">
                    <a
                      href="tel:02-1234-5678"
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-10 h-10 bg-plum/10 rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-plum"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">전화 상담</p>
                        <p className="text-espresso font-medium group-hover:text-plum transition-colors">
                          02-1234-5678
                        </p>
                      </div>
                    </a>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-plum/10 rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-plum"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">카카오톡 상담</p>
                        <p className="text-espresso font-medium">@루체피부과</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-linen rounded-3xl p-8">
                  <h3 className="text-sm font-semibold text-espresso mb-5">
                    진료 시간
                  </h3>
                  <div className="space-y-2.5 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">평일</span>
                      <span className="text-espresso font-medium">
                        10:00 – 19:00
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">토요일</span>
                      <span className="text-espresso font-medium">
                        10:00 – 15:00
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">점심시간</span>
                      <span className="text-espresso font-medium">
                        13:00 – 14:00
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">일요일·공휴일</span>
                      <span className="text-plum font-medium">휴진</span>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="bg-linen rounded-3xl p-8">
                  <h3 className="text-sm font-semibold text-espresso mb-5">
                    오시는 길
                  </h3>
                  <p className="text-sm text-espresso-muted leading-relaxed">
                    서울특별시 강남구 테헤란로 152, 루체빌딩 3층
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    강남역 2번 출구에서 도보 3분 | 주차 가능
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <div className="lg:hidden h-16" />
    </>
  );
}
