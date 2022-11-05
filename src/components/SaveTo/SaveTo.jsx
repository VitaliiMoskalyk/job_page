import Svg from "../../Svg/Svg";
import { Wrapper } from "./SaveTo.styled";

const SaveTo = ({ icon, title }) => {
  return (
    <Wrapper>
      <Svg icon={icon} width="18" height="20" />
      {title && <p style={{ marginLeft: "10px" }}>{title}</p>}
    </Wrapper>
  );
};

export default SaveTo;
