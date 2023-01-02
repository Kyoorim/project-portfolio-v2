import { Center, HStack, Box } from "ready-to-use-components";
import Card from "../components/card";
import Layout from "../components/layout";
import ProfileBar from "../components/profileBar";
import ProfileContent from "../components/profileContent";

export default function Home() {
  return (
    <Layout>
      <ProfileBar>
        <Card>
          <ProfileContent />
        </Card>
      </ProfileBar>
    </Layout>
  );
}
