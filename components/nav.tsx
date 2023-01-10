import React from "react";
import { Box, Center } from "ready-to-use-components";

const Nav = () => {
  return (
    <Center
      as="nav"
      zIndex={1}
      position="absolute"
      top="70px"
      right="70px"
      bg="white"
    >
      <Box as="ul">
        <Box as="li">홈</Box>
        <Box as="li">프로필</Box>
        <Box as="li">방명록</Box>
      </Box>
    </Center>
  );
};

export default Nav;
