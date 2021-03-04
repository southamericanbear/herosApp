import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe("test in authReducerman", () => {
  test("should return default state", () => {
    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false });
  });

  test("should authenticate and return the user name", () => {
    const action = {
      type: types.login,
      payload: {
        name: "Hernando",
      },
    };

    const state = authReducer({ logged: false }, action);
    expect(state).toEqual({ logged: true, name: "Hernando" });
  });

  test("should delete username and turn log to false", () => {
    const action = {
      type: types.logout,
    };

    const state = authReducer({ logged: true, name: "Alan" }, action);
    expect(state).toEqual({ logged: false });
  });
});
