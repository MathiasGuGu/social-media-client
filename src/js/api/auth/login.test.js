import { login } from "./login";

const storageFix = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = storageFix;

describe("login", () => {
  it("Should retrieve login token", async () => {
    const username = "matgum51873@stud.noroff.no";
    const password = "aaiiuues";

    const data = await login(username, password);

    expect(typeof data).toBe("object");
  });

  it("place token in local storage", async () => {
    localStorage.setItem("token", "dummyToken");
    const username = "matgum51873@stud.noroff.no";
    const password = "aaiiuues";

    // fetch not available
    await login(username, password);

    const accessToken = localStorage.getItem("token");
    expect(accessToken).not.toBeNull();
  });
});
