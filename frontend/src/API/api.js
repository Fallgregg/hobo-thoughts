export async function getProfileinfo() {
  const response = await fetch("http://localhost:3000/profile");
  if (response.status === 200) {
    const { followers, following, login, posts } = await response.json();
    const profileInfo = { login, followers, following };
    return { posts, profileInfo };
  }
}

export async function getHomepageInfo() {
  const response = await fetch("http://localhost:3000/");
  if (response.status === 200) {
    const posts = await response.json();
    return { posts };
  }
}
