import Card from "../components/card";
import Layout from "../components/layout";
import Main from "../components/main";
import MyInfo from "../components/myInfo";
import ProfileBar from "../components/profileBar";
import ProfileList from "../components/profileList";

const AboutMe = () => {
  return (
    <Layout>
      <ProfileBar>
        <Card>
          <ProfileList />
        </Card>
      </ProfileBar>
      <Main>
        <Card>
          <MyInfo />
        </Card>
      </Main>
    </Layout>
  );
};

export default AboutMe;
