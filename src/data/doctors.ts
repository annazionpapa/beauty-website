export interface Doctor {
  id: string;
  name: string;
  nameEn: string;
  title: string;
  specialty: string;
  image: string;
  education: string[];
  career: string[];
  certifications: string[];
  greeting: string;
}

export const doctors: Doctor[] = [
  {
    id: "kim",
    name: "김서연",
    nameEn: "Dr. Kim Seo-yeon",
    title: "대표원장",
    specialty: "리프팅 · 레이저 전문",
    image: "/images/doctor-kim.jpg",
    education: [
      "서울대학교 의과대학 졸업",
      "서울대학교 의과대학 석사",
    ],
    career: [
      "前 서울대병원 피부과 전공의",
      "前 서울대병원 피부과 임상강사",
      "피부과 전문의 취득",
    ],
    certifications: [
      "대한피부과학회 정회원",
      "대한레이저의학회 정회원",
      "SCI 논문 12편 게재",
      "울쎄라 공인 시술의",
    ],
    greeting: "환자 한 분 한 분의 피부 고민에 귀 기울이고, 최선의 결과를 위해 정성을 다하겠습니다.",
  },
  {
    id: "lee",
    name: "이준호",
    nameEn: "Dr. Lee Jun-ho",
    title: "원장",
    specialty: "보톡스 · 필러 전문",
    image: "/images/doctor-lee.jpg",
    education: [
      "연세대학교 의과대학 졸업",
      "연세대학교 의과대학 박사",
    ],
    career: [
      "前 세브란스병원 피부과 전공의",
      "前 세브란스병원 피부과 임상교수",
      "피부과 전문의 취득",
    ],
    certifications: [
      "대한미용피부외과학회 이사",
      "대한피부과학회 정회원",
      "보톡스·필러 시술 20,000건+",
      "국제미용의학회 인증의",
    ],
    greeting: "자연스러운 아름다움을 추구합니다. 과하지 않으면서도 확실한 변화를 약속드립니다.",
  },
  {
    id: "park",
    name: "박민지",
    nameEn: "Dr. Park Min-ji",
    title: "원장",
    specialty: "여드름 · 흉터 전문",
    image: "/images/doctor-park.jpg",
    education: [
      "고려대학교 의과대학 졸업",
      "고려대학교 의과대학 석사",
    ],
    career: [
      "前 삼성서울병원 피부과 전공의",
      "前 삼성서울병원 피부과 임상강사",
      "피부과 전문의 취득",
    ],
    certifications: [
      "대한피부과학회 정회원",
      "대한여드름학회 정회원",
      "SCI 논문 8편 게재",
      "프락셀 공인 시술의",
    ],
    greeting: "여드름과 흉터로 고민하시는 분들의 자신감을 되찾아 드리는 것이 저의 사명입니다.",
  },
];
