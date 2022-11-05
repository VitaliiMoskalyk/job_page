import styled from "@emotion/styled";

export const Section = styled.div`
  background-color: #e6e9f2;
  height: fit-content;
`;

export const Box = styled.div`
  position: relative;
  padding: 9px;
  margin-left: auto;
  margin-right: auto;
  max-width: 396px;
  height: auto;

  @media (min-width: 1920px) {
    padding: 29px 260px;
    max-width: 1400px;
  }
`;
