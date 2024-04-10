import axios from "axios";

const getAdvice = async () => {
  const response = await axios.get("https://api.adviceslip.com/advice", {});
  return response.data;
};

export default getAdvice;
