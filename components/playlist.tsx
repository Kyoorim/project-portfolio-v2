import React from "react";
import { Box, Center } from "ready-to-use-components";

const Playlist = () => {
  return (
    <Box
      gridArea="playlist"
      p="5px"
      borderRadius="3px"
      bg="#eeeeee"
      width={[1 / 3, 1 / 3, 1]}
      height={["90%", "90%", "10%"]}
    >
      {/*Wrapper*/}
      <Center
        height="40%"
        p={0}
        borderRadius={3}
        bg="darkgrey"
        m={0}
        fontSize={0.5}
      >
        Chopin - Opus 32 No. 2 in A flat Major
      </Center>
      <audio
        controls
        style={{ width: "100%", height: "60%", backgroundColor: "#eeeeee" }}
        src="/music/track1.mp3"
      >
        Your browser does not support the audio element.
      </audio>
    </Box>
  );
};

export default Playlist;
