import { Box } from "ready-to-use-components";

const ProfileList = () => {
  return (
    <>
      <Box as="h4" mt={0} mb="0.7em">
        👩🏻 내 소개
      </Box>
      <Box as="nav">
        <Box as="ul" m={0}>
          <Box as="li" mb="0.6em" fontSize={["0.8rem", "0.8rem", "0.9rem"]}>
            | 자기 소개
          </Box>
          <Box as="li" fontSize={["0.8rem", "0.8rem", "0.9rem"]}>
            | 프로젝트
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProfileList;
