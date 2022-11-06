import styled from "@emotion/styled";

export const Button = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 213px;
  height: 50px;
  color: #3a4562;
  background: #384564 0.14;
  /* opacity: 0.14; */
  border-radius: 8px;
  margin-bottom: 50px;

  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  /* identical to box height, or 133% */

  text-align: center;
  text-transform: uppercase;

  outline: none;
  border: none;
  cursor: pointer;
  :hover,
  :focus {
    background-color: #384600;
    outline: 1px solid grey;
  }
`;

export const ButtonPosition = styled.div`
  display: none;
  @media (min-width: 1920px) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`;
