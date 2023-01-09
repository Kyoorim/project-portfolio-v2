import React from "react";
import { Center, Box } from "ready-to-use-components";

const ProfileBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      height="100%"
      width="100%"
      boxSizing="border-box"
      gridArea="profileBar"
    >
      <Center
        fontSize="0.8rem"
        lineHeight={1.4}
        p={0}
        m={0}
        height="5%"
        list-style="none"
        margin={[10, 10, 0]}
      >
        <Box pr={10} mr={10}>
          TODAY <span className="today">1</span>
        </Box>
        <Box>TOTAL 2022</Box>
      </Center>
      {children}
    </Box>
  );
};

export default ProfileBar;
