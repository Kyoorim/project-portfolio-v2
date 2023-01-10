import React from "react";
import { Box, Center, SimpleGrid, Stack } from "ready-to-use-components";
import { template } from "../theme/templete";

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
        width={[1, 1, 2 / 3]}
        height="90vh"
        p={25}
        bg="#55c0dc"
        boxSizing="border-box"
        borderRadius={10}
      >
        <SimpleGrid
          height="100%"
          position="relative"
          gridTemplateColumns={[
            template.mobile.columns,
            template.tablet.columns,
            template.desktop.columns,
          ]}
          gridTemplateRows={[
            template.mobile.rows,
            template.tablet.rows,
            template.desktop.rows,
          ]}
          gridTemplateAreas={[
            template.mobile.area,
            template.tablet.area,
            template.desktop.area,
          ]}
          zIndex={1}
          boxSizing="border-box"
          bg="white"
          border={["2px solid"]}
          borderColor="#737373"
          borderRadius={10}
          gridRowGap={30}
          p={[1, 2, 3]}
          pb={[4, 4, 3]}
        >
          {children}
        </SimpleGrid>
      </Box>
    </Center>
  );
};

export default Layout;
