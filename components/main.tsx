import { Box, Stack } from "ready-to-use-components";

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stack width="100%" gridArea="main" height="100%" overflow="auto">
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
          height="40px"
          margin={[10, 10, 0]}
        >
          FE개발자 이규림의 미니포트폴리오
        </Box>
        {children}
      </Box>
    </Stack>
  );
};

export default Main;
