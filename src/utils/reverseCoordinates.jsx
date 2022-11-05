import axios from "axios";

const fetchData = async (lat, long) => {
  const result = await axios(
    `https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode?f=pjson&featureTypes=&location=${lat}%2C${long}`
  );

  return result.data.address;
};

export default fetchData;
