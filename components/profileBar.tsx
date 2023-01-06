import React from "react";
import { Center, Box, Stack } from "ready-to-use-components";

const ProfileBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      height="100%"
      width="30%"
      box-sizing="border-box"
    >
      <Stack direction="row" gap={20} p={20}>
        <Box>TODAY 1</Box>
        <Box>TOTAL 2023</Box>
      </Stack>
      {children}
    </Box>
  );
};

export default ProfileBar;
