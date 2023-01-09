import React from "react";
import { Box, Stack } from "ready-to-use-components";
import Nav from "./nav";

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stack width="65%">
      <Box
        as="span"
        display="flex"
        flexDirection="column"
        alignItems="center"
        height="100%"
      >
        <Box color="orange" fontWeight="bold" fontSize="1.1rem" height="5%">
          ⭐️프론트엔드 개발자 이규림의 미니포트폴리오⭐️
        </Box>
        {children}
        {/* <Nav /> */}
      </Box>
    </Stack>
  );
};

export default Main;
