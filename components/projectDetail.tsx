import { Box } from "ready-to-use-components";
import { dummyProjectDetail as myproject } from "../asset/dummyProjectDetail";
import ImageBox from "./imageBox";

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
          <Box as="h3" fontSize={[2, 2, 3]} m={0}>
            {project.title}
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

          {/* <Box as="section" width="100%">
            {project.image.map((img) => (
              <Image
                key={img.id}
                alt="image"
                width={110}
                height={90}
                // sizes="320 640 750"
                src={img.image}
                style={{ marginRight: "0.5em" }}
              />
            ))}
          </Box> */}
          <ImageBox project={project} />
        </Box>
      ))}
    </Box>
  );
};

export default ProjectDetail;
