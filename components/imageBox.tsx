import { ProjectDetail } from "../types";
import { Box, Center } from "ready-to-use-components";

const ImageBox: React.FC<{ project: ProjectDetail }> = ({ project }) => {
  return (
    <Box display="flex">
      {project.image.map((img) => (
        <Center
          key={img.idx}
          width={["200px", "200px", "200px"]}
          height={["100px", "100px", "130px"]}
          style={{
            backgroundImage: `url(${img.imageContent})`,
            backgroundPosition: "center center",
            backgroundSize: "100% auto",
            backgroundRepeat: "no-repeat",
          }}
          mr="0.3em"
        />
      ))}
    </Box>
  );
};

export default ImageBox;
