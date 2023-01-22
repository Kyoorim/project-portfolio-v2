import React, { useState } from "react";
import { storageService } from "../config";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { apiService } from "../pages/api";
import { Box } from "ready-to-use-components";
import Image from "next/image";

const WriteBoard = ({ userObj }) => {
  const [text, setText] = useState("");
  const [attachment, setAttachment] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    let attachmentUrl = "";

    if (attachment) {
      const attachmentRef = ref(storageService, `${userObj.uid}/${uuidv4()}`);
      const response = await uploadString(
        attachmentRef,
        attachment,
        "data_url"
      );
      attachmentUrl = await getDownloadURL(response.ref);
      console.log(attachmentUrl);
    }

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
      attachmentUrl,
    };

    try {
      await apiService.PutPost(textObj);
      alert("성공적으로 등록되었습니다");
      setText("");
      setAttachment("");
    } catch (err) {
      alert(err);
    }
  };

  const onTextChange = (event) => {
    const {
      target: { value },
    } = event;
    setText(value);
  };

  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
    };
    reader.readAsDataURL(theFile);
  };

  const onClearAttachement = () => {
    setAttachment(null);
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
          as="input"
          type="file"
          accept="image/*"
          id="input-file"
          onChange={onFileChange}
          width={[3 / 4, 3 / 4, 4 / 5]}
        ></Box>
        <Box as="button" type="submit" width={[1 / 4, 1 / 4, 1 / 5]}>
          등록
        </Box>
      </Box>
      {attachment && (
        <Box>
          <Image
            src={attachment}
            alt="사진 미리보기"
            style={{ width: "50px", height: "50px" }}
          />
          <Box as="button" onClick={onClearAttachement}>
            업로드 취소
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default WriteBoard;
