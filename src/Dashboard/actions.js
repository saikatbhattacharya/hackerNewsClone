import axios from "axios";
import { to } from "await-to-js";
import { GET_HACKER_NEWS_DATA } from "./actionTypes";

export const getHackerNewsData = (pageNo = 1) => async (dispatch) => {
  const localStorageData = localStorage.getItem(`data-page-${pageNo}`);

  if (localStorageData) {
    dispatch({
      type: GET_HACKER_NEWS_DATA,
      payload: { data: JSON.parse(localStorageData) },
    });
  } else {
    const url = `https://hn.algolia.com/api/v1/search?page=${parseInt(pageNo)}`;
    const [err, response] = await to(axios.get(url));
    if (!err) {
      localStorage.setItem(
        `data-page-${pageNo}`,
        JSON.stringify(response.data)
      );
      dispatch({
        type: GET_HACKER_NEWS_DATA,
        payload: response,
      });
    }
  }
};

export const upVote = (d, pageNo) => (dispatch, getState) => {
  let hackerNewsData = {};
  const localStorageData = localStorage.getItem(`data-page-${pageNo}`);
  if (localStorageData) {
    hackerNewsData = JSON.parse(localStorageData);
  } else hackerNewsData = getState().dashboardReducer;
  let { hits = [] } = hackerNewsData;
  hits = hits.map((each) =>
    each.objectID === d.objectID ? { ...d, points: d.points + 1 } : each
  );
  hackerNewsData.hits = hits;
  //call api from here
  localStorage.setItem(`data-page-${pageNo}`, JSON.stringify(hackerNewsData));
  dispatch({
    type: GET_HACKER_NEWS_DATA,
    payload: { data: hackerNewsData },
  });
};

export const hideData = (d, pageNo) => (dispatch, getState) => {
  let hackerNewsData = {};
  const localStorageData = localStorage.getItem(`data-page-${pageNo}`);
  if (localStorageData) {
    hackerNewsData = JSON.parse(localStorageData);
  } else hackerNewsData = getState().dashboardReducer;
  let { hits = {} } = hackerNewsData;
  hits = hits.filter((each) => each.objectID !== d.objectID);
  hackerNewsData.hits = hits;
  //call api from here
  localStorage.setItem(`data-page-${pageNo}`, JSON.stringify(hackerNewsData));
  dispatch({
    type: GET_HACKER_NEWS_DATA,
    payload: { data: hackerNewsData },
  });
};
