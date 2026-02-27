import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { treatments } from "@/data/treatments";
import { doctors } from "@/data/doctors";
import { reviews, overallStats } from "@/data/reviews";

export default function Home() {
  return (
    <>
      {/* ============================== */}
      {/* HERO SECTION */}
      {/* ============================== */}
      <section className="relative h-screen min-h-[700px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1920&h=1080&fit=crop"
            alt="루체피부과 히어로"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/50 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <p className="text-rose-light text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Luce Dermatology
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              당신의 피부에
              <br />
              <span className="text-gradient-rose">빛</span>을 더하다
            </h1>
            <p className="text-lg text-gray-300 mt-6 mb-10 max-w-lg leading-relaxed">
              피부과 전문의 3인이 1:1 맞춤 진료로
              <br />
              당신만의 아름다움을 완성합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-rose text-white font-medium rounded-full hover:bg-rose-dark transition-colors text-base"
              >
                무료 상담 예약
              </Link>
              <Link
                href="/treatments"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-colors text-base"
              >
                시술 안내 보기
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="scroll-indicator">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* ============================== */}
      {/* STATS BAR */}
      {/* ============================== */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal stagger>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "15+", label: "피부과 전문의 경력", suffix: "년" },
                { number: "20,000+", label: "누적 시술 건수", suffix: "건" },
                { number: "98.2%", label: "고객 만족도", suffix: "" },
                { number: "4.9", label: "평균 리뷰 평점", suffix: "/5.0" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl md:text-4xl font-bold text-rose">
                    {stat.number}
                    <span className="text-lg font-normal text-gray-400">{stat.suffix}</span>
                  </p>
                  <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================== */}
      {/* CLINIC PHILOSOPHY */}
      {/* ============================== */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-rose text-sm tracking-[0.2em] uppercase font-medium mb-3">
                Why Luce
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy">
                루체가 특별한 이유
              </h2>
              <p className="text-gray-500 mt-4 max-w-2xl mx-auto leading-relaxed">
                단순한 시술이 아닌, 당신의 피부를 근본부터 이해하고
                <br className="hidden sm:block" />
                최적의 솔루션을 제안합니다.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                ),
                title: "1:1 맞춤 진료",
                description:
                  "환자마다 다른 피부 타입과 고민을 정밀 분석하여, 가장 효과적인 맞춤 치료 플랜을 설계합니다.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: "최신 프리미엄 장비",
                description:
                  "울쎄라, 써마지 FLX, 피코슈어 등 글로벌 인증 최신 장비만을 엄선하여 안전하고 효과적인 시술을 제공합니다.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "체계적 사후관리",
                description:
                  "시술 후에도 꼼꼼한 경과 관찰과 맞춤 케어 프로그램으로 최상의 결과를 유지할 수 있도록 도와드립니다.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i + 1}>
                <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300 h-full">
                  <div className="w-16 h-16 bg-blush rounded-full flex items-center justify-center mx-auto mb-6 text-rose">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== */}
      {/* TREATMENTS */}
      {/* ============================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-rose text-sm tracking-[0.2em] uppercase font-medium mb-3">
                Treatments
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy">
                시술 안내
              </h2>
              <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                다양한 피부 고민에 맞는 전문 시술을 제공합니다.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((treatment, i) => (
              <ScrollReveal key={treatment.id} delay={i + 1}>
                <Link href="/treatments" className="treatment-card group block rounded-2xl overflow-hidden bg-cream hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={treatment.image}
                      alt={treatment.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="overlay absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent flex items-end p-5">
                      <span className="text-white text-sm font-medium">{treatment.priceHint}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-xs text-rose font-medium tracking-wider uppercase mb-1">
                      {treatment.subtitle}
                    </p>
                    <h3 className="text-lg font-bold text-navy mb-2">
                      {treatment.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                      {treatment.description}
                    </p>
                    <div className="mt-4 flex items-center text-rose text-sm font-medium group-hover:translate-x-1 transition-transform">
                      자세히 보기
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-12">
              <Link
                href="/treatments"
                className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-rose text-rose font-medium rounded-full hover:bg-rose hover:text-white transition-colors"
              >
                전체 시술 보기
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================== */}
      {/* BEFORE & AFTER */}
      {/* ============================== */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-rose text-sm tracking-[0.2em] uppercase font-medium mb-3">
                Before & After
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy">
                실제 시술 결과
              </h2>
              <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                루체피부과에서 경험한 변화를 직접 확인해보세요.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal delay={1}>
              <div>
                <BeforeAfterSlider
                  beforeImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop"
                  afterImage="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=600&fit=crop"
                  beforeLabel="시술 전"
                  afterLabel="시술 후"
                />
                <p className="mt-4 text-center text-sm text-gray-500">
                  피코레이저 5회 · 물광주사 3회 | 30대 여성
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div>
                <BeforeAfterSlider
                  beforeImage="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&h=600&fit=crop"
                  afterImage="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&h=600&fit=crop"
                  beforeLabel="시술 전"
                  afterLabel="시술 후"
                />
                <p className="mt-4 text-center text-sm text-gray-500">
                  울쎄라 리프팅 1회 · 보톡스 | 40대 여성
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="text-center mt-12">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-rose text-rose font-medium rounded-full hover:bg-rose hover:text-white transition-colors"
              >
                더 많은 사례 보기
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================== */}
      {/* DOCTORS */}
      {/* ============================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-rose text-sm tracking-[0.2em] uppercase font-medium mb-3">
                Doctors
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy">
                의료진 소개
              </h2>
              <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                피부과 전문의 3인이 각 분야의 전문성으로 최적의 진료를 제공합니다.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doctors.map((doctor, i) => (
              <ScrollReveal key={doctor.id} delay={i + 1}>
                <div className="group bg-cream rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <p className="text-xs text-rose font-medium tracking-wider uppercase mb-1">
                      {doctor.specialty}
                    </p>
                    <h3 className="text-xl font-bold text-navy">
                      {doctor.name}
                      <span className="text-sm font-normal text-gray-500 ml-2">
                        {doctor.title}
                      </span>
                    </h3>
                    <ul className="mt-3 space-y-1">
                      {doctor.certifications.slice(0, 2).map((cert) => (
                        <li key={cert} className="text-sm text-gray-500">{cert}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-12">
              <Link
                href="/doctors"
                className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-navy text-navy font-medium rounded-full hover:bg-navy hover:text-white transition-colors"
              >
                의료진 더 알아보기
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================== */}
      {/* REVIEWS */}
      {/* ============================== */}
      <section className="py-24 bg-blush">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-rose text-sm tracking-[0.2em] uppercase font-medium mb-3">
                Reviews
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy">
                고객 후기
              </h2>
              <div className="flex items-center justify-center gap-4 mt-4">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-2xl font-bold text-navy">{overallStats.averageRating}</span>
                <span className="text-gray-500">({overallStats.totalReviews.toLocaleString()}개 리뷰)</span>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.slice(0, 6).map((review, i) => (
              <ScrollReveal key={review.id} delay={i + 1}>
                <div className="bg-white rounded-2xl p-6 h-full flex flex-col hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <svg
                        key={idx}
                        className={`w-4 h-4 ${idx < Math.floor(review.rating) ? "text-gold" : "text-gray-200"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed flex-1">
                    &ldquo;{review.content}&rdquo;
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-navy">{review.name}</p>
                      <p className="text-xs text-gray-400">{review.age}</p>
                    </div>
                    <span className="text-xs px-3 py-1 bg-blush text-rose rounded-full font-medium">
                      {review.treatment}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== */}
      {/* CLINIC INTERIOR */}
      {/* ============================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-rose text-sm tracking-[0.2em] uppercase font-medium mb-3">
                Clinic
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy">
                클리닉 시설
              </h2>
              <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                편안하고 쾌적한 환경에서 최상의 진료를 받으실 수 있습니다.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop", label: "대기실" },
              { src: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=400&fit=crop", label: "진료실" },
              { src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop", label: "시술실" },
              { src: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&h=400&fit=crop", label: "상담실" },
            ].map((room, i) => (
              <ScrollReveal key={room.label} delay={i + 1}>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                  <Image
                    src={room.src}
                    alt={room.label}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white text-sm font-medium">{room.label}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== */}
      {/* LOCATION */}
      {/* ============================== */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-rose text-sm tracking-[0.2em] uppercase font-medium mb-3">
                Location
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy">
                오시는 길
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Map Placeholder */}
              <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[400px] rounded-2xl overflow-hidden bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <div className="text-center">
                    <svg className="w-12 h-12 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-sm">카카오맵 / 네이버맵 연동 영역</p>
                    <p className="text-xs mt-1">서울특별시 강남구 테헤란로 152</p>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-col justify-center space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-navy mb-2">주소</h3>
                  <p className="text-gray-600">
                    서울특별시 강남구 테헤란로 152, 루체빌딩 3층
                    <br />
                    <span className="text-sm text-gray-400">
                      (강남역 2번 출구에서 도보 3분)
                    </span>
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-2">진료시간</h3>
                  <div className="space-y-1.5 text-gray-600">
                    <div className="flex justify-between max-w-xs">
                      <span>평일</span>
                      <span className="font-medium">10:00 - 19:00</span>
                    </div>
                    <div className="flex justify-between max-w-xs">
                      <span>토요일</span>
                      <span className="font-medium">10:00 - 15:00</span>
                    </div>
                    <div className="flex justify-between max-w-xs">
                      <span>점심시간</span>
                      <span className="font-medium">13:00 - 14:00</span>
                    </div>
                    <div className="flex justify-between max-w-xs text-rose">
                      <span>일요일·공휴일</span>
                      <span className="font-medium">휴진</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-2">연락처</h3>
                  <p className="text-gray-600">
                    <a href="tel:02-1234-5678" className="text-xl font-bold text-rose hover:text-rose-dark transition-colors">
                      02-1234-5678
                    </a>
                  </p>
                </div>
                <div className="flex gap-3">
                  <a
                    href="tel:02-1234-5678"
                    className="flex items-center gap-2 px-6 py-3 bg-navy text-white rounded-full hover:bg-navy-light transition-colors text-sm font-medium"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    전화하기
                  </a>
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 px-6 py-3 bg-rose text-white rounded-full hover:bg-rose-dark transition-colors text-sm font-medium"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    온라인 상담
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================== */}
      {/* FINAL CTA */}
      {/* ============================== */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1920&h=600&fit=crop"
            alt="상담 예약 배경"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-rose-dark/80" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-rose-pale text-sm tracking-[0.2em] uppercase font-medium mb-4">
              Consultation
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              더 나은 피부를 위한
              <br />
              첫걸음을 시작하세요
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              피부과 전문의가 직접 상담하고, 당신에게 꼭 맞는
              <br className="hidden sm:block" />
              맞춤 치료 플랜을 제안해 드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-4 bg-rose text-white font-medium rounded-full hover:bg-rose-dark transition-colors text-lg"
              >
                무료 상담 예약하기
              </Link>
              <a
                href="tel:02-1234-5678"
                className="inline-flex items-center justify-center px-10 py-4 border-2 border-white/40 text-white font-medium rounded-full hover:bg-white/10 transition-colors text-lg"
              >
                02-1234-5678
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mobile Bottom CTA Space */}
      <div className="lg:hidden h-16" />
    </>
  );
}
