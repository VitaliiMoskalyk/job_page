import { Wrapper } from "./MainCardLogo.styled";

const MainCardLogo = ({ pictures }) => {
  return (
    <Wrapper>
      <picture>
        <source />
        <img
          src={pictures}
          alt="logo of job card"
          loading="lazy"
          width="100%"
        />
      </picture>
    </Wrapper>
  );
};
export default MainCardLogo;
