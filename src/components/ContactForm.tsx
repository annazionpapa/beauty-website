"use client";

import { useState } from "react";

const treatmentOptions = [
  "리프팅 (울쎄라, 써마지 등)",
  "레이저 (피코, 프락셀 등)",
  "보톡스 & 필러",
  "피부관리 (물광, PRP 등)",
  "여드름 & 흉터",
  "색소 & 미백",
  "기타 / 잘 모르겠어요",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    treatment: "",
    message: "",
    agree: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `상담 예약이 접수되었습니다!\n\n이름: ${formData.name}\n연락처: ${formData.phone}\n관심 시술: ${formData.treatment}\n\n빠른 시간 내에 연락드리겠습니다.`
    );
    setFormData({
      name: "",
      phone: "",
      treatment: "",
      message: "",
      agree: false,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-espresso mb-2"
        >
          이름 <span className="text-plum">*</span>
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-plum transition-colors"
          placeholder="홍길동"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-espresso mb-2"
        >
          연락처 <span className="text-plum">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          required
          value={formData.phone}
          onChange={(e) =>
            setFormData({ ...formData, phone: e.target.value })
          }
          className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-plum transition-colors"
          placeholder="010-1234-5678"
        />
      </div>

      <div>
        <label
          htmlFor="treatment"
          className="block text-sm font-medium text-espresso mb-2"
        >
          관심 시술 <span className="text-plum">*</span>
        </label>
        <select
          id="treatment"
          required
          value={formData.treatment}
          onChange={(e) =>
            setFormData({ ...formData, treatment: e.target.value })
          }
          className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-plum transition-colors"
        >
          <option value="">시술을 선택해 주세요</option>
          {treatmentOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-espresso mb-2"
        >
          상담 내용
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-plum transition-colors resize-none"
          placeholder="피부 고민이나 궁금한 점을 자유롭게 작성해 주세요."
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="agree"
          required
          checked={formData.agree}
          onChange={(e) =>
            setFormData({ ...formData, agree: e.target.checked })
          }
          className="mt-1 w-4 h-4 accent-plum border-gray-300 rounded"
        />
        <label htmlFor="agree" className="text-sm text-gray-500">
          개인정보 수집 및 이용에 동의합니다.
          <span className="text-plum ml-1">*</span>
        </label>
      </div>

      <button
        type="submit"
        className="w-full py-3.5 bg-plum text-white font-medium rounded-xl hover:bg-plum-dark transition-colors"
      >
        상담 예약 신청하기
      </button>
    </form>
  );
}
