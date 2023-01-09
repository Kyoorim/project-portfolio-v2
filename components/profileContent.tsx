import { Box, Stack } from "ready-to-use-components";
import Image from "next/image";
import myphoto from "../asset/myphoto.jpeg";
import { MdMailOutline, MdLocationOn, MdPhoneIphone } from "react-icons/md";
import { TfiGithub, TfiWrite } from "react-icons/tfi";

const ProfileContent = () => {
  return (
    <Stack height="100%" justifyContent="space-between">
      <Box as="section">
        <Image
          src={myphoto}
          alt="myphoto"
          style={{ width: "100%", height: "auto" }}
        />
        <Box
          as="p"
          display="flex"
          alignItems="center"
          marginX="10px"
          marginTop="20px"
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
          marginTop="20px"
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
        pt="10px"
        pb={0}
        borderY={["1px dashed"]}
        borderColor="#a5a5a5"
      >
        <Box marginY="10px">
          <Box as="span" marginRight="5px" color="#737373" fontWeight="bold">
            이규림
          </Box>
        </Box>
        <Box marginY="10px" display="flex" alignItems="center">
          <MdMailOutline style={{ marginRight: "5px" }} />
          tootb.kyoo@gmail.com
        </Box>
        <Box marginY="10px" display="flex" alignItems="center">
          <MdPhoneIphone style={{ marginRight: "5px" }} />
          010-5120-2659
        </Box>
        <Box marginY="10px" display="flex" alignItems="center">
          <MdLocationOn style={{ marginRight: "5px" }} />
          서울시 서대문구
        </Box>
      </Box>
    </Stack>
  );
};

export default ProfileContent;
