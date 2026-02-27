"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function MobileBottomCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-white/95 backdrop-blur-md border-t border-gray-200 px-4 py-3 flex gap-3">
        <a
          href="tel:02-1234-5678"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-plum text-plum text-sm font-medium rounded-full"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          전화
        </a>
        <Link
          href="/contact"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-plum text-white text-sm font-medium rounded-full"
        >
          상담 예약
        </Link>
      </div>
    </div>
  );
}
