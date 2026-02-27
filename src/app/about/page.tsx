import Image from "next/image";
import Link from "next/link";
import ScrollAnimation from "@/components/ScrollAnimation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "클리닉 소개 | 루체피부과의원",
  description:
    "루체피부과의원은 피부과 전문의 3인이 함께하는 강남 프리미엄 피부클리닉입니다.",
};

const values = [
  {
    num: "01",
    title: "정밀 진단",
    desc: "최신 피부 분석 장비로 피부 상태를 과학적으로 진단하여 맞춤 치료 플랜을 설계합니다.",
  },
  {
    num: "02",
    title: "1:1 맞춤 시술",
    desc: "환자마다 다른 피부 타입과 고민에 맞춘 개인화된 시술 프로토콜을 적용합니다.",
  },
  {
    num: "03",
    title: "프리미엄 장비",
    desc: "울쎄라, 써마지 FLX, 피코슈어 등 글로벌 인증 최신 장비만을 엄선합니다.",
  },
  {
    num: "04",
    title: "체계적 사후관리",
    desc: "시술 후 꼼꼼한 경과 관찰과 맞춤 케어로 최상의 결과를 유지합니다.",
  },
];

const facilities = [
  {
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop",
    label: "대기실",
  },
  {
    src: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=400&fit=crop",
    label: "진료실",
  },
  {
    src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop",
    label: "시술실",
  },
  {
    src: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&h=400&fit=crop",
    label: "상담실",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-linen">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation type="blur">
            <p className="text-xs text-plum tracking-[0.3em] uppercase font-medium mb-3">
              About
            </p>
            <h1 className="text-4xl md:text-5xl font-light text-espresso">
              <span
                className="italic text-plum"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Luce
              </span>{" "}
              Dermatology
            </h1>
            <p className="text-espresso-muted mt-4 max-w-xl">
              당신의 피부에 빛을 더하는 곳. 루체피부과의원을 소개합니다.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation type="left">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop"
                  alt="루체피부과 클리닉"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation type="right">
              <div>
                <h2 className="text-3xl font-light text-espresso">
                  <span
                    className="italic text-plum"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    빛
                  </span>
                  이라는 이름에 담긴 약속
                </h2>
                <div className="mt-6 space-y-4 text-espresso-muted leading-relaxed">
                  <p>
                    루체(Luce)는 이탈리아어로 &lsquo;빛&rsquo;을 의미합니다. 모든 사람의 피부 안에는 고유한 아름다움이 있고, 우리의 역할은 그 빛을 찾아 드러나게 하는 것입니다.
                  </p>
                  <p>
                    2011년 강남에서 시작한 루체피부과는 &lsquo;과학적 진단, 맞춤 시술, 체계적 관리&rsquo;라는 3원칙 아래, 피부과 전문의 3인이 15년 이상의 임상 경험을 바탕으로 진료하고 있습니다.
                  </p>
                  <p>
                    화려한 마케팅보다 정직한 진료를, 과한 시술보다 꼭 필요한 치료를 권하는 것이 루체의 철학입니다.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-linen">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation type="blur">
            <div className="text-center mb-16">
              <h2
                className="italic text-3xl md:text-4xl text-espresso"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Our Promise
              </h2>
              <p className="text-gray-400 mt-3 text-sm">
                루체가 지키는 4가지 약속
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <ScrollAnimation key={v.num} type="scale" delay={i + 1}>
                <div className="bg-white rounded-3xl p-8 h-full hover:shadow-lg transition-shadow duration-300">
                  <span
                    className="text-4xl font-light text-plum/20"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {v.num}
                  </span>
                  <h3 className="text-xl font-semibold text-espresso mt-2">
                    {v.title}
                  </h3>
                  <p className="text-sm text-espresso-muted mt-3 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation type="left">
            <div className="mb-12">
              <h2 className="text-3xl font-light text-espresso">
                <span
                  className="italic text-plum"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  클리닉
                </span>{" "}
                시설
              </h2>
              <p className="text-gray-400 mt-2 text-sm">
                편안하고 쾌적한 환경에서 최상의 진료를 받으실 수 있습니다
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {facilities.map((room, i) => (
              <ScrollAnimation key={room.label} type="clip" delay={i + 1}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                  <Image
                    src={room.src}
                    alt={room.label}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white text-sm font-medium">
                      {room.label}
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
            <h2
              className="italic text-2xl md:text-3xl text-espresso"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              직접 방문하여 경험해보세요
            </h2>
            <p className="text-gray-400 mt-3 text-sm">
              강남역 2번 출구에서 도보 3분
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
              <Link
                href="/contact"
                className="inline-flex justify-center px-8 py-3.5 bg-plum text-white font-medium rounded-full hover:bg-plum-dark transition-colors"
              >
                상담 예약
              </Link>
              <a
                href="tel:02-1234-5678"
                className="inline-flex justify-center px-8 py-3.5 border border-plum text-plum font-medium rounded-full hover:bg-plum hover:text-white transition-colors"
              >
                02-1234-5678
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <div className="lg:hidden h-16" />
    </>
  );
}
