import axios from "axios";

//Grab Spotify parameters from local storage
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

export const getAccessToken = () => {
  if (typeof window !== "undefined") {
    const params = JSON.parse(localStorage.getItem("params"));
    return params.access_token;
  }
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

export const get = async (url, params) => {
  setAuthHeader();
  const result = await axios.get(url, params);
  return result.data;
};


//required due to spotify track object using milliseconds
//for song duration
export const timeParser = (millisec) => {
  const sec = String(Math.floor((millisec / 1000) % 60) || 0).padStart(
    "2",
    "0"
  );
  const min = String(Math.floor(millisec / 1000 / 60) || 0).padStart("2", "0");

  return `${min}:${sec}`;
};

//URI for tracks  need to be in the uri property whereas albums, artists, and playlists go in the context_uri property
export const uriParser = (uri) => {
  if (uri.substring(0, 13) !== "spotify:track") {
    return {
      context_uri: uri,
    };
  } else {
    return {
      uris: [uri],
    };
  }
};
