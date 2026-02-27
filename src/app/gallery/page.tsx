import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "비포&애프터 | 루체피부과의원",
  description: "루체피부과에서 경험한 실제 시술 전후 변화를 확인해보세요.",
};

const galleryItems = [
  {
    id: 1,
    category: "리프팅",
    before: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
    after: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=600&fit=crop",
    treatment: "울쎄라 리프팅 2회",
    patient: "40대 여성",
    period: "3개월 경과",
  },
  {
    id: 2,
    category: "레이저",
    before: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&h=600&fit=crop",
    after: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&h=600&fit=crop",
    treatment: "피코레이저 5회 + 토닝 10회",
    patient: "30대 여성",
    period: "6개월 경과",
  },
  {
    id: 3,
    category: "보톡스 & 필러",
    before: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&h=600&fit=crop",
    after: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&h=600&fit=crop",
    treatment: "보톡스 + 필러 복합 시술",
    patient: "30대 여성",
    period: "2주 경과",
  },
  {
    id: 4,
    category: "피부관리",
    before: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
    after: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&h=600&fit=crop",
    treatment: "물광주사 5회 + LDM 10회",
    patient: "50대 여성",
    period: "4개월 경과",
  },
  {
    id: 5,
    category: "여드름",
    before: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&h=600&fit=crop",
    after: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=600&fit=crop",
    treatment: "PDT + 프락셀 3회",
    patient: "20대 여성",
    period: "3개월 경과",
  },
  {
    id: 6,
    category: "색소",
    before: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&h=600&fit=crop",
    after: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&h=600&fit=crop",
    treatment: "기미레이저 10회 + 미백주사",
    patient: "40대 여성",
    period: "5개월 경과",
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=1920&h=800&fit=crop"
            alt="비포앤애프터"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/80 to-navy/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <p className="text-rose-light text-sm tracking-[0.3em] uppercase mb-3">Before & After</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">비포 & 애프터</h1>
          <p className="text-gray-300 mt-4 max-w-xl">
            루체피부과에서 경험한 실제 변화를 직접 확인해보세요.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-gray-500 max-w-2xl mx-auto">
                슬라이더를 좌우로 드래그하여 시술 전후를 비교해보세요.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {galleryItems.map((item, i) => (
              <ScrollReveal key={item.id} delay={i % 2 + 1}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <BeforeAfterSlider
                    beforeImage={item.before}
                    afterImage={item.after}
                    beforeLabel="시술 전"
                    afterLabel="시술 후"
                  />
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-blush text-rose text-xs font-medium rounded-full mb-3">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold text-navy mb-2">{item.treatment}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>{item.patient}</span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full" />
                      <span>{item.period}</span>
                    </div>
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
              나도 변할 수 있을까요?
            </h2>
            <p className="text-gray-400 mb-8">
              지금 바로 전문의와 상담하고, 나에게 맞는 시술을 찾아보세요.
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
