import Button from "components/UI/Button";
import { Card } from "components/UI/Card";

import PostImg from "assets/images/post-img.png";

function App() {
  return (
    <>
      <h2>Hello Project</h2>
      <Button>Button</Button>
      <Card
        imgSrc={PostImg}
        title="Lorem Ipsum"
        description="Description..."
        topText="Author: Name"
      />
    </>
  );
}

export default App;
