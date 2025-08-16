import { Card } from "components/UI/Card";

import PostImg from "assets/images/post-img.png";
import Layout from "components/Layout/Layout";

function App() {
  return (
    <Layout>
      <Card
        imgSrc={PostImg}
        title="Lorem Ipsum"
        description="Description..."
        topText="Author: Name"
      />
    </Layout>
  );
}

export default App;
