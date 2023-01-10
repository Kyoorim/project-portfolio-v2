import { Box, Center } from "ready-to-use-components";

export type AnswerType = {
  answer: {
    title: string;
    intro: string;
    name1: string;
    content1: string;
    name2: string;
    content2: string;
    name3: string;
    content3: string;
  };
};

const AnswerBox = ({ answer }: AnswerType) => {
  return (
    <Center
      as="li"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      width="90%"
      lineHeight="135%"
    >
      <Box as="h1" color="orange" pt={20}>
        {answer.title}
      </Box>
      <Box as="p">{answer.intro}</Box>
      {!answer.intro && (
        <>
          <Box as="h2">{answer.name1}</Box>
          <Box as="span">{answer.content1}</Box>
          <Box as="h2">{answer.name2}</Box>
          <Box as="span">{answer.content2}</Box>
          <Box as="h2">{answer.name3}</Box>
          <Box as="span">{answer.content3}</Box>
        </>
      )}
    </Center>
  );
};

export default AnswerBox;
