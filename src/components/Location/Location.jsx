import { useEffect, useState } from "react";
import Svg from "../../Svg/Svg";
import fetchData from "../../utils/reverseCoordinates";
import { Wrapper, Block } from "./Location.styled";

const Location = ({ location, address }) => {
  const { lat, long } = location;
  const [data, setData] = useState();

  useEffect(() => {
    fetchData(lat, long).then((res) => setData(res));
  }, []);

  return (
    <Wrapper>
      {data && (
        <Block>
          <Svg icon="icon-Location" width={13} height={18} />
          {data.CntryName && data.CntryName + ", "}
          {data.PlaceName}
          {address && address}
        </Block>
      )}
    </Wrapper>
  );
};

export default Location;
