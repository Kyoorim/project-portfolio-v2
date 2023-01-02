import React from "react";
import { Box, Center } from "ready-to-use-components";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Center>
      <Box>
        <Box>{children}</Box>
      </Box>
    </Center>
  );
};

export default Layout;
