import Location from "../Location/Location";
import {
  BlockWrapper,
  ContactsBlock,
  Article,
  Contacts,
} from "./FullContacts.styled";

const FullContacts = ({ data }) => {
  const { name, email, phone, address, location } = data;
  return (
    <BlockWrapper>
      <ContactsBlock>
        <Article>
          Department name.
          <br /> {name}.
        </Article>
        <Location location={location} address={address} />
        <Contacts>
          <p>{phone}</p>
          <p>{email}</p>
        </Contacts>
      </ContactsBlock>

      <img
        src={`https://maps.googleapis.com/maps/api/staticmap?center=${location.lat},${location.long}&zoom=5&size=436x300&maptype=roadmap&markers=color:black%7Clabel:O%7C${location.lat},${location.long}&key=AIzaSyDgi9ePfnyNISLaAepEvCEgw4i_xd2W3zY&map_id=8f3eddf5c9ce2800`}
        alt="google map"
      />
    </BlockWrapper>
  );
};
export default FullContacts;
