import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard />
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45 PM"
        content="This is really good"
        image={faker.image.avatar()}
      />
      <CommentDetail
        author="Alex"
        timeAgo="Yesterday at 2:00 AM"
        content="Learned a lot from it"
        image={faker.image.avatar()}
      />
      <CommentDetail
        author="Jane"
        timeAgo="Today at 7:20 PM"
        content="Nice blog post"
        image={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
