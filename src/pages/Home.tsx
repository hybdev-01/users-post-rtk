import { Card } from "components/UI/Card";

import PostImg from "assets/images/post-img.png";

const Home = () => {
  return (
    <>
      <Card
        imgSrc={PostImg}
        title="Lorem Ipsum"
        description="Description..."
        topText="Author: Name"
      />
    </>
  );
};

export default Home;
