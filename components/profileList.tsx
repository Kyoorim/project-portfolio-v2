import { Box } from "ready-to-use-components";
import { useRouter } from "next/router";

const ProfileList = () => {
  const router = useRouter();

  return (
    <>
      <Box as="h4" mt={0} mb="0.7em">
        π©π» λ΄ μκ°
      </Box>
      <Box as="nav">
        <Box as="ul" m={0} style={{ cursor: "pointer" }}>
          <Box
            as="li"
            mb="0.6em"
            fontSize={["0.8rem", "0.8rem", "0.9rem"]}
            onClick={() => router.push("/aboutMe")}
          >
            | μκΈ°μκ°
          </Box>
          <Box
            as="li"
            fontSize={["0.8rem", "0.8rem", "0.9rem"]}
            onClick={() => router.push("/project")}
          >
            | νλ‘μ νΈ
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProfileList;
