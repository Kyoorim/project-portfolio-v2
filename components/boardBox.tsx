import React, { useState } from "react";
import { dbService } from "../config";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { Box, Center } from "ready-to-use-components";

const BoardBox = ({ list, isOwner, isLoggedIn }) => {
  const [editing, setEditing] = useState(false);
  const [newText, setNewText] = useState(list.text);

  const PostRef = doc(dbService, "list", `${list.id}`);

  const onDeleteClick = async () => {
    const ok = window.confirm("정말로 삭제하시겠습니까?");
    if (ok) {
      await deleteDoc(PostRef);
    }
  };

  const toggleEditing = () => {
    setEditing((prev) => !prev);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await updateDoc(PostRef, {
      text: newText,
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
    });
    setEditing(false);
  };

  const onTextChange = (e) => {
    const {
      target: { value },
    } = e;
    setNewText(value);
  };

  return (
    <>
      {editing ? (
        <Box
          as="form"
          onSubmit={onSubmit}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          width="100%"
          border={["1px solid"]}
          borderColor="#d3d3d3"
          bx="none"
          mt={3}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            bg="#f6f6f6"
            p={["2px 10px 2px 10px"]}
          >
            <Center>
              <Box
                as="h4"
                fontSize="0.9rem"
                my="0px"
                mr="10px"
                fontWeight={700}
                color="#787878"
              >
                {list.author}
              </Box>
              <Box as="span" fontSize="0.8rem" color="#787878" mr="10px">
                ({list.postedAt})
              </Box>
            </Center>
            <Box>
              <button
                type="submit"
                value="update post"
                style={{ border: "none", backgroundColor: "#f6f6f6" }}
              >
                업데이트
              </button>
            </Box>
          </Box>
          <Box
            display="flex"
            alignItems="flex-start"
            p={["10px 15px 10px 15px"]}
            boxSizing="border-box"
            width="100%"
          >
            <Box
              as="section"
              display="flex"
              flexDirection="column"
              alignItems="flex-end"
              width="100%"
            >
              <Box
                as="textarea"
                value={newText}
                type="text"
                placeholder="내용을 수정하세요"
                onChange={onTextChange}
                width="100%"
                border={["1px solid"]}
                borderColor="#d3d3d3"
              ></Box>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box
          as="form"
          onSubmit={onSubmit}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          width="100%"
          border={["1px solid"]}
          borderColor="#d3d3d3"
          bx="none"
          mt={3}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            bg="#f6f6f6"
            p={["2px 10px 2px 10px"]}
            width="100%"
          >
            <Center>
              <Box
                as="h4"
                fontSize="0.8rem"
                my="0px"
                mr="10px"
                fontWeight={700}
                color="#787878"
              >
                {list.author}
              </Box>
              <Box as="span" fontSize="0.7rem" color="#787878">
                ({list.postedAt})
              </Box>
            </Center>
            {isOwner && isLoggedIn && (
              <Box width="30%" display="flex" justifyContent="flex-end">
                <Box
                  as="button"
                  onClick={toggleEditing}
                  border="none"
                  color="inherit"
                  bg="#f6f6f6"
                  fontSize="0.8rem"
                >
                  수정
                </Box>
                <span>|</span>
                <Box
                  as="button"
                  onClick={onDeleteClick}
                  border="none"
                  color="inherit"
                  bg="#f6f6f6"
                  fontSize="0.8rem"
                >
                  삭제
                </Box>
              </Box>
            )}
          </Box>
          <Box>
            <Box
              as="section"
              display="flex"
              flexDirection="column"
              alignItems="flex-end"
            >
              <Box as="p" width="95%">
                {list.text}
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default BoardBox;
