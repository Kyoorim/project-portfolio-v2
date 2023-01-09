import React from "react";
import { Box, Center, Stack } from "ready-to-use-components";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Center
      width="100%"
      height="100vh"
      p={20}
      bg="#808080"
      boxSizing="border-box"
    >
      <Box
        width={[1, 1, 4 / 5]}
        height="90vh"
        p={25}
        bg="#55c0dc"
        boxSizing="border-box"
        borderRadius={10}
      >
        <Stack
          height="100%"
          position="relative"
          direction={["column", "column", "row"]}
          justifyContent="space-evenly"
          zIndex={1}
          boxSizing="border-box"
          bg="white"
          border={["2px solid"]}
          borderColor="#737373"
          borderRadius={10}
          gridRowGap={30}
          p={10}
        >
          {children}
        </Stack>
      </Box>
    </Center>
  );
};

export default Layout;
