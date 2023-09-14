export const facilityList = [
  {
    id: 1,
    icon: 'workspaceIcon.svg',
    image: [
      { id: 1, img: 'workspace-1' },
      { id: 2, img: 'workspace-2' },
      { id: 3, img: 'workspace-3' },
      { id: 4, img: 'workspace-4' },
    ],
    description: `
      사계점의 공유오피스는 44개의 핫데스크로 운영됩니다.\n
      여유로운 분위기에서 업무가 가능하며 대관 가능한 세미나실도 있습니다.\n
      QR로 방음부스, 회의실을 에약해 자유롭게 화상회의도 가능합니다.
      `,
  },
  {
    id: 2,
    icon: 'staysIcon.svg',
    image: [
      { id: 1, img: 'stay-1' },
      { id: 2, img: 'stay-2' },
      { id: 3, img: 'stay-3' },
      { id: 4, img: 'stay-4' },
    ],
    description: `사계점은 호텔형태의 공간에 공유오피스와\n
    숙소 20객실이 함께 구성되어 있습니다.\n
    전객실의 시설 수준은 동일하며 산방산뷰 객실(6)과\n
    애견동반 객실(1)이 마련되어 있습니다. 
      `,
  },
  {
    id: 3,
    icon: 'activitesIcon.svg',
    image: [{ id: 1, img: 'activites' }],
    description: `오피스아워(불멍), 바당요가, 사운드워킹 등\n
    오피스제주에서만 누릴 수 있는 액티비티가 준비되어 있습니다.          `,
  },
];

export const qnaList = [
  {
    id: 1,
    question: 'Q. 워케이션 예약 가능한 최대 인원 수가 있나요?',
    answer: '워케이션 예약 가능한 최대 인원 수가 있나요?',
  },
  {
    id: 2,
    question: 'Q. 워케이션 신청 후 일정 변경이나 취소가 가능한가요?',
    answer: '교육 내용은 변경 불가하나, 스케쥴 변동은 가능합니다.',
  },
  {
    id: 3,
    question: 'Q. 꼭 회사 동료들과 함께 신청해야 하나요? 프리랜서나 친구와 함께 참여하고 싶은데 가능한가요?',
    answer: '교육 내용은 변경 불가하나, 스케쥴 변동은 가능합니다.',
  },
  {
    id: 4,
    question: 'Q. 워케이션 숙소 위치를 알고 싶어요!',
    answer: '교육 내용은 변경 불가하나, 스케쥴 변동은 가능합니다.',
  },
];

export const companyIntroList = [
  {
    id: 1,
    logo: 'opeace',
    title: '🤞\n네가 일할 때 평화롭길 바라',
    link: 'https://o-peace.com/',
    description:
      "책상 한자리를 빌려주는 공유오피스가 아니라\n'침해 당하지 않는 평화로움과 몰입의 시간'을\n선물하는 곳을 만들어보자. 그렇게 O-Peace를 시작했다.",
  },
  {
    id: 2,
    logo: 'weniv',
    title: '안녕하세요.\n주식회사 위니브입니다.',
    link: 'https://paullab.co.kr/about.html',
    description:
      "주식회사 위니브는 'ICT 교육 콘텐츠 기업'입니다.\n지역과 가진 것에 차등 없이 누구나 ICT 교육을\n받을 수 있도록 진로, 직업, 진학, 취업의 길을 열어갑니다.",
  },
];

export const partnershipList = [
  { id: 1, logo: 'opeace' },
  { id: 2, logo: 'weniv' },
  { id: 3, logo: 'jtp' },
];

export const planList = [
  { id: 1, title: '모집기간', description: '2023.10.16(월) - 10.20(금) (변경가능)' },
  { id: 2, title: '행사기간', description: '2023.10.9 ~ 10.12 (3박 4일간) (변경가능)' },
  { id: 3, title: '행사장소', description: '서귀포시 향교로 214 오피스제주 사계점 세미나실' },
  { id: 4, title: '비용', description: '무료' },
];

// current 0 - 前 (전)
// current 1 - 現 (현)
export const TutorList = [
  {
    id: 1,
    title: '피그마로 협업하기',
    name: '소울곰',
    career: [
      { id: 1, current: 1, position: '주식회사 위니브 CDO' },
      { id: 2, current: 1, position: '멋쟁이사자처럼 프론트엔드 스쿨 5기 강사' },
      { id: 3, current: 0, position: '이스트소프트 백엔드 스쿨 오르미 1기 HTML/CSS 강사' },
    ],
  },
  {
    id: 2,
    title: '개발자를 위한 UI/UX 살펴보기',
    name: '소울곰',
    career: [
      { id: 1, current: 1, position: '주식회사 위니브 CDO' },
      { id: 2, current: 1, position: '멋쟁이사자처럼 프론트엔드 스쿨 5기 강사' },
      { id: 3, current: 0, position: '이스트소프트 백엔드 스쿨 오르미 1기 HTML/CSS 강사' },
    ],
  },
  {
    id: 3,
    title: 'Hello, Mr.my yesterday',
    name: '소울곰',
    career: [
      { id: 1, current: 1, position: '주식회사 위니브 CDO' },
      { id: 2, current: 1, position: '멋쟁이사자처럼 프론트엔드 스쿨 5기 강사' },
      { id: 3, current: 0, position: '이스트소프트 백엔드 스쿨 오르미 1기 HTML/CSS 강사' },
    ],
  },
];

export const placeImgList = [
  { id: 1, img: 'place-1', name: 'place' },
  { id: 2, img: 'place-2', name: 'place' },
  { id: 3, img: 'place-3', name: 'place' },
  { id: 4, img: 'place-4', name: 'place' },
];

export const googleFormLink =
  'https://docs.google.com/forms/d/e/1FAIpQLSdXsz3PW4bfbdlvUiELRplAAbXh-RaNb0mJJsE3CowMKZD-mg/viewform';

export const ScheduleList = [
  {
    id: 1,
    program: [
      { id: 1, title: '디자이너와 기획자를 위한 코딩(프로그래밍)' },
      { id: 2, title: '디자이너와 기획자를 위한 코딩(프로그래밍)' },
    ],
  },
  {
    id: 2,
    program: [
      { id: 1, title: '디자이너와 기획자를 위한 코딩(프로그래밍)' },
      { id: 2, title: '디자이너와 기획자를 위한 코딩(프로그래밍)' },
    ],
  },
  {
    id: 3,
    program: [
      { id: 1, title: '디자이너와 기획자를 위한 코딩(프로그래밍)' },
      { id: 2, title: '디자이너와 기획자를 위한 코딩(프로그래밍)' },
    ],
  },
  {
    id: 4,
    program: [
      { id: 1, title: '디자이너와 기획자를 위한 코딩(프로그래밍)' },
      { id: 2, title: '디자이너와 기획자를 위한 코딩(프로그래밍)' },
    ],
  },
];
