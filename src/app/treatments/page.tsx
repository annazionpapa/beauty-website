import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { treatments } from "@/data/treatments";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "시술안내 | 루체피부과의원",
  description: "리프팅, 레이저, 보톡스, 필러, 피부관리, 여드름 치료까지. 루체피부과의 다양한 전문 시술을 안내합니다.",
};

export default function TreatmentsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&h=800&fit=crop"
            alt="시술안내"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/80 to-navy/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <p className="text-rose-light text-sm tracking-[0.3em] uppercase mb-3">Treatments</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">시술 안내</h1>
          <p className="text-gray-300 mt-4 max-w-xl">
            루체피부과의 전문 시술로 건강하고 아름다운 피부를 만나보세요.
          </p>
        </div>
      </section>

      {/* Treatment List */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {treatments.map((treatment, idx) => (
              <ScrollReveal key={treatment.id}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    idx % 2 === 1 ? "lg:direction-rtl" : ""
                  }`}
                >
                  {/* Image */}
                  <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                    <Image
                      src={treatment.image}
                      alt={treatment.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>

                  {/* Content */}
                  <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                    <p className="text-rose text-sm tracking-[0.2em] uppercase font-medium mb-2">
                      {treatment.subtitle}
                    </p>
                    <h2 className="text-3xl font-bold text-navy mb-4">{treatment.title}</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">{treatment.description}</p>

                    {/* Treatment Details */}
                    <div className="space-y-2 mb-6">
                      {treatment.details.map((detail) => (
                        <div key={detail} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 bg-rose rounded-full shrink-0" />
                          <span className="text-gray-600">{detail}</span>
                        </div>
                      ))}
                    </div>

                    {/* Info Tags */}
                    <div className="flex flex-wrap gap-3 mb-8">
                      <span className="px-4 py-2 bg-white rounded-full text-sm text-navy font-medium">
                        💰 {treatment.priceHint}
                      </span>
                      <span className="px-4 py-2 bg-white rounded-full text-sm text-navy font-medium">
                        ⏱ {treatment.duration}
                      </span>
                      <span className="px-4 py-2 bg-white rounded-full text-sm text-navy font-medium">
                        🔄 {treatment.recovery}
                      </span>
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-8 py-3.5 bg-rose text-white font-medium rounded-full hover:bg-rose-dark transition-colors"
                    >
                      이 시술 상담받기
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              어떤 시술이 나에게 맞을까요?
            </h2>
            <p className="text-gray-400 mb-8">
              피부과 전문의가 직접 상담하여 가장 적합한 시술을 추천해 드립니다.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-rose text-white font-medium rounded-full hover:bg-rose-dark transition-colors text-lg"
            >
              무료 상담 예약하기
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <div className="lg:hidden h-16" />
    </>
  );
}
