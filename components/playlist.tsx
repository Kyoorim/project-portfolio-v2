import React, { useState } from "react";
import { Box, Center } from "ready-to-use-components";
import { FcPrevious, FcNext } from "react-icons/fc";
import styled from "styled-components";

const songs = [
  {
    title: " Chopin - Opus 32 No. 2 in A flat Major -- ",
    path: "/music/track1.mp3",
  },
  {
    title: " Chopin - Opus 37 No. 1 in G Minor -- ",
    path: "/music/track2.mp3",
  },
  {
    title: " Chopin - Opus 15 No. 2 in F sharp Major -- ",
    path: "/music/track3.mp3",
  },
];

const Playlist = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const next = () => {
    setCurrentSongIndex((currentSongIndex + 1) % songs.length);
  };

  const prev = () => {
    if (currentSongIndex === 0) setCurrentSongIndex(songs.length - 1);
    else setCurrentSongIndex(currentSongIndex - 1);
  };

  return (
    <Box
      gridArea="playlist"
      p="5px"
      borderRadius="3px"
      bg="#eeeeee"
      width={[1, 1, 1]}
      height={["100%", "100%", "10%"]}
    >
      {/*Wrapper*/}
      <Center
        height="40%"
        p={0}
        borderRadius={3}
        bg="darkgrey"
        m={0}
        fontSize="1vw"
        justifyContent="space-between"
      >
        <FcPrevious style={{ fontSize: "2vw", width: "4vw" }} onClick={prev} />
        <TitleWrap>
          <Title>{songs[currentSongIndex].title}</Title>
          <Title>{songs[currentSongIndex].title}</Title>
        </TitleWrap>
        <FcNext style={{ fontSize: "2vw", width: "4vw" }} onClick={next} />
      </Center>
      <audio
        controls
        style={{ width: "100%", height: "60%", backgroundColor: "#eeeeee" }}
        src={songs[currentSongIndex].path}
      >
        Your browser does not support the audio element.
      </audio>
    </Box>
  );
};

const TitleWrap = styled.div`
  display: flex;
  white-space: nowrap;
  overflow: hidden;
  font-size: 0.8rem;
`;

const Title = styled.div`
  animation: textLoop 8s linear infinite;

  @keyframes textLoop {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(-100%, 0, 0);
    }
  }
`;

export default Playlist;
