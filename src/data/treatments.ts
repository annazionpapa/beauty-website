export interface Treatment {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  image: string;
  priceHint: string;
  duration: string;
  recovery: string;
}

export const treatments: Treatment[] = [
  {
    id: "lifting",
    title: "리프팅",
    subtitle: "Lifting",
    description: "처진 피부를 탄력 있게 끌어올리는 비수술 리프팅 시술로, 자연스러운 동안 효과를 경험하세요.",
    details: [
      "울쎄라 (Ultherapy)",
      "써마지 FLX (Thermage)",
      "실리프팅 (Thread Lifting)",
      "인모드 (InMode)",
      "슈링크 유니버스 (Shurink)",
    ],
    image: "/images/treatment-lifting.jpg",
    priceHint: "30만원~",
    duration: "30~60분",
    recovery: "당일 일상 가능",
  },
  {
    id: "laser",
    title: "레이저",
    subtitle: "Laser",
    description: "최신 레이저 장비로 피부 톤, 결, 모공을 개선하여 맑고 투명한 피부를 만들어 드립니다.",
    details: [
      "피코레이저 (PicoSure)",
      "프락셀 (Fraxel)",
      "제네시스 (Genesis)",
      "IPL 광선치료",
      "엑셀V (Excel V)",
    ],
    image: "/images/treatment-laser.jpg",
    priceHint: "15만원~",
    duration: "20~40분",
    recovery: "1~3일",
  },
  {
    id: "botox-filler",
    title: "보톡스 & 필러",
    subtitle: "Botox & Filler",
    description: "정밀한 주사 기술로 주름 개선과 볼륨 보충을 동시에. 자연스러운 아름다움을 완성합니다.",
    details: [
      "이마·미간 보톡스",
      "눈가·입가 보톡스",
      "사각턱 보톡스",
      "코·팔자 필러",
      "입술·턱 필러",
    ],
    image: "/images/treatment-botox.jpg",
    priceHint: "10만원~",
    duration: "15~30분",
    recovery: "즉시 일상 가능",
  },
  {
    id: "skincare",
    title: "피부관리",
    subtitle: "Skin Care",
    description: "의료진이 직접 관리하는 프리미엄 피부관리 프로그램으로 건강하고 빛나는 피부를 되찾으세요.",
    details: [
      "물광주사 (Skinbooster)",
      "스킨보톡스",
      "PRP 자가혈 치료",
      "줄기세포 시술",
      "LDM 초음파 관리",
    ],
    image: "/images/treatment-skincare.jpg",
    priceHint: "15만원~",
    duration: "40~60분",
    recovery: "당일 일상 가능",
  },
  {
    id: "acne",
    title: "여드름 & 흉터",
    subtitle: "Acne & Scar",
    description: "근본적인 원인 치료부터 흉터 개선까지, 맑고 깨끗한 피부를 위한 체계적인 솔루션을 제공합니다.",
    details: [
      "여드름 압출 & 관리",
      "PDT 광역학 치료",
      "프락셀 흉터 치료",
      "서브시전 (Subcision)",
      "MTS·MNRF 흉터 개선",
    ],
    image: "/images/treatment-acne.jpg",
    priceHint: "10만원~",
    duration: "30~50분",
    recovery: "2~5일",
  },
  {
    id: "pigmentation",
    title: "색소 & 미백",
    subtitle: "Pigmentation",
    description: "기미, 주근깨, 잡티 등 색소 질환을 정밀 진단하고 맞춤 치료로 균일한 피부톤을 만들어 드립니다.",
    details: [
      "기미 레이저",
      "주근깨·잡티 제거",
      "화이트닝 프로그램",
      "토닝 레이저",
      "글루타치온 미백 주사",
    ],
    image: "/images/treatment-pigment.jpg",
    priceHint: "10만원~",
    duration: "20~40분",
    recovery: "1~3일",
  },
];
