import styled from "@emotion/styled";

export const BlockWrapper = styled.div`
  height: 436px;
  max-width: 372px;

  margin-top: 21px;
  margin-bottom: 37px;

  background: #2a3047;
  border-radius: 8px;
  color: #e7eaf0;

  overflow: hidden;
  @media (min-width: 1920px) {
    width: 402px;
    position: absolute;
    top: 0;
    right: -506px;
  }
`;

export const ContactsBlock = styled.div`
  padding: 31px 62px;
`;

export const Article = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.23619px;

  margin-bottom: 14.5px;
`;

export const Contacts = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  /* or 144% */

  letter-spacing: -0.5px;

  color: rgba(255, 255, 255, 0.669635);

  margin-top: 6px;
`;
