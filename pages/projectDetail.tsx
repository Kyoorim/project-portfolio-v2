import { Box } from "ready-to-use-components";
import { dummyProjectDetail as myproject } from "../asset/dummyProjectDetail";
import Image from "next/image";

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
          pb="2em"
        >
          <Box as="h3" fontSize={[2, 2, 3]}>
            {project.title}
          </Box>
          <Box>{project.stack}</Box>
          <Box as="span" fontSize={[1, 1, 2]}>
            {project.content}
          </Box>
          <Box as="section">
            {project.image.map((img) => (
              <Image
                key={img.id}
                alt="image"
                width={150}
                height={100}
                src={img.image}
                style={{ marginRight: "0.5em" }}
              />
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ProjectDetail;
