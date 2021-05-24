import { getAccessToken } from "./functions";

export const scopes =
  "streaming user-read-email user-read-private user-read-playback-state user-modify-playback-state user-read-currently-playing";

export const authHeader = {
  Authorization: `Bearer ${getAccessToken()}`,
  "Content-Type": "application/json",
};
