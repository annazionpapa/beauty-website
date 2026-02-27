"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "홈" },
  { href: "/treatments", label: "시술" },
  { href: "/doctors", label: "의료진" },
  { href: "/gallery", label: "갤러리" },
  { href: "/about", label: "소개" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Serif italic */}
            <Link href="/" className="flex items-baseline gap-0.5">
              <span
                className={`text-2xl italic font-semibold transition-colors ${
                  scrolled ? "text-plum" : "text-espresso"
                }`}
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Luce
              </span>
              <span
                className={`text-sm font-light tracking-tight transition-colors ${
                  scrolled ? "text-espresso-muted" : "text-espresso-light"
                }`}
              >
                피부과
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm tracking-wide transition-colors relative py-1 ${
                    pathname === item.href
                      ? "text-plum font-medium"
                      : "text-espresso-light hover:text-plum"
                  }`}
                >
                  {item.label}
                  {pathname === item.href && (
                    <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-plum" />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="hidden lg:inline-flex px-5 py-2 bg-plum text-white text-sm font-medium rounded-full hover:bg-plum-dark transition-colors"
              >
                상담 예약
              </Link>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
                aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
              >
                <span
                  className={`block w-6 h-px bg-espresso transition-all duration-300 ${
                    menuOpen ? "rotate-45 translate-y-[4px]" : ""
                  }`}
                />
                <span
                  className={`block w-6 h-px bg-espresso transition-all duration-300 ${
                    menuOpen ? "-rotate-45 -translate-y-[3px]" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Side Drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-espresso/30 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 bottom-0 w-72 bg-white shadow-2xl transition-transform duration-500 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-8 pt-24 flex flex-col h-full">
            <nav className="flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-lg transition-colors ${
                    pathname === item.href
                      ? "text-plum font-semibold"
                      : "text-espresso-light"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto pb-8">
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="block w-full py-3.5 bg-plum text-white text-center font-medium rounded-full"
              >
                상담 예약
              </Link>
              <a
                href="tel:02-1234-5678"
                className="block w-full py-3 text-center text-sm text-espresso-muted mt-3"
              >
                02-1234-5678
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
