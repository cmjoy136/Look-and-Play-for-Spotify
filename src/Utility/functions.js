import axios from "axios";

export const getParamValues = (url) => {
  return url
    .slice(1)
    .split("&")
    .reduce((prev, curr) => {
      const [title, value] = curr.split("=");
      prev[title] = value;
      return prev;
    }, {});
};

export const setAuthHeader = () => {
  try {
    const params = JSON.parse(localStorage.getItem("params"));
    if (params) {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${params.access_token}`;
    }
  } catch (err) {
    console.log("Authorization Error", err);
  }
};

export const get = async(url, params) => {
    setAuthHeader()
    const result = await axios.get(url, params)
    return result.data
}

export const post = async(url, params) => {
    setAuthHeader()
    const  result = await axios.post(url, params)
    return result.data
}