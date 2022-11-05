import { Title, Article } from "./MainCardArticle.styled";

const MainCardArticle = ({ title, address, onClick }) => {
  return (
    <div>
      <Title onClick={onClick}>{title}</Title>
      {address && (
        <Article>
          Department name •<span>{address}</span>
        </Article>
      )}
    </div>
  );
};

export default MainCardArticle;
