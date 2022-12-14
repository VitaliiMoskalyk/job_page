import styled from "@emotion/styled";

export const TextBlock = styled.div`
  max-width: 430px;
  background-color: white;
  position: relative;
`;

export const PicturesWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
  margin-top: 20px;
  margin-bottom: 63px;
  height: 116px;
`;

export const Img = styled.img`
  width: 200px;
  height: auto;
  border-radius: 8px;
  margin-right: 9px;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;

  margin-top: 24px;
  width: 200px;
  @media (min-width: 1920px) {
    position: absolute;
    top: -20px;
    right: 0;
  }
`;

export const Article = styled.div`
  margin-top: 32px;
  margin-bottom: 21px;
  @media (min-width: 1920px) {
    margin-top: 0;
  }
`;

export const CostsBlock = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;

  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height, or 133% */

  letter-spacing: -0.5625px;

  color: rgba(56, 65, 93, 0.82);
  span {
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    /* identical to box height, or 125% */

    letter-spacing: -0.625px;

    color: #3a4562;
  }
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  /* or 133% */

  letter-spacing: -0.5625px;

  color: rgba(56, 65, 93, 0.82);

  margin-top: 14px;
  margin-bottom: 43px;
`;

export const Paraghraf = styled.h3`
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  /* identical to box height, or 125% */

  letter-spacing: -0.625px;

  color: #3a4562;

  margin-bottom: 10px;
`;

export const BlueRectangle = styled.p`
  display: inline-block;
  background: rgba(161, 177, 219, 0.317343);
  /* Functional/Option border */

  border: 1px solid rgba(85, 105, 158, 0.3);
  border-radius: 8px;

  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  /* identical to box height, or 100% */

  text-align: center;
  letter-spacing: -0.457143px;

  /* Bright/Blue Calm */

  color: #55699e;
  cursor: pointer;
  padding: 17px;
  margin-right: 8px;

  margin-bottom: 22px;
  :hover {
    color: #988b49;
  }
`;

export const OrangeRectangle = styled.p`
  display: inline-block;
  background: rgba(255, 207, 0, 0.15);
  border: 1px solid #ffcf00;
  border-radius: 8px;

  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  /* identical to box height, or 100% */

  text-align: center;
  letter-spacing: -0.457143px;

  /* Bright/Blue Calm */

  color: #988b49;

  padding: 17px;
  margin-right: 8px;
  cursor: pointer;
  margin-bottom: 63px;

  :hover {
    color: #55699e;
  }
`;

export const SubParaghraf = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height, or 133% */

  letter-spacing: -0.5625px;

  color: rgba(56, 65, 93, 0.82);

  margin-bottom: 10px;
`;
