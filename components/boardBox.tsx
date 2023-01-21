import React, { useState } from "react";
import { dbService, storageService } from "../config";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { Box } from "ready-to-use-components";
import Image from "next/image";

const BoardBox = ({ list, isOwner, isLoggedIn }) => {
  const [editing, setEditing] = useState(false);
  const [newText, setNewText] = useState(list.text);

  const PostRef = doc(dbService, "list", `${list.id}`);

  const onDeleteClick = async () => {
    const ok = window.confirm("정말로 삭제하시겠습니까?");
    if (ok) {
      await deleteDoc(PostRef);
      const desertRef = ref(storageService, list.attachmentUrl);
      await deleteObject(desertRef);
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
        <Box as="form" onSubmit={onSubmit}>
          <Box>
            <Box>
              <h4>{list.author}</h4>
              <span>({list.postedAt})</span>
            </Box>
            <Box>
              <button type="submit" value="update post">
                업데이트
              </button>
            </Box>
          </Box>
          <Box>
            <Box>이미지</Box>
            <Box as="section">
              <Box
                as="textarea"
                value={newText}
                type="text"
                placeholder="내용을 수정하세요"
                onChange={onTextChange}
              ></Box>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box>
          <Box>
            <Box>
              <h4>{list.author}</h4>
              <span>({list.postedAt})</span>
            </Box>
            {isOwner && isLoggedIn && (
              <Box>
                <Box as="button" onClick={toggleEditing}>
                  수정{" "}
                </Box>
                <span>|</span>
                <Box as="button" onClick={onDeleteClick}>
                  삭제
                </Box>
              </Box>
            )}
          </Box>
          <Box>
            {list.attachmentUrl && (
              <Box>
                <Image
                  src={list.attachmentUrl}
                  alt="photo"
                  style={{ width: "86px", height: "86px" }}
                />
              </Box>
            )}
            <Box as="section">
              <Box as="p">{list.text}</Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default BoardBox;
