import { Box } from "ready-to-use-components";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      width="100%"
      height="96%"
      borderRadius={10}
      zIndex={10}
      overflowY="auto"
      p={[1, 1, 3]}
      border={["1px solid"]}
      borderColor="#737373"
      boxSizing="border-box"
    >
      {children}
    </Box>
  );
};

export default Card;
