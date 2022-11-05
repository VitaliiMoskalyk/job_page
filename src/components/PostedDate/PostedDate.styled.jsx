import styled from "@emotion/styled";

export const Article = styled.p`
  display: inline-block;
  font-family: "Proxima Nova";
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  text-align: right;
  letter-spacing: 0.206667px;

  /* Text/Secondary */

  color: #878d9d;

  /* max-height: 17px;
  overflow: hidden; */
  @media (min-width: 1920px) {
    text-align: left;
    margin-left: 12px;
  }
`;
