export interface Review {
  id: number;
  name: string;
  age: string;
  treatment: string;
  rating: number;
  content: string;
  date: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: "김○○",
    age: "30대 여성",
    treatment: "울쎄라 리프팅",
    rating: 5,
    content: "처진 볼살이 고민이었는데, 시술 후 확실히 라인이 올라갔어요. 김서연 원장님이 꼼꼼하게 상담해주시고, 통증 관리도 잘 해주셔서 편안하게 받았습니다. 주변에서 얼굴이 달라졌다고 물어볼 정도예요!",
    date: "2026.01",
  },
  {
    id: 2,
    name: "박○○",
    age: "20대 여성",
    treatment: "여드름 흉터 치료",
    rating: 5,
    content: "오랫동안 여드름 흉터로 스트레스 받았는데, 박민지 원장님의 체계적인 치료 프로그램으로 확실히 개선됐어요. 3개월 치료 후 거울 보는 게 즐거워졌습니다. 정말 감사합니다.",
    date: "2025.12",
  },
  {
    id: 3,
    name: "이○○",
    age: "40대 여성",
    treatment: "보톡스 & 필러",
    rating: 5,
    content: "이준호 원장님 필러 진짜 자연스럽게 잘 해주세요. 팔자주름이 깊었는데 티 안나게 채워주셔서 너무 만족합니다. 과하지 않은 게 제일 마음에 들어요.",
    date: "2026.02",
  },
  {
    id: 4,
    name: "정○○",
    age: "30대 남성",
    treatment: "피코레이저",
    rating: 4.5,
    content: "남자라 피부과 가기 좀 부담스러웠는데, 분위기도 좋고 상담도 편안하게 해주셔서 좋았습니다. 잡티가 확실히 옅어졌고, 피부 톤도 밝아졌어요. 남성분들도 부담 없이 다니실 수 있어요.",
    date: "2025.11",
  },
  {
    id: 5,
    name: "최○○",
    age: "50대 여성",
    treatment: "써마지 FLX + 물광주사",
    rating: 5,
    content: "써마지와 물광주사를 함께 받았는데, 피부가 10살은 젊어진 느낌이에요. 건조하고 칙칙했던 피부가 촉촉하고 탱탱해졌습니다. 정기적으로 관리받으려고요.",
    date: "2026.01",
  },
  {
    id: 6,
    name: "한○○",
    age: "20대 여성",
    treatment: "기미 레이저",
    rating: 5,
    content: "양 볼에 기미가 심했는데, 토닝 레이저 10회 받고 거의 안 보일 정도로 옅어졌어요. 원장님이 매 회 피부 상태 확인하시면서 세기 조절해주셔서 안심이 됐습니다.",
    date: "2025.12",
  },
];

export const overallStats = {
  averageRating: 4.9,
  totalReviews: 2847,
  satisfactionRate: 98.2,
  returnRate: 89,
};
