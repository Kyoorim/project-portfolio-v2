import React from "react";
import {
  Box,
  Center,
  HStack,
  SimpleGrid,
  Stack,
} from "ready-to-use-components";
import styled from "styled-components";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Center
      width="100%"
      height="100vh"
      p={20}
      bg="#808080"
      boxSizing="border-box"
    >
      <Box width="70%" height="90vh" p={25} bg="#55c0dc" boxSizing="border-box">
        <Stack
          px={0}
          height="100%"
          position="relative"
          direction="row"
          zIndex={1}
          boxSizing="border-box"
          bg="white"
          width="100%"
          // column={2}
          // gridTemplateColumns={["1fr 60px;"]}
        >
          {children}
        </Stack>
      </Box>
    </Center>
  );
};

export default Layout;
