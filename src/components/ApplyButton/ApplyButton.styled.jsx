import styled from "@emotion/styled";

export const Button = styled.button`
  width: 127px;
  height: 52px;
  background: #384564;
  border-radius: 8px;
  margin-bottom: 50px;

  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  /* identical to box height, or 133% */

  text-align: center;
  text-transform: uppercase;

  color: #ffffff;

  outline: none;
  border: none;
  cursor: pointer;
  :hover,
  :focus {
    background: #384568;
    outline: 1px solid grey;
  }
`;

export const ButtonPosition = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 1920px) {
    justify-content: flex-start;
  }
`;
