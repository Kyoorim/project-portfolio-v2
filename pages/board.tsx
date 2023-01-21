import React, { useState, useEffect } from "react";
import { query, onSnapshot, collection, orderBy } from "firebase/firestore";
import { dbService } from "../config";
import BoardBox from "../components/boardBox";
import Layout from "../components/layout";
import ProfileBar from "../components/profileBar";
import ProfileContent from "../components/profileContent";
import Card from "../components/card";
import Main from "../components/main";
import WriteBoard from "../components/writeBoard";

const Board = ({ userObj, isLoggedIn }) => {
  const [list, setList] = useState([]);

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
          <ProfileContent isLoggedIn={isLoggedIn} userObj={userObj} />
        </Card>
      </ProfileBar>
      <Main>
        <Card>
          {isLoggedIn && <WriteBoard userObj={userObj} />}
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
