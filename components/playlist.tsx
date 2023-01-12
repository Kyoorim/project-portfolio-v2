import React, { useState } from "react";
import { Box, Center } from "ready-to-use-components";

const Playlist = () => {
  const [openList, setIsOpenList] = useState(false);
  const listHandler = () => setIsOpenList(!openList);

  return (
    <Box
      gridArea="playlist"
      p="5px"
      borderRadius="3px"
      bg="#eee"
      width={[1 / 3, 1 / 3, 1]}
      height={["100%", "100%", "10%"]}
    >
      {/*Wrapper*/}
      <Center
        height="40%"
        p={0}
        borderRadius={3}
        bg="darkgrey"
        m={0}
        fontSize={[1, 1, 2]}
      >
        타이틀 곡
      </Center>
      <audio controls style={{ width: "100%", height: "60%" }}>
        Your browser does not support the audio element.
      </audio>

      {/* <button onClick={listHandler}>list</button>
      <Box as="ul" bg="#333" color="#eee" borderRadius={3} p={0}>
        <Box as="li">
          <Box as="p" fontSize={[1, 1, 2]}>
            재생곡1
          </Box>
          <Box as="p" fontSize={[1, 1, 2]}>
            재생곡2
          </Box>
        </Box>
      </Box> */}
    </Box>
  );
};

export default Playlist;
