import MainCardArticle from "../MainCardArticle/MainCardArticle";
import MainCardLogo from "../MainCardLogo/MainCardLogo";
import Location from "../Location/Location";
import {
  Layout,
  Wrapper,
  RatingWrapper,
  ArticleWrapper,
  LogoWrapper,
  SvgWrapper,
} from "./CardItem.styled";
import Rating from "../Rating/Rating";
import PostedDate from "../PostedDate/PostedDate";
import { useNavigate } from "react-router";
import SaveTo from "../SaveTo/SaveTo";

const CardItem = ({ dataItem }) => {
  const { pictures, title, address, location, updatedAt, id } = dataItem;

  const navigate = useNavigate();
  return (
    <Layout>
      <Wrapper>
        <LogoWrapper>
          <MainCardLogo pictures={pictures[0]} />
        </LogoWrapper>
        <ArticleWrapper>
          <RatingWrapper>
            <Rating id={id} />
            <PostedDate updatedAt={updatedAt} />
          </RatingWrapper>
          <div>
            <MainCardArticle
              title={title}
              address={address}
              onClick={() => navigate(id, { state: dataItem })}
            />
            <Location location={location} />
          </div>
        </ArticleWrapper>
      </Wrapper>
      <SvgWrapper>
        <SaveTo icon="icon-Rectangle-31" />
      </SvgWrapper>
    </Layout>
  );
};

export default CardItem;
