import { Box, Center, Stack } from "ready-to-use-components";
import Card from "../components/card";
import Layout from "../components/layout";
import Main from "../components/main";
import ProfileBar from "../components/profileBar";
import ProfileContent from "../components/profileContent";

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
          <Center>
            <h2>미니룸</h2>
            <Box>이미지</Box>
          </Center>
          <Stack>
            <h2>Bonjour 코딩!</h2>
            <ul>
              <li>코딩이라는 새로운 언어와 기술을 통해::</li>
              <li>
                물리적 세계를 넘어서 더 넓고 잠재력 넘치는 세상을 탐험해보고자
                합니다
              </li>
              <li>🥑로그인하시고 방명록을 남겨주세요🥑</li>
              <li></li>
            </ul>
          </Stack>
        </Card>
      </Main>
    </Layout>
  );
}
