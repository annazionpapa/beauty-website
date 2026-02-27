import Image from "next/image";
import Link from "next/link";
import ScrollAnimation from "@/components/ScrollAnimation";
import { doctors } from "@/data/doctors";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "의료진 소개 | 루체피부과의원",
  description:
    "피부과 전문의 3인이 각 분야의 전문성으로 최적의 진료를 제공합니다.",
};

export default function DoctorsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-linen">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation type="blur">
            <p className="text-xs text-plum tracking-[0.3em] uppercase font-medium mb-3">
              Doctors
            </p>
            <h1 className="text-4xl md:text-5xl font-light text-espresso">
              <span className="text-plum">전문</span>{" "}
              의료진
            </h1>
            <p className="text-espresso-muted mt-4 max-w-xl">
              각 분야의 전문의가 당신의 피부 고민에 최적의 솔루션을 제안합니다.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Doctor Profiles */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {doctors.map((doctor, i) => (
            <div
              key={doctor.id}
              className={`grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start py-16 ${
                i < doctors.length - 1 ? "border-b border-gray-100" : ""
              }`}
            >
              {/* Photo - 2/5 width */}
              <ScrollAnimation
                type={i % 2 === 0 ? "left" : "right"}
                className={`lg:col-span-2 ${i % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden max-w-sm mx-auto lg:max-w-none">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 80vw, 35vw"
                  />
                </div>
              </ScrollAnimation>

              {/* Info - 3/5 width */}
              <ScrollAnimation
                type={i % 2 === 0 ? "right" : "left"}
                className={`lg:col-span-3 ${i % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <div className="lg:py-8">
                  <span className="text-xs text-plum tracking-wider uppercase font-medium">
                    {doctor.specialty}
                  </span>
                  <h2 className="text-3xl font-semibold text-espresso mt-2">
                    {doctor.name}
                    <span className="text-lg font-normal text-gray-400 ml-3">
                      {doctor.title}
                    </span>
                  </h2>

                  {/* Quote */}
                  <blockquote className="mt-6 pl-4 border-l-2 border-plum/30">
                    <p className="italic text-lg text-espresso-muted leading-relaxed">
                      &ldquo;{doctor.greeting}&rdquo;
                    </p>
                  </blockquote>

                  {/* Education & Career */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
                    <div>
                      <h3 className="text-sm font-semibold text-espresso mb-3">
                        학력
                      </h3>
                      <ul className="space-y-1.5">
                        {doctor.education.map((edu) => (
                          <li key={edu} className="text-sm text-espresso-muted">
                            {edu}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-espresso mb-3">
                        경력
                      </h3>
                      <ul className="space-y-1.5">
                        {doctor.career.map((c) => (
                          <li key={c} className="text-sm text-espresso-muted">
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Certifications as tags */}
                  <div className="flex flex-wrap gap-2 mt-8">
                    {doctor.certifications.map((cert) => (
                      <span
                        key={cert}
                        className="px-3 py-1.5 bg-plum/8 text-plum text-xs rounded-full"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-linen">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <ScrollAnimation type="blur">
            <h2 className="text-2xl md:text-3xl text-espresso font-light">
              전문의와 직접 상담하세요
            </h2>
            <p className="text-gray-400 mt-3 text-sm">
              1:1 맞춤 상담으로 최적의 치료 플랜을 설계합니다
            </p>
            <Link
              href="/contact"
              className="inline-flex px-8 py-3.5 bg-plum text-white font-medium rounded-full hover:bg-plum-dark transition-colors mt-8"
            >
              상담 예약하기
            </Link>
          </ScrollAnimation>
        </div>
      </section>

      <div className="lg:hidden h-16" />
    </>
  );
}
