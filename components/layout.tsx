import { Box, SimpleGrid } from "ready-to-use-components";
import { template, mainTemplate } from "../theme/templete";
import Nav from "./nav";
import Playlist from "./playlist";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SimpleGrid
      width="100%"
      height="100vh"
      p={20}
      bg="#808080"
      boxSizing="border-box"
      gridColumnGap={[0, 0, 3]}
      gridRowGap={[3, 3, 0]}
      gridTemplateColumns={[
        mainTemplate.mobile.columns,
        mainTemplate.tablet.columns,
        mainTemplate.desktop.columns,
      ]}
      gridTemplateRows={[
        mainTemplate.mobile.rows,
        mainTemplate.tablet.rows,
        mainTemplate.desktop.rows,
      ]}
      gridTemplateAreas={[
        mainTemplate.mobile.area,
        mainTemplate.tablet.area,
        mainTemplate.desktop.area,
      ]}
    >
      <Box
        width="100%"
        height="auto"
        p={25}
        bg="#55c0dc"
        boxSizing="border-box"
        borderRadius={10}
        position="relative"
        alignItems="center"
        gridArea="mainContainer"
      >
        <Nav />
        <SimpleGrid
          height="100%"
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
          // overflowY="scroll"
        >
          {children}
        </SimpleGrid>
      </Box>
      <Playlist />
    </SimpleGrid>
  );
};

export default Layout;
