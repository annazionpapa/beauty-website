import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "클리닉 소개 | 루체피부과의원",
  description: "루체피부과의원은 피부과 전문의 3인이 함께하는 강남 프리미엄 피부클리닉입니다.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&h=800&fit=crop"
            alt="클리닉 소개"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/80 to-navy/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <p className="text-rose-light text-sm tracking-[0.3em] uppercase mb-3">About Luce</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">클리닉 소개</h1>
          <p className="text-gray-300 mt-4 max-w-xl">
            당신의 피부에 빛을 더하는 곳, 루체피부과의원입니다.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-rose text-sm tracking-[0.2em] uppercase font-medium mb-3">
                  Our Story
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
                  아름다움의 시작,
                  <br />
                  피부를 이해하는 것부터
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    루체(Luce)는 이탈리아어로 &lsquo;빛&rsquo;을 의미합니다.
                    우리는 모든 분의 피부 속에 숨겨진 빛을 찾아,
                    가장 아름다운 모습으로 빛날 수 있도록 돕겠다는
                    철학에서 시작되었습니다.
                  </p>
                  <p>
                    2018년 개원 이래, 루체피부과의원은 &lsquo;정직한 진료&rsquo;를
                    최우선 가치로 삼아왔습니다. 불필요한 시술을 권하지 않고,
                    환자 한 분 한 분의 피부 상태와 생활 패턴을 면밀히 분석하여
                    가장 효과적인 맞춤 솔루션을 제안합니다.
                  </p>
                  <p>
                    피부과 전문의 3인이 각자의 전문 분야에서 축적한
                    풍부한 경험과 최신 의학 지식을 바탕으로,
                    당신만의 아름다움을 완성해 드립니다.
                  </p>
                </div>
              </div>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=1000&fit=crop"
                  alt="루체피부과 내부"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-rose text-sm tracking-[0.2em] uppercase font-medium mb-3">
                Our Values
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy">
                루체의 핵심 가치
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "정직한 진료",
                description: "불필요한 시술을 권하지 않습니다. 환자에게 가장 필요한 치료만을 정직하게 제안합니다.",
              },
              {
                number: "02",
                title: "맞춤 솔루션",
                description: "같은 고민이라도 피부 타입과 상태에 따라 최적의 치료법은 다릅니다. 1:1 맞춤 분석으로 접근합니다.",
              },
              {
                number: "03",
                title: "최신 기술",
                description: "글로벌 인증을 받은 최신 장비와 검증된 시술법만을 도입하여 안전하고 효과적인 치료를 보장합니다.",
              },
              {
                number: "04",
                title: "지속적 관리",
                description: "시술 후에도 꼼꼼한 경과 관찰과 맞춤 케어로 최상의 결과를 오랫동안 유지할 수 있도록 합니다.",
              },
            ].map((value, i) => (
              <ScrollReveal key={value.number} delay={i + 1}>
                <div className="text-center p-6">
                  <span className="text-4xl font-bold text-rose/20">{value.number}</span>
                  <h3 className="text-lg font-bold text-navy mt-2 mb-3">{value.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-rose text-sm tracking-[0.2em] uppercase font-medium mb-3">
                Equipment
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy">
                프리미엄 장비
              </h2>
              <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                글로벌 인증을 받은 최신 프리미엄 장비로 안전하고 효과적인 시술을 제공합니다.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "울쎄라", desc: "HIFU 리프팅", icon: "🔬" },
              { name: "써마지 FLX", desc: "RF 리프팅", icon: "⚡" },
              { name: "피코슈어", desc: "피코초 레이저", icon: "💎" },
              { name: "인모드", desc: "복합 시술", icon: "✨" },
              { name: "프락셀", desc: "흉터 치료", icon: "🔆" },
              { name: "엑셀V", desc: "혈관 레이저", icon: "💡" },
              { name: "LDM", desc: "초음파 관리", icon: "🎯" },
              { name: "제네시스", desc: "피부 톤 개선", icon: "🌟" },
            ].map((equip, i) => (
              <ScrollReveal key={equip.name} delay={i + 1}>
                <div className="bg-white rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                  <span className="text-3xl mb-3 block">{equip.icon}</span>
                  <h3 className="font-bold text-navy">{equip.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">{equip.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Interior Gallery */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-rose text-sm tracking-[0.2em] uppercase font-medium mb-3">
                Interior
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy">
                클리닉 시설
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop", label: "로비 & 대기실", span: "md:col-span-2" },
              { src: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=600&fit=crop", label: "진료실", span: "" },
              { src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=600&fit=crop", label: "시술실", span: "" },
              { src: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&h=600&fit=crop", label: "상담실 & 파우더룸", span: "md:col-span-2" },
            ].map((room, i) => (
              <ScrollReveal key={room.label} delay={i + 1} className={room.span}>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                  <Image
                    src={room.src}
                    alt={room.label}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <span className="text-white font-medium">{room.label}</span>
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
              루체피부과를 직접 만나보세요
            </h2>
            <p className="text-gray-400 mb-8">
              편안한 환경에서 전문의와 1:1 상담을 받아보실 수 있습니다.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-rose text-white font-medium rounded-full hover:bg-rose-dark transition-colors text-lg"
            >
              방문 상담 예약하기
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <div className="lg:hidden h-16" />
    </>
  );
}
