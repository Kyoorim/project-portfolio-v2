import { Box } from "ready-to-use-components";
import Card from "../components/card";
import Layout from "../components/layout";
import Main from "../components/main";
import ProfileBar from "../components/profileBar";
import ProfileContent from "../components/profileContent";
import mainpic from "../asset/mainpic.png";
import Image from "next/image";

export default function Home({ isLoggedIn, userObj }) {
  return (
    <Layout>
      <ProfileBar>
        <Card>
          <ProfileContent isLoggedIn={isLoggedIn} userObj={userObj} />
        </Card>
      </ProfileBar>
      <Main isLoggedIn={isLoggedIn} userObj={userObj}>
        <Card>
          <Box as="section">
            <Box
              as="h2"
              p="5px"
              marginTop="0"
              marginBottom="10px"
              fontWeight="bold"
              color="thistle"
              fontSize={[2, 2, 3]}
            >
              미니룸
            </Box>
            <Box width="100%" border={["1px solid"]} borderColor="#737373">
              <Image
                src={mainpic}
                alt="miniroom"
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
          </Box>
          <Box as="section" marginTop="20px">
            <Box
              as="h2"
              marginBottom="15px"
              borderBottom={["2px solid"]}
              borderColor="#eee"
              fontWeight="bold"
              color="thistle"
              fontSize={[2, 2, 3]}
            >
              Bonjour 코딩!
            </Box>
            <Box as="ul" lineHeight="1.8" listStyleType="none" pl={0}>
              <Box
                as="li"
                height={30}
                borderBottom={["1px dashed"]}
                borderColor="#a5a5a5"
                fontSize={[1, 2, 2]}
              >
                코딩이라는 새로운 언어와 기술을 통해::
              </Box>
              <Box
                as="li"
                height={30}
                borderBottom={["1px dashed"]}
                borderColor="#a5a5a5"
                fontSize={[1, 2, 2]}
              >
                더 넓고 잠재력 넘치는 세상을 탐험합니다
              </Box>
              <Box
                as="li"
                height={30}
                borderBottom={["1px dashed"]}
                borderColor="#a5a5a5"
                fontSize={[1, 2, 2]}
              >
                🥑로그인하시고 방명록을 남겨주세요🥑
              </Box>
              <Box
                as="li"
                height={30}
                borderBottom={["1px dashed"]}
                borderColor="#a5a5a5"
              ></Box>
            </Box>
          </Box>
        </Card>
      </Main>
    </Layout>
  );
}
