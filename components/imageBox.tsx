import { ProjectDetail } from "../types";
import { Box, Center } from "ready-to-use-components";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const ImageBox: React.FC<{ project: ProjectDetail }> = ({ project }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      {project.image.map((img) => (
        <Zoom key={img.idx}>
          <Center
            width={["75px", "100px", "170px"]}
            height={["80px", "80px", "130px"]}
            style={{
              backgroundImage: `url(${img.imageContent})`,
              backgroundPosition: "center center",
              backgroundSize: "100% auto",
              backgroundRepeat: "no-repeat",
            }}
            mr="0.3em"
            role="img"
          />
        </Zoom>
      ))}
    </Box>
  );
};

export default ImageBox;
