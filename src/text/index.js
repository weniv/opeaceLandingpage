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
      사계점의 공유 오피스는 44개의 핫 데스크로 운영됩니다.\n
      여유로운 분위기에서 업무가 가능하며 대관 가능한 세미나실도 있습니다.\n
      QR로 방음부스, 회의실을 예약해 자유롭게 화상회의도 가능합니다.
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
    description: `사계점은 호텔 형태의 공간에 공유 오피스와\n
    숙소 20객실이 함께 구성되어 있습니다.\n
    전 객실의 시설 수준은 동일하며 산방산 뷰 객실(6)과\n
    애견 동반 객실(1)이 마련되어 있습니다. 
      `,
  },
  {
    id: 3,
    icon: 'activitesIcon.svg',
    image: [
      { id: 1, img: 'activity-1' },
      { id: 2, img: 'activity-2' },
      { id: 3, img: 'activity-3' },
    ],
    description: `오피스 아워(불멍), 바당 요가, 사운드 워킹 등\n
    오피스 제주에서만 누릴 수 있는 액티비티가 준비되어 있습니다.`,
  },
];

export const companyIntroList = [
  {
    id: 1,
    logo: 'opeace',
    title: '🤞\n네가 일할 때 평화롭길 바라',
    link: 'https://o-peace.com/',
    description:
      "책상 한자리를 빌려주는 공유 오피스가 아니라\n'침해 당하지 않는 평화로움과 몰입의 시간'을\n선물하는 곳을 만들어보자. 그렇게 O-Peace를 시작했다.",
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
  { id: 1, title: '모집기간', description: '2023.09.18(월) - 10.10(화)' },
  {
    id: 2,
    title: '행사기간',
    description: '1차 2023.10.13(금) ~ 10.16(월), 2차 2023.10.27(금) ~ 10.30(월)',
  },
  { id: 3, title: '행사장소', description: '서귀포시 향교로 214 오피스제주 사계점 세미나실' },
  { id: 4, title: '비용', description: '무료' },
];

// current 0 - 前 (전)
// current 1 - 現 (현)
export const TutorList = [
  {
    id: 1,
    title: '모두를 위한 기본 프로그래밍',
    image: 'licat',
    name: '이호준',
    career: [
      { id: 1, current: 1, position: '주식회사 위니브 대표' },
      { id: 2, current: 1, position: '바울랩(학원, 연구원, 출판사 3사) 대표' },
      { id: 3, current: 1, position: '제주코딩베이스캠프 운영진' },
    ],
  },
  {
    id: 2,
    title: '피그마로 협업하기',
    image: 'soulgom',
    name: '소울곰',
    career: [
      { id: 1, current: 1, position: '주식회사 위니브 CDO' },
      { id: 2, current: 1, position: '멋쟁이사자처럼 FE스쿨 5기, 7기 피그마 특강 강사' },
      { id: 3, current: 1, position: '재미만랩 Blender(블렌더)3D 왕초보 입문 강사' },
    ],
  },
  {
    id: 3,
    title: `개발자가 디자이너에게[UXUI 살펴보기] / 노션 기본 활용방법`,
    name: '전유진',
    image: 'zeezee',
    career: [
      { id: 1, current: 1, position: '주식회사 위니브 프론트엔드 개발자' },
      { id: 2, current: 1, position: '재미만랩 우피x노션 노코드 웹사이트 만들기 강사' },
      { id: 3, current: 0, position: '오현고등학교 기초 웹 개발 강의 강사' },
    ],
  },
  {
    id: 3,
    title: '우피를 이용한 노코드 웹사이트 만들기',
    name: '김민승',
    image: 'rosy',
    career: [
      { id: 1, current: 1, position: '주식회사 위니브 프론트엔드 개발자 & 경영지원' },
      { id: 2, current: 1, position: '인프런 우피x노션 노코드 웹사이트 만들기 강사' },
      { id: 3, current: 1, position: '재미만랩 우피x노션 노코드 웹사이트 만들기 강사' },
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
      { id: 1, title: '노션 기본 활용방법' },
      { id: 2, title: '숙소 체크인(오피스 제주 이용사항 오리엔테이션)' },
    ],
  },
  {
    id: 2,
    program: [
      { id: 1, title: '화순곶자왈 사운드워킹' },
      { id: 2, title: 'FE개발자가 디자이너에게 - UX/UI 살펴보기' },
    ],
  },
  {
    id: 3,
    program: [
      { id: 1, title: '우피를 이용한 노코드 웹사이트 만들기' },
      { id: 2, title: '모두가 알아야할 기본 프로그래밍' },
    ],
  },
  {
    id: 4,
    program: [
      { id: 1, title: '피그마로 협업하기' },
      { id: 2, title: '교육 종료 및 체크아웃' },
    ],
  },
];
