import dashboardReducer from "../reducer";
import { GET_HACKER_NEWS_DATA } from "../actionTypes";

describe("users Reducer", () => {
  const initialState = {};

  it("returns the initial state when an action type is not passed", () => {
    const reducer = dashboardReducer(undefined, {});

    expect(reducer).toEqual(initialState);
  });

  it("handles GET_HACKER_NEWS_DATA as expected", () => {
    const reducer = dashboardReducer(initialState, {
      type: GET_HACKER_NEWS_DATA,
      payload: { data: { data: "test data", randomHash: "abcd" } },
    });
    expect(reducer.hackerNewsData.data).toEqual("test data");
  });
});
