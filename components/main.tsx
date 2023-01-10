import React from "react";
import { Box, Stack } from "ready-to-use-components";
import Nav from "./nav";

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stack width="100%" gridArea="main" height="100%">
      <Box
        as="span"
        display="flex"
        flexDirection="column"
        alignItems="center"
        height="100%"
      >
        <Box
          color="orange"
          fontWeight="bold"
          fontSize={[2, 2, 3]}
          height="5%"
          margin={[10, 10, 0]}
        >
          FE개발자 이규림의 미니포트폴리오
        </Box>
        {children}
        {/* <Nav /> */}
      </Box>
    </Stack>
  );
};

export default Main;
