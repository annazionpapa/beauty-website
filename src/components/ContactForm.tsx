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
    setFormData({ name: "", phone: "", treatment: "", message: "", agree: false });
  };

  return (
    <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm">
      <h2 className="text-2xl font-bold text-navy mb-2">온라인 상담 신청</h2>
      <p className="text-gray-500 mb-8">
        아래 양식을 작성해 주시면 빠른 시간 내에 연락드리겠습니다.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
            이름 <span className="text-rose">*</span>
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose/30 focus:border-rose transition-colors"
            placeholder="홍길동"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-navy mb-2">
            연락처 <span className="text-rose">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose/30 focus:border-rose transition-colors"
            placeholder="010-1234-5678"
          />
        </div>

        <div>
          <label htmlFor="treatment" className="block text-sm font-medium text-navy mb-2">
            관심 시술 <span className="text-rose">*</span>
          </label>
          <select
            id="treatment"
            required
            value={formData.treatment}
            onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose/30 focus:border-rose transition-colors bg-white"
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
          <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
            상담 내용
          </label>
          <textarea
            id="message"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose/30 focus:border-rose transition-colors resize-none"
            placeholder="피부 고민이나 궁금한 점을 자유롭게 작성해 주세요."
          />
        </div>

        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="agree"
            required
            checked={formData.agree}
            onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
            className="mt-1 w-4 h-4 text-rose border-gray-300 rounded focus:ring-rose"
          />
          <label htmlFor="agree" className="text-sm text-gray-500">
            개인정보 수집 및 이용에 동의합니다.
            <span className="text-rose ml-1">*</span>
          </label>
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-rose text-white font-medium rounded-full hover:bg-rose-dark transition-colors text-lg"
        >
          상담 예약 신청하기
        </button>
      </form>
    </div>
  );
}
