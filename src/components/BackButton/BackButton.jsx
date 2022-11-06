import { useNavigate } from "react-router";
import Svg from "../../Svg/Svg";
import { Button, ButtonPosition } from "./BackButton.styled";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <ButtonPosition>
      <Button type="button" onClick={() => navigate("/")}>
        <Svg icon="icon-Arrow" width={18} height={18} /> RETURN TO JOB BOARD
      </Button>
    </ButtonPosition>
  );
};

export default BackButton;
