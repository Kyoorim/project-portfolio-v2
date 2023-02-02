import { Box } from "ready-to-use-components";
import { dummyProjectDetail as myproject } from "../asset/dummyProjectDetail";
import ImageBox from "./imageBox";
import { AiOutlineLink, AiOutlineGithub } from "react-icons/ai";
import { SiStorybook } from "react-icons/si";

const ProjectDetail = () => {
  return (
    <Box
      as="ul"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p={0}
    >
      {myproject.map((project) => (
        <Box
          as="li"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
          width="90%"
          lineHeight="135%"
          key={project.id}
          borderBottom="1px solid"
          borderColor="grey"
          pb="1em"
          mb="1em"
        >
          <Box
            as="h3"
            fontSize={[2, 2, 3]}
            m={0}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {project.title} |
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "0.5em",
                  cursor: "pointer",
                }}
              >
                <AiOutlineGithub />
              </a>
            )}
            {project.storybook && (
              <a
                href={project.storybook}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "0.3em",
                  cursor: "pointer",
                }}
              >
                <SiStorybook />
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "0.3em",
                  cursor: "pointer",
                }}
              >
                <AiOutlineLink />
              </a>
            )}
          </Box>
          <Box fontSize={[1, 1, 2]} m={0}>
            {project.period}
          </Box>
          <Box
            mt="0.5em"
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="center"
          >
            {project.stack.map((stack) => (
              <Box
                key={stack.idx}
                fontSize={["0.4rem", "0.4rem", "0.8rem"]}
                bg="#54C0DC"
                color="white"
                borderRadius="10px"
                px="0.5em"
                mr="0.2em"
                mb="0.2em"
              >
                {stack.stackContent}
              </Box>
            ))}
          </Box>
          <Box fontSize={[1, 1, 2]} py="1em">
            {project.content}
          </Box>
          <ImageBox project={project} />
        </Box>
      ))}
    </Box>
  );
};

export default ProjectDetail;
