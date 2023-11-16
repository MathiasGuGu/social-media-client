import { login } from "./login";

const storageFix = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = storageFix;

describe("login", () => {
  it("Should retrieve login token", async () => {
    const userName = "matgum51873@stud.noroff.no";
    const password = "aaiiuues";

    const data = await login(userName, password);

    expect(typeof data).toBe("object");
  });

  it("place token in local storage", async () => {
    localStorage.setItem("token", "dummyToken");
    const userName = "matgum51873@stud.noroff.no";
    const password = "aaiiuues";

    await login(userName, password);

    const accessToken = localStorage.getItem("token");
    expect(accessToken).not.toBeNull();
  });
});
