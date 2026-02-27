import Image from "next/image";
import Link from "next/link";
import ScrollAnimation from "@/components/ScrollAnimation";
import { treatments } from "@/data/treatments";
import { doctors } from "@/data/doctors";
import { reviews } from "@/data/reviews";

export default function Home() {
  return (
    <>
      {/* ===== HERO - Full Width Cinematic ===== */}
      <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="루체피부과 프리미엄 스킨케어"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/70 via-espresso/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-xl">
            <p className="text-sm text-white/60 tracking-[0.2em] uppercase mb-4">
              Luce Dermatology
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.15] tracking-tight">
              <span className="font-light">당신의 피부에</span>
              <br />
              <span className="font-light">
                빛을 더하다
              </span>
            </h1>
            <p className="text-base text-white/70 mt-6 leading-relaxed max-w-md">
              피부과 전문의 3인이 당신의 피부를 세심하게 분석하고,
              과학적 근거에 기반한 맞춤 솔루션을 제안합니다.
            </p>
            <div className="flex items-center gap-4 mt-8">
              <Link
                href="/contact"
                className="px-8 py-3.5 bg-white text-espresso font-medium rounded-full hover:bg-white/90 transition-colors text-sm"
              >
                상담 예약하기
              </Link>
              <Link
                href="/treatments"
                className="px-6 py-3.5 border border-white/30 text-white/80 font-medium rounded-full hover:bg-white/10 transition-colors text-sm"
              >
                시술 안내
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex items-center justify-center gap-12 md:gap-20">
            {[
              { num: "15년+", label: "전문의 경력" },
              { num: "20,000+", label: "시술 건수" },
              { num: "98%", label: "만족도" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-lg md:text-xl font-semibold text-white">{s.num}</p>
                <p className="text-xs text-white/50 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TREATMENTS - Clean Grid ===== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-14">
              <p className="text-xs text-plum tracking-[0.2em] uppercase mb-3">Treatments</p>
              <h2 className="text-3xl md:text-4xl font-light text-espresso">
                대표 <span className="text-plum">시술 안내</span>
              </h2>
              <p className="text-gray-400 mt-3 text-sm max-w-md mx-auto">
                각 분야 전문의가 직접 시행하는 프리미엄 맞춤 시술
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {treatments.map((t, i) => (
              <ScrollAnimation key={t.id} delay={Math.min(i + 1, 5)}>
                <Link
                  href="/treatments"
                  className="treatment-card group block relative aspect-[4/3] rounded-2xl overflow-hidden"
                >
                  <Image
                    src={t.image}
                    alt={t.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                    <p
                      className="text-xs text-white/50 tracking-wider uppercase mb-1"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {t.subtitle}
                    </p>
                    <h3 className="text-lg font-semibold text-white">{t.title}</h3>
                    <p className="text-sm text-white/60 mt-1 line-clamp-2">{t.description}</p>
                  </div>
                </Link>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation>
            <div className="text-center mt-10">
              <Link
                href="/treatments"
                className="inline-flex items-center gap-2 text-sm text-plum font-medium hover:text-plum-dark transition-colors"
              >
                전체 시술 보기
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* ===== DOCTORS - Elegant Cards ===== */}
      <section className="py-20 lg:py-28 bg-linen">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-14">
              <p className="text-xs text-plum tracking-[0.2em] uppercase mb-3">Doctors</p>
              <h2 className="text-3xl md:text-4xl font-light text-espresso">
                <span className="text-plum">전문</span> 의료진
              </h2>
              <p className="text-gray-400 mt-3 text-sm">
                각 분야 전문의가 직접 진료합니다
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {doctors.map((doc, i) => (
              <ScrollAnimation key={doc.id} delay={i + 1}>
                <div className="group bg-white rounded-2xl overflow-hidden">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <div
                      className="absolute inset-0"
                      style={doc.imageScale ? { transform: `scale(${doc.imageScale})`, transformOrigin: 'top center' } : undefined}
                    >
                      <Image
                        src={doc.image}
                        alt={doc.name}
                        fill
                        className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-xs text-plum font-medium tracking-wider mb-1">
                      {doc.specialty}
                    </p>
                    <h3 className="text-lg font-semibold text-espresso">
                      {doc.name}
                      <span className="text-sm font-normal text-gray-400 ml-2">{doc.title}</span>
                    </h3>
                    <p className="text-sm text-espresso-muted mt-3 leading-relaxed">
                      &ldquo;{doc.greeting}&rdquo;
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ===== REVIEWS - Clean Cards ===== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-14">
              <p className="text-xs text-plum tracking-[0.2em] uppercase mb-3">Reviews</p>
              <h2 className="text-3xl md:text-4xl font-light text-espresso">
                고객 <span className="text-plum">후기</span>
              </h2>
              <p className="text-gray-400 mt-3 text-sm">
                2,847명의 고객이 루체와 함께했습니다
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.slice(0, 3).map((review, i) => (
              <ScrollAnimation key={review.id} delay={i + 1}>
                <div className="bg-linen rounded-2xl p-7 h-full flex flex-col">
                  <span
                    className="text-4xl leading-none text-plum/20 block mb-2"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    &ldquo;
                  </span>
                  <p className="text-sm text-espresso-light leading-relaxed flex-1">
                    {review.content}
                  </p>
                  <div className="mt-5 pt-4 border-t border-gray-200 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-espresso">{review.name}</p>
                      <p className="text-xs text-gray-400">{review.age}</p>
                    </div>
                    <span className="text-xs px-3 py-1.5 bg-plum/8 text-plum rounded-full">
                      {review.treatment}
                    </span>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LOCATION + BOOKING ===== */}
      <section className="py-20 lg:py-28 bg-linen">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-14">
              <p className="text-xs text-plum tracking-[0.2em] uppercase mb-3">Contact</p>
              <h2 className="text-3xl md:text-4xl font-light text-espresso">
                <span className="text-plum">오시는</span> 길
              </h2>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Map */}
            <ScrollAnimation>
              <div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-silk">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.3!2d127.028!3d37.498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDI5JzUyLjgiTiAxMjfCsDAxJzQwLjgiRQ!5e0!3m2!1sko!2skr!4v1"
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="루체피부과 위치"
                  />
                </div>
                <div className="mt-5 space-y-2">
                  <p className="text-espresso font-medium">
                    서울특별시 강남구 테헤란로 152, 루체빌딩 3층
                  </p>
                  <p className="text-sm text-gray-400">
                    강남역 2번 출구에서 도보 3분 | 주차 가능
                  </p>
                  <div className="flex items-center gap-6 pt-1 text-sm text-espresso-muted">
                    <span><span className="text-gray-400">평일</span> 10:00–19:00</span>
                    <span><span className="text-gray-400">토</span> 10:00–15:00</span>
                    <span><span className="text-gray-400">일·공휴일</span> 휴진</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Booking Form */}
            <ScrollAnimation delay={1}>
              <div className="bg-white rounded-2xl p-8 lg:p-10">
                <h3 className="text-2xl font-light text-espresso mb-2">상담 예약</h3>
                <p className="text-sm text-gray-400 mb-8">
                  전문의가 직접 맞춤 상담해 드립니다
                </p>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="이름"
                    readOnly
                    className="w-full px-4 py-3.5 bg-linen rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-plum/30 transition-all placeholder:text-gray-400"
                  />
                  <input
                    type="tel"
                    placeholder="연락처"
                    readOnly
                    className="w-full px-4 py-3.5 bg-linen rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-plum/30 transition-all placeholder:text-gray-400"
                  />
                  <select
                    className="w-full px-4 py-3.5 bg-linen rounded-xl text-sm text-gray-400 focus:outline-none focus:ring-1 focus:ring-plum/30 transition-all"
                    defaultValue=""
                  >
                    <option value="" disabled>관심 시술 선택</option>
                    <option>리프팅</option>
                    <option>레이저</option>
                    <option>보톡스 &amp; 필러</option>
                    <option>피부관리</option>
                    <option>여드름 &amp; 흉터</option>
                    <option>색소 &amp; 미백</option>
                  </select>
                  <Link
                    href="/contact"
                    className="block w-full py-3.5 bg-plum text-white text-center font-medium rounded-xl hover:bg-plum-dark transition-colors"
                  >
                    상담 신청하기
                  </Link>
                </div>
                <div className="flex items-center justify-center gap-4 mt-6 pt-5 border-t border-gray-100">
                  <a
                    href="tel:02-1234-5678"
                    className="flex items-center gap-2 text-sm text-espresso-muted hover:text-plum transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    전화 상담
                  </a>
                  <span className="text-gray-300">|</span>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm text-espresso-muted hover:text-plum transition-colors"
                  >
                    카카오톡 상담
                  </a>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Mobile Bottom CTA Space */}
      <div className="lg:hidden h-16" />
    </>
  );
}
