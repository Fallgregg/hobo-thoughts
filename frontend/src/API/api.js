import { postsMockData } from "./mock_data/data";

const requestToAPI = async (url, callback) => {
  const response = await fetch(url);
  if (response.status === 200) {
    return response.json();
  }
  return null;
};

export const parseProfileInfo = (response) => {
  const { followers, following, login, posts } = response;
  const profileInfo = { login, followers, following };
  return { posts, profileInfo };
};

export const parseHomePageInfo = (response) => {
  const posts = response;
  return { posts };
};

export async function getProfileinfo() {
  const response = postsMockData;
  return parseProfileInfo(response);
}

export async function getHomepageInfo() {
  const response = await requestToAPI("http://localhost:3000/");
  return parseHomePageInfo(response);
}
