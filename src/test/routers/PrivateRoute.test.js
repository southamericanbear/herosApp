import React from "react";
import { shallow } from "@wojtekmaj/enzyme-adapter-react-17";
import { PrivateRoute } from "../../routers/PrivateRoute";
import { MemoryRouter } from "react-router-dom";

describe("test with private routes", () => {
  const props = {
    location: {
      pathname: "/marvel",
    },
  };

  test("should show the component if the user is authenticated and save localstorage", () => {
    const wrapper = shallow(
      <MemoryRouter>
        <PrivateRoute
          isAuthenticated={true}
          component={() => <span>ready</span>}
          {...props}
        />
      </MemoryRouter>
    );
    console.log(wrapper.html());
  });
});
