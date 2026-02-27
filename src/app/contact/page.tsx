import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "상담 예약 | 루체피부과의원",
  description: "루체피부과 온라인 상담 예약. 피부과 전문의가 직접 맞춤 상담해 드립니다.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1920&h=800&fit=crop"
            alt="상담 예약"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/80 to-navy/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <p className="text-rose-light text-sm tracking-[0.3em] uppercase mb-3">Consultation</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">상담 예약</h1>
          <p className="text-gray-300 mt-4 max-w-xl">
            피부 고민을 알려주시면, 전문의가 직접 맞춤 상담해 드립니다.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <ScrollReveal>
              <ContactForm />
            </ScrollReveal>

            {/* Info */}
            <div className="flex flex-col justify-center">
              <ScrollReveal>
                <div className="space-y-10">
                  {/* Quick Contact */}
                  <div>
                    <h3 className="text-lg font-bold text-navy mb-4">빠른 상담</h3>
                    <div className="space-y-4">
                      <a
                        href="tel:02-1234-5678"
                        className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow"
                      >
                        <div className="w-12 h-12 bg-blush rounded-full flex items-center justify-center text-rose shrink-0">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">전화 상담</p>
                          <p className="text-lg font-bold text-navy">02-1234-5678</p>
                        </div>
                      </a>
                      <div className="flex items-center gap-4 p-4 bg-white rounded-xl">
                        <div className="w-12 h-12 bg-blush rounded-full flex items-center justify-center text-rose shrink-0">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">카카오톡 상담</p>
                          <p className="text-lg font-bold text-navy">@루체피부과</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div>
                    <h3 className="text-lg font-bold text-navy mb-4">진료 시간</h3>
                    <div className="bg-white rounded-xl p-6 space-y-3">
                      <div className="flex justify-between text-gray-600">
                        <span>평일</span>
                        <span className="font-medium">10:00 - 19:00</span>
                      </div>
                      <div className="flex justify-between text-gray-600">
                        <span>토요일</span>
                        <span className="font-medium">10:00 - 15:00</span>
                      </div>
                      <div className="flex justify-between text-gray-600">
                        <span>점심시간</span>
                        <span className="font-medium">13:00 - 14:00</span>
                      </div>
                      <div className="border-t border-gray-100 pt-3 flex justify-between text-rose">
                        <span>일요일·공휴일</span>
                        <span className="font-medium">휴진</span>
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <h3 className="text-lg font-bold text-navy mb-4">오시는 길</h3>
                    <div className="bg-white rounded-xl p-6">
                      <p className="text-gray-600 mb-2">
                        서울특별시 강남구 테헤란로 152, 루체빌딩 3층
                      </p>
                      <p className="text-sm text-gray-400">
                        강남역 2번 출구에서 도보 3분 | 주차 가능
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <div className="lg:hidden h-16" />
    </>
  );
}
