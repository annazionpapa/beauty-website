import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { doctors } from "@/data/doctors";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "의료진 소개 | 루체피부과의원",
  description: "피부과 전문의 3인이 각 분야의 전문성으로 최적의 진료를 제공합니다.",
};

export default function DoctorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1920&h=800&fit=crop"
            alt="의료진 소개"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/80 to-navy/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <p className="text-rose-light text-sm tracking-[0.3em] uppercase mb-3">Doctors</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">의료진 소개</h1>
          <p className="text-gray-300 mt-4 max-w-xl">
            피부과 전문의 3인이 각 분야의 전문성으로 최적의 진료를 제공합니다.
          </p>
        </div>
      </section>

      {/* Doctors Detail */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {doctors.map((doctor, idx) => (
              <ScrollReveal key={doctor.id}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start`}>
                  {/* Photo */}
                  <div className={`relative aspect-[3/4] max-h-[600px] rounded-2xl overflow-hidden ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>

                  {/* Info */}
                  <div className={`py-4 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                    <p className="text-rose text-sm tracking-[0.2em] uppercase font-medium mb-2">
                      {doctor.specialty}
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-navy mb-1">
                      {doctor.name}
                      <span className="text-lg font-normal text-gray-500 ml-3">{doctor.title}</span>
                    </h2>
                    <p className="text-sm text-gray-400 mb-6">{doctor.nameEn}</p>

                    {/* Greeting */}
                    <blockquote className="bg-blush rounded-xl p-6 mb-8 border-l-4 border-rose">
                      <p className="text-gray-600 italic leading-relaxed">
                        &ldquo;{doctor.greeting}&rdquo;
                      </p>
                    </blockquote>

                    {/* Education */}
                    <div className="mb-6">
                      <h3 className="text-sm font-bold text-navy uppercase tracking-wider mb-3">학력</h3>
                      <ul className="space-y-2">
                        {doctor.education.map((edu) => (
                          <li key={edu} className="flex items-center gap-3 text-gray-600">
                            <div className="w-1.5 h-1.5 bg-rose rounded-full shrink-0" />
                            {edu}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Career */}
                    <div className="mb-6">
                      <h3 className="text-sm font-bold text-navy uppercase tracking-wider mb-3">경력</h3>
                      <ul className="space-y-2">
                        {doctor.career.map((item) => (
                          <li key={item} className="flex items-center gap-3 text-gray-600">
                            <div className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Certifications */}
                    <div className="mb-8">
                      <h3 className="text-sm font-bold text-navy uppercase tracking-wider mb-3">자격 및 활동</h3>
                      <div className="flex flex-wrap gap-2">
                        {doctor.certifications.map((cert) => (
                          <span
                            key={cert}
                            className="px-3 py-1.5 bg-white text-sm text-navy rounded-full border border-gray-200"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-8 py-3.5 bg-rose text-white font-medium rounded-full hover:bg-rose-dark transition-colors"
                    >
                      {doctor.name} 원장 상담 예약
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="lg:hidden h-16" />
    </>
  );
}
