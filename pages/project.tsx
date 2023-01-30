import Card from "../components/card";
import Layout from "../components/layout";
import Main from "../components/main";
import ProfileBar from "../components/profileBar";
import ProfileList from "../components/profileList";
import ProjectDetail from "../components/projectDetail";

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
          <ProjectDetail />
        </Card>
      </Main>
    </Layout>
  );
};

export default AboutMe;
