"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "홈" },
  { href: "/treatments", label: "시술안내" },
  { href: "/doctors", label: "의료진" },
  { href: "/gallery", label: "비포&애프터" },
  { href: "/about", label: "클리닉" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const showWhite = scrolled || !isHome || mobileOpen;
  const headerBg = showWhite
    ? "bg-white/95 backdrop-blur-md shadow-sm"
    : "bg-transparent";
  const textColor = showWhite ? "text-charcoal" : "text-white";
  const logoColor = showWhite ? "text-navy" : "text-white";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className={`text-xl lg:text-2xl font-bold transition-colors ${logoColor}`}>
            <span className="text-rose">L</span>uce
            <span className="text-sm font-normal ml-1.5 opacity-70">피부과</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-rose ${
                  pathname === item.href
                    ? "text-rose"
                    : textColor
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-rose text-white text-sm font-medium rounded-full hover:bg-rose-dark transition-colors"
            >
              상담 예약
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative w-7 h-5 flex flex-col justify-between"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "메뉴 닫기" : "메뉴 열기"}
          >
            <span
              className={`w-full h-0.5 rounded-full transition-all duration-300 ${
                showWhite ? "bg-charcoal" : "bg-white"
              } ${mobileOpen ? "rotate-45 translate-y-[9px]" : ""}`}
            />
            <span
              className={`w-full h-0.5 rounded-full transition-all duration-300 ${
                showWhite ? "bg-charcoal" : "bg-white"
              } ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`w-full h-0.5 rounded-full transition-all duration-300 ${
                showWhite ? "bg-charcoal" : "bg-white"
              } ${mobileOpen ? "-rotate-45 -translate-y-[9px]" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-white ${
          mobileOpen ? "max-h-[500px] border-t border-gray-100" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 gap-0.5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`py-3.5 text-base font-medium border-b border-gray-100 transition-colors ${
                pathname === item.href
                  ? "text-rose"
                  : "text-charcoal hover:text-rose"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-4 mb-2 py-3.5 text-center bg-rose text-white text-base font-medium rounded-full hover:bg-rose-dark transition-colors"
          >
            상담 예약
          </Link>
        </nav>
      </div>
    </header>
  );
}
