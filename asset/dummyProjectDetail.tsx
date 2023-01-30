import { ProjectDetail } from "../types";

export const dummyProjectDetail: ProjectDetail[] = [
  {
    id: 1,
    title: "kartrade - 포토카드 거래 사이트",
    stack: [
      { id: 1, stack: "typescript" },
      { id: 2, stack: "next.js" },
      { id: 3, stack: "styled-components" },
    ],
    content: "#반응형 화면 #검색 기능 #가격순 정렬 기능 ",
    image: [
      { id: 1, image: "/image/kartrade1.png" },
      { id: 2, image: "/image/kartrade2.png" },
      { id: 3, image: "/image/kartrade3.png" },
    ],
  },
  {
    id: 2,
    title: "싸이월드 미니포트폴리오 ver.2",
    stack: [
      { id: 1, stack: "typescript" },
      { id: 2, stack: "next.js" },
      { id: 3, stack: "styled-components" },
      { id: 4, stack: "firebase" },
    ],
    content:
      "#기존 프로젝트 업데이트 #커스텀 UI컴포넌트 사용 #반응형 화면 #배경음악 기능",
    image: [
      { id: 1, image: "/image/cyv2_1.png" },
      { id: 2, image: "/image/cyv2_2.png" },
      { id: 3, image: "/image/cyv2_3.png" },
    ],
  },
  {
    id: 3,
    title: "ready-to-use-component",
    stack: [
      { id: 1, stack: "typescript" },
      { id: 2, stack: "styled-system" },
      { id: 3, stack: "styled-components" },
      { id: 4, stack: "storybook" },
    ],
    content:
      "#범용적 사용이 가능한 리액트 컴포넌트 라이브러리 구현 #각 컴포넌트 테스트 코드 작성",
    image: [{ id: 1, image: "/image/readyUI.png" }],
  },
  {
    id: 3,
    title: "싸이월드 미니포트폴리오 ver.1",
    stack: [
      { id: 1, stack: "javascript" },
      { id: 2, stack: "react" },
      { id: 3, stack: "firebase" },
    ],
    content:
      "#첫 솔로 프로젝트 #firebase 적용 # CRUD 전체 구현 및 사진업로드 기능 구현 ",
    image: [
      { id: 1, image: "/image/cyv1_1.png" },
      { id: 2, image: "/image/cyv1_2.png" },
      { id: 3, image: "/image/cyv1_3.png" },
    ],
  },
  {
    id: 2,
    title: "단비(단말기 비교사이트)",
    stack: [
      { id: 1, stack: "typescript" },
      { id: 2, stack: "styled-components" },
    ],
    content: "#typescript 적용 #JWT토큰 및 쿠키 이용한 로그인 및 회원가입 구현",
    image: [
      { id: 1, image: "/image/danbi1.png" },
      { id: 2, image: "/image/danbi3.png" },
      { id: 3, image: "/image/danbi3.png" },
    ],
  },
  {
    id: 1,
    title: "Stack Overflow 클론",
    stack: [
      { id: 1, stack: "react" },
      { id: 2, stack: "styled-components" },
    ],
    content:
      "#백엔드와의 첫 공동프로젝트 #회원가입 및 로그인 구현 #게시판 CRUD 기능 중 Create 과 Read 기능 구현 ",
    image: [
      { id: 1, image: "/image/stack1.png" },
      { id: 2, image: "/image/stack2.png" },
      { id: 3, image: "/image/stack3.png" },
    ],
  },
];