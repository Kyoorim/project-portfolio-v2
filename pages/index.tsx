import { Box, Center, Stack } from "ready-to-use-components";
import Card from "../components/card";
import Layout from "../components/layout";
import Main from "../components/main";
import ProfileBar from "../components/profileBar";
import ProfileContent from "../components/profileContent";
import styled from "styled-components";
import mainpic from "../asset/mainpic.png";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <ProfileBar>
        <Card>
          <ProfileContent />
        </Card>
      </ProfileBar>
      <Main>
        <Card>
          <ContentSection>
            <h2>미니룸</h2>
            <Box width="100%" border={["1px solid"]} borderColor="#737373">
              <Image src={mainpic} alt="miniroom" width={100} />
            </Box>
          </ContentSection>
          <ContentSection>
            <h2>Bonjour 코딩!</h2>
            <ul>
              <li>코딩이라는 새로운 언어와 기술을 통해::</li>
              <li>
                물리적 세계를 넘어서 더 넓고 잠재력 넘치는 세상을 탐험합니다
              </li>
              <li>🥑로그인하시고 방명록을 남겨주세요🥑</li>
              <li></li>
            </ul>
          </ContentSection>
        </Card>
      </Main>
    </Layout>
  );
}

const ContentSection = styled.section`
  height: fit-content !important;
  h2 {
    padding: 5px;
    margin-bottom: 10px;
    font-weight: bold;
    color: thistle;
  }
  &:first-of-type {
    h2 {
      margin-bottom: 5px;
    }
    img {
      width: 100%;
      height: auto;
    }
  }
  &:last-of-type {
    margin-top: 20px;
    h2 {
      margin-bottom: 15px;
      border-bottom: 2px solid #eee;
    }
  }
  ul {
    line-height: 1.8;
    list-style: none;
    padding-left: 0;
    li {
      height: 30px;
      border-bottom: 1px dashed #a5a5a5;
    }
  }
`;
