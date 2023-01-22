import { Box, Center } from "ready-to-use-components";

export type AnswerType = {
  answer: {
    id: number;
    title?: string;
    intro?: string;
    name1?: string;
    content1?: string;
    name2?: string;
    content2?: string;
    name3?: string;
    content3?: string;
  };
};

const AnswerBox = ({ answer }: AnswerType) => {
  return (
    <Box
      as="li"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      width="90%"
      lineHeight="135%"
    >
      <Box as="h1" color="orange" pt={20} fontSize={[2, 2, 4]}>
        {answer.title}
      </Box>
      <Box as="p" whiteSpace="pre-wrap" fontSize={[1, 1, 2]}>
        {answer.intro}
      </Box>
      {!answer.intro && (
        <>
          <Box as="h3" fontSize={[2, 2, 3]}>
            {answer.name1}
          </Box>
          <Box as="span" fontSize={[1, 1, 2]}>
            {answer.content1}
          </Box>
          <Box as="h3" fontSize={[2, 2, 3]}>
            {answer.name2}
          </Box>
          <Box as="span" fontSize={[1, 1, 2]}>
            {answer.content2}
          </Box>
          <Box as="h3" fontSize={[2, 2, 3]}>
            {answer.name3}
          </Box>
          <Box as="span" fontSize={[1, 1, 2]}>
            {answer.content3}
          </Box>
        </>
      )}
    </Box>
  );
};

export default AnswerBox;
