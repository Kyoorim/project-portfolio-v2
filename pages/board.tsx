import React, { useState, useEffect } from "react";
import { query, onSnapshot, collection, orderBy } from "firebase/firestore";
import { dbService } from "../config";
import { apiService } from "../pages/api";
import BoardBox from "../components/boardBox";
import Layout from "../components/layout";
import ProfileBar from "../components/profileBar";
import ProfileContent from "../components/profileContent";
import Card from "../components/card";
import Main from "../components/main";
import WriteBoard from "../components/writeBoard";
import { Box, Center } from "ready-to-use-components";
import { UserObj } from "../types";
import { List } from "../types";

const Board: React.FC<{ isLoggedIn: Boolean; userObj: UserObj }> = ({
  isLoggedIn,
  userObj,
}) => {
  const [list, setList] = useState<List[]>([]);

  const onSocialClick: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    try {
      await apiService.SocialLogin(e as React.MouseEvent<HTMLButtonElement, MouseEvent> & {target: {name: string}});
      alert("로그인 성공");
    } catch {
      alert("로그인이 실패했습니다");
    }
  };

  useEffect(() => {
    const q = query(
      collection(dbService, "list"),
      orderBy("createdAt", "desc")
    );
    onSnapshot(q, (snapshot) => {
      const listArr = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setList(listArr);
    });
  }, []);

  return (
    <Layout>
      <ProfileBar>
        <Card>
          <ProfileContent isLoggedIn={isLoggedIn} />
        </Card>
      </ProfileBar>
      <Main>
        <Card>
          {isLoggedIn ? (
            <WriteBoard userObj={userObj} />
          ) : (
            <Center display="flex" flexDirection="column" py={3}>
              <Box as="span" fontSize={[1, 1, 2]} mb={2} color="inherit">
                로그인 후 방명록을 쓰실 수 있습니다
              </Box>
              <Box
                as="button"
                name="google"
                border="none"
                bg="white"
                onClick={onSocialClick}
                fontSize={[1, 1, 2]}
                borderBottom={["1px solid"]}
              >
                구글로 로그인
              </Box>
            </Center>
          )}
          {list.map((post) => (
            <BoardBox
              key={post.id}
              list={post}
              isOwner={post.creatorId === userObj?.uid}
              isLoggedIn={isLoggedIn}
            />
          ))}
        </Card>
      </Main>
    </Layout>
  );
};

export default Board;
