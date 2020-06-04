import axios from "axios";
import { to } from "await-to-js";
import { GET_HACKER_NEWS_DATA } from "./actionTypes";

export const getHackerNewsData = (pageNo = 1) => async (dispatch) => {
  const url = `https://hn.algolia.com/api/v1/search?page=${pageNo}`;
  const [err, response] = await to(axios.get(url));
  if (!err) {
    dispatch({
      type: GET_HACKER_NEWS_DATA,
      payload: response,
    });
  }
};
