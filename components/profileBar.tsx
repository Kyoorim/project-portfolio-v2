import React from "react";
import { Center, Box, Stack } from "ready-to-use-components";
import styled from "styled-components";

const ProfileBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      height="100%"
      width="30%"
      box-sizing="border-box"
    >
      <TodayBox>
        <li>
          TODAY <span className="today">1</span>
        </li>
        <li>TOTAL 2022</li>
      </TodayBox>
      {children}
    </Box>
  );
};

const TodayBox = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  line-height: 1.4;
  list-style: none;
  padding: 0;
  margin: 0;
  height: 5%;
  li:first-of-type {
    padding-right: 10px;
    margin-right: 10px;
  }
`;

export default ProfileBar;
