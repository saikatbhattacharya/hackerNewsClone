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

export const upVote = (d) => (dispatch, getState) => {
  let { hackerNewsData } = getState().dashboardReducer;
  let { hits = {} } = hackerNewsData;
  hits = hits.map((each) =>
    each.objectID === d.objectID ? { ...d, points: d.points + 1 } : each
  );
  hackerNewsData.hits = hits;
  //call api from here

  dispatch({
    type: GET_HACKER_NEWS_DATA,
    payload: { data: hackerNewsData },
  });
};

export const hideData = (d) => (dispatch, getState) => {
  let { hackerNewsData } = getState().dashboardReducer;
  let { hits = {} } = hackerNewsData;
  hits = hits.filter((each) => each.objectID !== d.objectID);
  hackerNewsData.hits = hits;
  //call api from here

  dispatch({
    type: GET_HACKER_NEWS_DATA,
    payload: { data: hackerNewsData },
  });
};
