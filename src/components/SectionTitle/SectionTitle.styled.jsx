import styled from "@emotion/styled";

export const Title = styled.h2`
  font-family: "Proxima Nova";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 0.413333px;

  color: #3a4562;
  ::after {
    content: " ";
    display: block;
    outline: 1px solid #3a4562;
    opacity: 0.13;
    margin-bottom: 25px;
    margin-top: 12px;
    @media (min-width: 1920px) {
      margin-bottom: 39px;
      margin-top: 9px;
    }
  }
`;
