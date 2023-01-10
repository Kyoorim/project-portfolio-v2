import { Box } from "ready-to-use-components";
import { dummyMyInfo } from "../asset/dummyMyInfo";
import profilepic from "../asset/profilepic.jpeg";
import Image from "next/image";
import AnswerBox from "./answerBox";

const MyInfo = () => {
  const myinfo = dummyMyInfo;
  return (
    <Box
      as="ul"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p={0}
    >
      <Image
        src={profilepic}
        alt="profile image"
        style={{ width: "30%", height: "auto" }}
      />
      {myinfo?.map((el) => (
        <AnswerBox key={el.id} answer={el} />
      ))}
    </Box>
  );
};

export default MyInfo;
