import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-espresso text-white/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-baseline gap-0.5">
              <span
                className="text-3xl italic font-semibold text-white"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Luce
              </span>
              <span className="text-sm font-light text-white/50">피부과</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/40 max-w-sm">
              당신의 피부에 빛을 더하다.
              <br />
              피부과 전문의가 함께하는 프리미엄 스킨케어.
            </p>
            <div className="flex gap-5 mt-6">
              {["Instagram", "YouTube", "Blog"].map((name) => (
                <a
                  key={name}
                  href="#"
                  className="text-xs text-white/30 hover:text-white/70 transition-colors tracking-wider uppercase"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs text-white/30 tracking-[0.2em] uppercase mb-5">
              시술
            </h4>
            <ul className="space-y-3">
              {[
                "리프팅",
                "레이저",
                "보톡스 & 필러",
                "피부관리",
                "여드름 & 흉터",
                "색소 & 미백",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/treatments"
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div className="lg:col-span-4">
            <h4 className="text-xs text-white/30 tracking-[0.2em] uppercase mb-5">
              진료 안내
            </h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-white/50">
                  서울특별시 강남구 테헤란로 152, 루체빌딩 3층
                </p>
                <p className="text-white/30 text-xs mt-1">
                  강남역 2번 출구 도보 3분
                </p>
              </div>
              <div>
                <a
                  href="tel:02-1234-5678"
                  className="text-white font-medium text-lg"
                >
                  02-1234-5678
                </a>
              </div>
              <div className="text-white/40 space-y-1">
                <p>평일 10:00 – 19:00</p>
                <p>토요일 10:00 – 15:00</p>
                <p>일요일·공휴일 휴진</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-white/25">
            © 2026 루체피부과의원. All rights reserved.
          </p>
          <p className="text-xs text-white/25">
            사업자등록번호: 123-45-67890 | 대표: 김서연
          </p>
        </div>
      </div>
    </footer>
  );
}
