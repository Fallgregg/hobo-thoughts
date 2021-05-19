import { parseProfileInfo } from "./api";

const testProfile1 = {
  login: "Fallgregg",
  following: 120,
  followers: 19,
  posts: [
    {
      title: "Post Title 1",
      text: "Limia porbeagle shark morwong dragonfish grunion southern grayling wolffish. Graveldiver rohu smoothtongue tommy ruff, wallago flathead, Pacific cod Canthigaster rostrata panga, Reef triggerfish crestfish whiting.",
      date: "12/12/2021",
    },
    {
      title: "Post Title 2",
      text: "Limia porbeagle shark morwong dragonfish grunion southern grayling wolffish. Graveldiver rohu smoothtongue tommy ruff, wallago flathead, Pacific cod Canthigaster rostrata panga, Reef triggerfish crestfish whiting.",
      date: "10/12/2021",
    },
  ],
};

const testProfile2 = {
  following: "120",
  followers: 19,
  posts: [
    {
      title: "Post Title 1",
      text: "Limia porbeagle shark morwong dragonfish grunion southern grayling wolffish. Graveldiver rohu smoothtongue tommy ruff, wallago flathead, Pacific cod Canthigaster rostrata panga, Reef triggerfish crestfish whiting.",
      date: "12/12/2021",
    },
    {
      text: "Limia porbeagle shark morwong dragonfish grunion southern grayling wolffish. Graveldiver rohu smoothtongue tommy ruff, wallago flathead, Pacific cod Canthigaster rostrata panga, Reef triggerfish crestfish whiting.",
      date: "10/12/2021",
    },
  ],
};

test("testing login", () => {
  const data = parseProfileInfo(testProfile1);
  expect(data.profileInfo.login).toBeDefined();
});

test("testing login type", () => {
  const data = parseProfileInfo(testProfile1);
  const type = typeof data.profileInfo.login;
  expect(type).toBe("string");
});

test("testing posts.title", () => {
  const data = parseProfileInfo(testProfile1);
  expect(data.posts[0].title).toBeDefined();
});

test("testing posts.title type", () => {
  const data = parseProfileInfo(testProfile1);
  const type = typeof data.posts[0].title;
  expect(type).toBe("string");
});

test("testing posts.text", () => {
  const data = parseProfileInfo(testProfile1);
  expect(data.posts[0].text).toBeDefined();
});

test("testing posts.text type", () => {
  const data = parseProfileInfo(testProfile1);
  const type = typeof data.posts[0].text;
  expect(type).toBe("string");
});

test("testing posts.date", () => {
  const data = parseProfileInfo(testProfile1);
  expect(data.posts[0].date).toBeDefined();
});

test("testing posts.date type", () => {
  const data = parseProfileInfo(testProfile1);
  const type = typeof data.posts[0].date;
  expect(type).toBe("string");
});

test("testing followers type", () => {
  const data = parseProfileInfo(testProfile1);
  const type = typeof data.profileInfo.followers;
  expect(type).toBe("number");
});

test("testing following type", () => {
  const data = parseProfileInfo(testProfile1);
  const type = typeof data.profileInfo.followers;
  expect(type).toBe("number");
});

test("testing login (second)", () => {
  const data = parseProfileInfo(testProfile2);
  expect(data.profileInfo.login).toBeDefined();
});

test("testing login type (second)", () => {
  const data = parseProfileInfo(testProfile2);
  const type = typeof data.profileInfo.login;
  expect(type).toBe("string");
});

test("testing posts.title (second)", () => {
  const data = parseProfileInfo(testProfile2);
  expect(data.posts[0].title).toBeDefined();
});

test("testing posts.title type (second)", () => {
  const data = parseProfileInfo(testProfile2);
  const type = typeof data.posts[0].title;
  expect(type).toBe("string");
});

test("testing posts.text (second)", () => {
  const data = parseProfileInfo(testProfile2);
  expect(data.posts[0].text).toBeDefined();
});

test("testing posts.text type (second)", () => {
  const data = parseProfileInfo(testProfile2);
  const type = typeof data.posts[0].text;
  expect(type).toBe("string");
});

test("testing posts.date (second)", () => {
  const data = parseProfileInfo(testProfile2);
  expect(data.posts[0].date).toBeDefined();
});

test("testing posts.date type (second)", () => {
  const data = parseProfileInfo(testProfile2);
  const type = typeof data.posts[0].date;
  expect(type).toBe("string");
});

test("testing followers type (second)", () => {
  const data = parseProfileInfo(testProfile2);
  const type = typeof data.profileInfo.followers;
  expect(type).toBe("number");
});

test("testing following type (second)", () => {
  const data = parseProfileInfo(testProfile2);
  const type = typeof data.profileInfo.followers;
  expect(type).toBe("number");
});
