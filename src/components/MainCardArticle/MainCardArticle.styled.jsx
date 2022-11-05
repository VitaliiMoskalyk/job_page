import styled from "@emotion/styled";

export const Title = styled.h2`
  font-family: "Figtree";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  /* or 133% */

  letter-spacing: -0.5625px;

  /* Text/Dark */

  color: #3a4562;

  max-height: 48px;
  overflow: hidden;

  cursor: pointer;
  @media (min-width: 1920px) {
    width: 430px;
  }
`;

export const Article = styled.p`
  font-family: "Proxima Nova";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  /* or 156% */

  letter-spacing: 0.23619px;

  /* Text/Secondary */

  color: #878d9d;

  max-height: 50px;
  overflow: hidden;
`;
