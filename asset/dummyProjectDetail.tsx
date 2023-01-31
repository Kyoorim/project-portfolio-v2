import { ProjectDetail } from "../types";

export const dummyProjectDetail: ProjectDetail[] = [
  {
    id: 1,
    title: "kartrade - 포토카드 거래 사이트 ",
    period: "(23.01.23-23.01.31)",
    link: "https://github.com/Kyoorim/project-kartrade",
    stack: [
      { idx: 1, stackContent: "typescript" },
      { idx: 2, stackContent: "next.js" },
      { idx: 3, stackContent: "styled-components" },
    ],
    content: "#반응형 화면 #검색 기능 #가격순 정렬 기능 ",
    image: [
      { idx: 1, imageContent: "/image/kartrade2.png" },
      { idx: 2, imageContent: "/image/kartrade1.png" },
      { idx: 3, imageContent: "/image/kartrade3.png" },
    ],
  },
  {
    id: 2,
    title: "싸이월드 미니포트폴리오 ver.2 ",
    period: "(22.12.29-23.01.31)",
    link: "https://github.com/Kyoorim/project-portfolio-v2",
    stack: [
      { idx: 1, stackContent: "typescript" },
      { idx: 2, stackContent: "next.js" },
      { idx: 3, stackContent: "styled-components" },
      { idx: 4, stackContent: "firebase" },
    ],
    content:
      "#기존 프로젝트 업데이트 #커스텀 UI컴포넌트 사용 #반응형 화면 #배경음악 기능",
    image: [
      { idx: 1, imageContent: "/image/cyv2_1.png" },
      { idx: 2, imageContent: "/image/cyv2_2.png" },
      { idx: 3, imageContent: "/image/cyv2_3.png" },
    ],
  },
  {
    id: 3,
    title: "ready-to-use-component ",
    period: "(22.12.11-23.01.01)",
    link: "https://github.com/Kyoorim/ready-to-use-components",
    stack: [
      { idx: 1, stackContent: "typescript" },
      { idx: 2, stackContent: "styled-system" },
      { idx: 3, stackContent: "styled-components" },
      { idx: 4, stackContent: "storybook" },
    ],
    content:
      "#범용적 사용이 가능한 리액트 컴포넌트 라이브러리 구현 #각 컴포넌트 테스트 코드 작성",
    image: [{ idx: 1, imageContent: "/image/readyUI.png" }],
  },
  {
    id: 4,
    title: "싸이월드 미니포트폴리오 ver.1 ",
    period: "(22.11.01-22.11.16)",
    link: "https://github.com/Kyoorim/project-portfolio",
    stack: [
      { idx: 1, stackContent: "javascript" },
      { idx: 2, stackContent: "react" },
      { idx: 3, stackContent: "firebase" },
    ],
    content:
      "#첫 솔로 프로젝트 #firebase 적용 # CRUD 전체 구현 및 사진업로드 기능 구현 ",
    image: [
      { idx: 1, imageContent: "/image/cyv1_1.png" },
      { idx: 2, imageContent: "/image/cyv1_2.png" },
      { idx: 3, imageContent: "/image/cyv1_3.png" },
    ],
  },
  {
    id: 5,
    title: "단비 - 단말기 비교사이트 ",
    period: "(22.09.13-22.10.11)",
    link: "https://velog.io/@tootb/Main-Project-KPT-%ED%9A%8C%EA%B3%A0",
    stack: [
      { idx: 1, stackContent: "typescript" },
      { idx: 2, stackContent: "styled-components" },
    ],
    content: "#typescript 적용 #JWT토큰 및 쿠키 이용한 로그인 및 회원가입 구현",
    image: [
      { idx: 1, imageContent: "/image/danbi1.png" },
      { idx: 2, imageContent: "/image/danbi3.png" },
      { idx: 3, imageContent: "/image/danbi3.png" },
    ],
  },
  {
    id: 6,
    title: "Stack Overflow 클론 ",
    period: "(22.08.24-22.09.07)",
    link: "https://velog.io/@tootb/Pre-Project-KPT%ED%9A%8C%EA%B3%A0",
    stack: [
      { idx: 1, stackContent: "react" },
      { idx: 2, stackContent: "styled-components" },
    ],
    content:
      "#백엔드와의 첫 공동프로젝트 #회원가입 및 로그인 구현 #게시판 CRUD 기능 중 Create 과 Read 기능 구현 ",
    image: [
      { idx: 1, imageContent: "/image/stack1.png" },
      { idx: 2, imageContent: "/image/stack2.png" },
      { idx: 3, imageContent: "/image/stack3.png" },
    ],
  },
];
