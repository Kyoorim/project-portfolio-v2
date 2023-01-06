import React from "react";
import { Box, Center, HStack, Stack } from "ready-to-use-components";
import Nav from "./nav";

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <HStack>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        height="100%"
      >
        <Box p={20}>⭐️프론트엔드 개발자 이규림의 미니포트폴리오⭐️</Box>
        {children}
        {/* <Nav /> */}
      </Box>
    </HStack>
  );
};

export default Main;
