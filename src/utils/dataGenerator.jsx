import axios from "axios";

const dataGenerator = async () => {
  const result = await axios(
    "https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu"
  );
  return result.data;
};

export default dataGenerator;
