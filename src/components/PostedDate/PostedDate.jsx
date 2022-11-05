import { Article } from "./PostedDate.styled";

const PostedDate = ({ updatedAt }) => {
  const date = (Date.now() - Date.parse(updatedAt)) / 86400000;
  return <Article>Posted {Math.trunc(date)} days ago</Article>;
};

export default PostedDate;
