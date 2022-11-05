import styled from "@emotion/styled";

export const Layout = styled.div`
  position: relative;
  padding: 16px;
  height: 206px;
  overflow: hidden;
  margin-bottom: 8px;

  background-color: #eff0f5;
  border-radius: 8px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px -1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  @media (min-width: 1920px) {
    padding: 24px 16px;
    height: 164px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media (min-width: 1920px) {
    justify-content: flex-start;
  }
`;

export const RatingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ArticleWrapper = styled.div`
  margin-left: 19px;
  @media (min-width: 1920px) {
    display: flex;
    flex-direction: row-reverse;
    max-width: 712px;
    overflow: hidden;
  }
`;

export const LogoWrapper = styled.div`
  margin-top: 45px;
  @media (min-width: 1920px) {
    margin-top: 0;
  }
`;

export const SvgWrapper = styled.div`
  display: none;
  @media (min-width: 1920px) {
    display: block;
    position: absolute;
    top: 29px;
    right: 24px;
  }
`;
