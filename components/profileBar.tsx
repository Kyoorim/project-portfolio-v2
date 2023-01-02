import React from "react";
import { Box, HStack } from "ready-to-use-components";

const ProfileBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box>
      <HStack>
        <Box>TODAY 1</Box>
        <Box>TOTAL 2023</Box>
      </HStack>
      {children}
    </Box>
  );
};

export default ProfileBar;
