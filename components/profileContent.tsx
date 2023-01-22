import { Box, Center, SimpleGrid } from "ready-to-use-components";
import Image from "next/image";
import { profileTemplate } from "../theme/templete";
import myphoto from "../asset/myphoto.jpeg";
import { TfiGithub, TfiWrite } from "react-icons/tfi";
import { authService } from "../config";

const ProfileContent = ({ isLoggedIn, userObj }) => {
  const onLogoutClick = () => {
    authService.signOut();
    alert("로그아웃 되었습니다");
  };

  return (
    <SimpleGrid
      height="100%"
      justifyContent="space-between"
      boxSizing="border-box"
      gridTemplateColumns={[
        profileTemplate.mobile.columns,
        profileTemplate.tablet.columns,
        profileTemplate.desktop.columns,
      ]}
      gridTemplateRows={[
        profileTemplate.mobile.rows,
        profileTemplate.tablet.rows,
        profileTemplate.desktop.rows,
      ]}
      gridTemplateAreas={[
        profileTemplate.mobile.area,
        profileTemplate.tablet.area,
        profileTemplate.desktop.area,
      ]}
    >
      <Box as="section" gridArea="myphoto" width={[1, 3 / 4, 1]} height="auto">
        <Image
          src={myphoto}
          alt="myphoto"
          style={{ width: "100%", height: "auto", borderRadius: "10px" }}
        />
      </Box>
      <Box as="section" gridArea="mysns" fontSize={["0.7rem", "0.7rem", 2]}>
        <Box
          as="p"
          display="flex"
          alignItems="center"
          marginX="10px"
          marginTop="10px"
        >
          <TfiGithub style={{ marginRight: "5px" }} />
          <a
            href="https://github.com/Kyoorim"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </Box>
        <Box
          as="p"
          display="flex"
          alignItems="center"
          marginX="10px"
          marginTop="10px"
        >
          <TfiWrite style={{ marginRight: "5px" }} />
          <a
            href="https://velog.io/@tootb"
            target="_blank"
            rel="noopener noreferrer"
          >
            Velog
          </a>
        </Box>
      </Box>
      <Box
        as="section"
        pt={[0, 1, 2]}
        pb={0}
        borderY={["1px dashed"]}
        borderColor={["white", "white", "#a5a5a5"]}
        gridArea="myinfo"
      >
        <Box marginY="5px">
          <Box
            as="span"
            marginRight="5px"
            color="#737373"
            fontWeight="bold"
            fontSize={[1, 1, 2]}
          >
            이규림
          </Box>
        </Box>
        <Box
          as={"a"}
          href={"mailto:tootb.kyoo@gmail.com"}
          marginY="8px"
          display="flex"
          alignItems="center"
          fontSize={["0.7rem", 1, 2]}
        >
          tootb.kyoo@gmail.com
        </Box>
        <Box
          marginY="8px"
          display="flex"
          alignItems="center"
          fontSize={["0.7rem", 1, 2]}
        >
          010-5120-2659
        </Box>
        <Box
          marginY="8px"
          display="flex"
          alignItems="center"
          fontSize={["0.7rem", 1, 2]}
        >
          서울시 서대문구
        </Box>
      </Box>
      <Center as="section" gridArea="signin">
        {isLoggedIn && (
          <Box
            as="button"
            border="none"
            bg="white"
            onClick={onLogoutClick}
            fontSize={["0.7rem", 1, 2]}
          >
            로그아웃하기
          </Box>
        )}
      </Center>
    </SimpleGrid>
  );
};

export default ProfileContent;
