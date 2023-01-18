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
      <Box as="h1" color="orange" pt={20}>
        {answer.title}
      </Box>
      <Box as="p" whiteSpace="pre-wrap">
        {answer.intro}
      </Box>
      {!answer.intro && (
        <>
          <h3>{answer.name1}</h3>
          <span>{answer.content1}</span>
          <h3>{answer.name2}</h3>
          <span>{answer.content2}</span>
          <h3>{answer.name3}</h3>
          <span>{answer.content3}</span>
        </>
      )}
    </Box>
  );
};

export default AnswerBox;
