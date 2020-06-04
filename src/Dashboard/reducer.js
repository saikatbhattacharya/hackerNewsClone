import { GET_HACKER_NEWS_DATA } from "./actionTypes";

const INITIAL_STATE = {};

const dashboardReducer = (state = INITIAL_STATE, action) => {
  const { payload = {}, type } = action;
  switch (type) {
    case GET_HACKER_NEWS_DATA:
      return { ...state, hackerNewsData: payload.data };
    default:
      return state;
  }
};

export default dashboardReducer;
