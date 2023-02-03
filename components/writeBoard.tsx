import React, {ChangeEvent, useState} from "react";
import { apiService } from "../pages/api";
import { Box } from "ready-to-use-components";
import { UserObj } from "../types";

const WriteBoard: React.FC<{ userObj: UserObj }> = ({ userObj }) => {
  const [text, setText] = useState("");

  const onSubmit = async (event: React.MouseEvent) => {
    event.preventDefault();

    const textObj = {
      text: text,
      creatorId: userObj.uid,
      author: userObj.displayName,
      createdAt: Date.now(),
      postedAt:
        new Date().getFullYear() +
        "-" +
        (new Date().getMonth() + 1) +
        "-" +
        new Date().getDate() +
        " " +
        new Date().getHours() +
        ":" +
        new Date().getMinutes(),
    };

    try {
      await apiService.PutPost(textObj);
      alert("성공적으로 등록되었습니다");
      setText("");
    } catch (err) {
      alert(err);
    }
  };

  const onTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const result = event.target?.value;
    setText(result);
  };

  return (
    <Box
      as="form"
      onSubmit={onSubmit}
      display="flex"
      flexDirection="column"
      alignItems="flex-end"
      boxSizing="border-box"
      width="100%"
      height="25%"
      p={["0.8em 0.8em 0px 0.8em"]}
      bg="#f6f6f6"
      border={["1px solid"]}
      borderColor="#d3d3d3"
      borderX="none"
    >
      <Box
        as="textarea"
        value={text}
        type="text"
        placeholder="방명록을 남겨주세요🥰"
        onChange={onTextChange}
        width="100%"
        height="80%"
        border={["1px solid"]}
        borderColor="#d3d3d3"
      ></Box>
      
      <Box
        as="p"
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
        my={1}
        width={[1, 1, 1 / 2]}
      >
        <Box
          as="button"
          type="submit"
          border={["1px solid"]}
          borderColor="#d3d3d3"
          borderRadius="7px"
          color="inherit"
        >
          등록
        </Box>
      </Box>
    </Box>
  );
};

export default WriteBoard;
