import Image from "next/image";
import Link from "next/link";
import ScrollAnimation from "@/components/ScrollAnimation";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ReviewMarquee from "@/components/ReviewMarquee";
import { treatments } from "@/data/treatments";
import { doctors } from "@/data/doctors";

const skinConcerns = [
  { icon: "✦", label: "주름·탄력" },
  { icon: "◎", label: "색소·기미" },
  { icon: "△", label: "여드름" },
  { icon: "◇", label: "모공·피지" },
  { icon: "○", label: "홍조·민감" },
  { icon: "▽", label: "볼륨·윤곽" },
];

export default function Home() {
  return (
    <>
      {/* ========================================= */}
      {/* HERO - Split Asymmetric + Blob Image      */}
      {/* ========================================= */}
      <section className="min-h-screen relative overflow-hidden bg-linen">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-0 lg:pb-0 lg:min-h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
            {/* Left - Typography focused */}
            <div className="order-2 lg:order-1 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-plum/10 rounded-full mb-8">
                <span className="w-1.5 h-1.5 bg-plum rounded-full" />
                <span className="text-xs text-plum font-medium tracking-wider">
                  루체피부과의원
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl leading-[1.15] tracking-tight">
                <span className="font-light text-espresso">아름다움의 시작,</span>
                <br />
                <span
                  className="italic font-semibold text-plum"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  빛나는 피부
                </span>
              </h1>

              <p className="text-base text-espresso-muted mt-6 max-w-md leading-relaxed">
                피부과 전문의 3인이 당신의 피부를 세심하게 분석하고,
                과학적 근거에 기반한 맞춤 솔루션을 제안합니다.
              </p>

              <div className="flex items-center gap-4 mt-8">
                <Link
                  href="/contact"
                  className="px-7 py-3.5 bg-plum text-white font-medium rounded-full hover:bg-plum-dark transition-colors"
                >
                  상담 예약하기
                </Link>
                <Link
                  href="/treatments"
                  className="px-5 py-3.5 text-espresso-muted font-medium hover:text-plum transition-colors"
                >
                  시술 안내 →
                </Link>
              </div>

              {/* Inline Stats - NO separate stats bar */}
              <div className="flex items-center gap-8 mt-14 pt-8 border-t border-gray-200">
                {[
                  { num: "15년+", label: "전문의 경력" },
                  { num: "20,000+", label: "시술 건수" },
                  { num: "98%", label: "만족도" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-xl font-semibold text-plum">{s.num}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Organic blob image */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative aspect-[4/5] max-w-sm mx-auto lg:max-w-md xl:max-w-lg">
                <div className="blob-shape overflow-hidden w-full h-full shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&h=1000&fit=crop"
                    alt="루체피부과"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 80vw, 40vw"
                  />
                </div>

                {/* Floating Glass Badges */}
                <div className="glass absolute -left-2 sm:left-0 top-[22%] px-4 py-2.5 rounded-2xl shadow-lg">
                  <p className="text-xs font-medium text-plum">✦ 리프팅 전문</p>
                </div>
                <div className="glass absolute -right-2 sm:right-0 top-[60%] px-4 py-2.5 rounded-2xl shadow-lg">
                  <p className="text-xs font-medium text-plum">◎ 레이저 토닝</p>
                </div>
                <div className="glass absolute left-[15%] -bottom-2 px-4 py-2.5 rounded-2xl shadow-lg">
                  <p className="text-xs font-medium text-plum">☆ 맞춤 피부관리</p>
                </div>

                {/* Decorative dot */}
                <div className="absolute -top-4 right-[20%] w-20 h-20 rounded-full bg-nude/40 blur-xl" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-sage/20 blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* SKIN CONCERNS - Interactive Picker         */}
      {/* ========================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <ScrollAnimation type="blur">
            <h2
              className="italic text-3xl md:text-4xl text-center text-espresso"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              어떤 피부 고민이 있으신가요?
            </h2>
            <p className="text-center text-gray-400 mt-3 text-sm">
              고민을 선택하시면 맞춤 시술을 안내해 드립니다
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-12">
            {skinConcerns.map((concern, i) => (
              <ScrollAnimation key={concern.label} type="scale" delay={i + 1}>
                <Link
                  href="/treatments"
                  className="group flex flex-col items-center gap-3 p-4 rounded-2xl hover:bg-linen transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-full bg-plum/8 flex items-center justify-center text-lg text-plum group-hover:scale-110 group-hover:bg-plum/15 transition-all duration-300">
                    {concern.icon}
                  </div>
                  <span className="text-sm text-espresso-muted group-hover:text-plum transition-colors">
                    {concern.label}
                  </span>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* TREATMENTS - Bento Grid                    */}
      {/* ========================================= */}
      <section className="py-24 bg-linen">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation type="left">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-light text-espresso">
                  대표{" "}
                  <span
                    className="italic text-plum"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    시술
                  </span>
                </h2>
                <p className="text-gray-400 mt-2 text-sm">
                  전문의가 직접 시행하는 프리미엄 시술
                </p>
              </div>
              <Link
                href="/treatments"
                className="hidden md:inline-flex text-sm text-plum hover:text-plum-dark transition-colors font-medium"
              >
                전체 보기 →
              </Link>
            </div>
          </ScrollAnimation>

          {/* Bento: 1 big (2 rows) + 4 regular + 1 CTA */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:auto-rows-[280px]">
            {/* Featured - spans 2 rows on desktop */}
            <ScrollAnimation type="left" className="lg:row-span-2">
              <Link
                href="/treatments"
                className="treatment-card group block relative h-full min-h-[320px] lg:min-h-0 rounded-3xl overflow-hidden"
              >
                <Image
                  src={treatments[0].image}
                  alt={treatments[0].title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <span className="text-xs text-nude-light tracking-wider uppercase">
                    {treatments[0].subtitle}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">
                    {treatments[0].title}
                  </h3>
                  <p className="text-sm text-white/70 mt-2 line-clamp-2 max-w-xs">
                    {treatments[0].description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm text-nude-light mt-4 font-medium group-hover:gap-2 transition-all">
                    자세히 보기
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </ScrollAnimation>

            {/* Regular cards */}
            {treatments.slice(1, 5).map((t, i) => (
              <ScrollAnimation key={t.id} type="scale" delay={i + 1}>
                <Link
                  href="/treatments"
                  className="treatment-card group block relative h-full min-h-[200px] rounded-3xl overflow-hidden"
                >
                  <Image
                    src={t.image}
                    alt={t.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="text-xs text-nude-light tracking-wider uppercase">
                      {t.subtitle}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1">
                      {t.title}
                    </h3>
                  </div>
                </Link>
              </ScrollAnimation>
            ))}

            {/* CTA card */}
            <ScrollAnimation type="scale" delay={5}>
              <Link
                href="/treatments"
                className="group flex flex-col items-center justify-center h-full min-h-[200px] rounded-3xl bg-plum/8 hover:bg-plum/15 transition-colors"
              >
                <div className="w-12 h-12 rounded-full border-2 border-plum/30 flex items-center justify-center group-hover:border-plum transition-colors">
                  <svg
                    className="w-5 h-5 text-plum"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
                <p className="mt-4 text-sm font-medium text-plum">
                  전체 시술 보기
                </p>
              </Link>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* BEFORE & AFTER - Dark Cinematic            */}
      {/* ========================================= */}
      <section className="py-24 bg-espresso text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <ScrollAnimation type="blur">
            <div className="text-center mb-12">
              <h2
                className="italic text-3xl md:text-4xl text-white"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Real Results
              </h2>
              <p className="text-white/40 mt-3 text-sm">
                실제 시술 전후를 직접 비교해보세요
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation type="clip">
            <div className="rounded-2xl overflow-hidden">
              <BeforeAfterSlider
                beforeImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1000&h=700&fit=crop"
                afterImage="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1000&h=700&fit=crop"
                beforeLabel="Before"
                afterLabel="After"
              />
            </div>
            <p className="text-center text-sm text-white/30 mt-4">
              피코레이저 5회 · 물광주사 3회 — 30대 여성
            </p>
          </ScrollAnimation>

          <ScrollAnimation type="up">
            <div className="text-center mt-10">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white/70 text-sm rounded-full hover:bg-white/10 hover:text-white transition-colors"
              >
                더 많은 사례 보기
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* ========================================= */}
      {/* DOCTORS - Magazine Cards                   */}
      {/* ========================================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation type="right">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-light text-espresso">
                  <span
                    className="italic text-plum"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    전문
                  </span>{" "}
                  의료진
                </h2>
                <p className="text-gray-400 mt-2 text-sm">
                  각 분야 전문의가 직접 진료합니다
                </p>
              </div>
              <Link
                href="/doctors"
                className="hidden md:inline-flex text-sm text-plum hover:text-plum-dark transition-colors font-medium"
              >
                전체 보기 →
              </Link>
            </div>
          </ScrollAnimation>

          {/* Horizontal scroll on mobile, grid on desktop */}
          <div className="flex lg:grid lg:grid-cols-3 gap-6 horizontal-scroll lg:overflow-visible -mx-6 px-6 lg:mx-0 lg:px-0">
            {doctors.map((doc, i) => (
              <ScrollAnimation
                key={doc.id}
                type="up"
                delay={i + 1}
                className="flex-shrink-0 w-[280px] lg:w-auto"
              >
                <div className="group relative rounded-3xl overflow-hidden bg-linen">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={doc.image}
                      alt={doc.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 280px, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs text-plum font-medium tracking-wider">
                      {doc.specialty}
                    </p>
                    <h3 className="text-xl font-semibold text-espresso mt-1">
                      {doc.name}
                      <span className="text-sm font-normal text-gray-400 ml-2">
                        {doc.title}
                      </span>
                    </h3>
                    <p
                      className="italic text-sm text-espresso-muted mt-3 leading-relaxed"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      &ldquo;{doc.greeting}&rdquo;
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* REVIEWS - Marquee Auto-Scroll              */}
      {/* ========================================= */}
      <section className="py-24 bg-linen overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 mb-12">
          <ScrollAnimation type="blur">
            <div className="text-center">
              <h2
                className="italic text-3xl md:text-4xl text-espresso"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Voices
              </h2>
              <p className="text-gray-400 mt-3">
                2,847명의 고객이 루체와 함께했습니다
              </p>
            </div>
          </ScrollAnimation>
        </div>
        <ReviewMarquee />
      </section>

      {/* ========================================= */}
      {/* CLINIC SPACE - Full Bleed Image            */}
      {/* ========================================= */}
      <section className="relative h-[50vh] min-h-[400px] lg:h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&h=1080&fit=crop"
          alt="루체피부과 클리닉 내부"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-espresso/40" />
        <div className="relative text-center text-white px-6">
          <ScrollAnimation type="blur">
            <p className="text-xs tracking-[0.3em] uppercase text-white/50 mb-4">
              Our Space
            </p>
            <h2
              className="italic text-3xl md:text-5xl text-white"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              치료가 아닌, 힐링의 공간
            </h2>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white/80 text-sm rounded-full hover:bg-white/10 transition-colors mt-8"
            >
              클리닉 둘러보기
            </Link>
          </ScrollAnimation>
        </div>
      </section>

      {/* ========================================= */}
      {/* LOCATION + BOOKING - Combined              */}
      {/* ========================================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left - Map + Address */}
            <ScrollAnimation type="left">
              <div>
                <h2 className="text-3xl font-light text-espresso mb-8">
                  <span
                    className="italic text-plum"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    오시는
                  </span>{" "}
                  길
                </h2>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-silk mb-6">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <svg
                        className="w-10 h-10 mx-auto mb-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <p className="text-sm">카카오맵 / 네이버맵 연동 영역</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-espresso font-medium">
                    서울특별시 강남구 테헤란로 152, 루체빌딩 3층
                  </p>
                  <p className="text-sm text-gray-400">
                    강남역 2번 출구에서 도보 3분 | 주차 가능
                  </p>
                  <div className="flex items-center gap-6 pt-2 text-sm text-espresso-muted">
                    <div>
                      <span className="text-gray-400">평일</span> 10:00–19:00
                    </div>
                    <div>
                      <span className="text-gray-400">토</span> 10:00–15:00
                    </div>
                    <div>
                      <span className="text-gray-400">일·공휴일</span> 휴진
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Right - Booking Form */}
            <ScrollAnimation type="right">
              <div className="bg-linen rounded-3xl p-8 lg:p-10">
                <h3
                  className="italic text-2xl text-espresso mb-2"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  상담 예약
                </h3>
                <p className="text-sm text-gray-400 mb-8">
                  전문의가 직접 맞춤 상담해 드립니다
                </p>

                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="이름"
                    readOnly
                    className="w-full px-4 py-3.5 bg-white rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-plum transition-colors placeholder:text-gray-400"
                  />
                  <input
                    type="tel"
                    placeholder="연락처"
                    readOnly
                    className="w-full px-4 py-3.5 bg-white rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-plum transition-colors placeholder:text-gray-400"
                  />
                  <select
                    className="w-full px-4 py-3.5 bg-white rounded-xl border border-gray-200 text-sm text-gray-400 focus:outline-none focus:border-plum transition-colors"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      관심 시술 선택
                    </option>
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

                <div className="flex items-center justify-center gap-4 mt-6 pt-6 border-t border-gray-200">
                  <a
                    href="tel:02-1234-5678"
                    className="flex items-center gap-2 text-sm text-espresso-muted hover:text-plum transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
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
