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

export async function getProfileinfo() {
  const response = await requestToAPI("http://localhost:3000/profile");
  return parseProfileInfo(response);
}

export async function getHomepageInfo() {
  const response = await fetch("http://localhost:3000/");
  if (response.status === 200) {
    const posts = await response.json();
    return { posts };
  }
}
