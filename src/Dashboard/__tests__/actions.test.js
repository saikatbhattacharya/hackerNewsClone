import mockAxios from "axios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { getHackerNewsData } from "../actions";
import { GET_HACKER_NEWS_DATA } from "../actionTypes";

const mockStore = configureMockStore([thunk]);

describe("Get hacker news data", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      hackerNewsData: {},
    });
  });

  describe("getUsers action creator", () => {
    it("dispatches GET_HACKER_NEWS_DATA action and returns data on success", async () => {
      mockAxios.get.mockImplementationOnce(() =>
        Promise.resolve({
          data: {
            hits: [
              {
                created_at: "2017-02-23T13:01:08.000Z",
                title: "Announcing the first SHA-1 collision",
                url:
                  "https://security.googleblog.com/2017/02/announcing-first-sha1-collision.html",
                author: "pfg",
                points: 3030,
                story_text: null,
                comment_text: null,
                num_comments: 485,
                story_id: null,
                story_title: null,
                story_url: null,
                parent_id: null,
                created_at_i: 1487854868,
                relevancy_score: 7272,
                _tags: ["story", "author_pfg", "story_13713480"],
                objectID: "13713480",
                _highlightResult: {
                  title: {
                    value: "Announcing the first SHA-1 collision",
                    matchLevel: "none",
                    matchedWords: [],
                  },
                  url: {
                    value:
                      "https://security.googleblog.com/2017/02/announcing-first-sha1-collision.html",
                    matchLevel: "none",
                    matchedWords: [],
                  },
                  author: {
                    value: "pfg",
                    matchLevel: "none",
                    matchedWords: [],
                  },
                },
              },
            ],
            nbHits: 21706270,
            page: 1,
            nbPages: 50,
            hitsPerPage: 20,
            exhaustiveNbHits: true,
            query: "",
            params:
              "advancedSyntax=true&analytics=true&analyticsTags=backend&page=1",
            processingTimeMS: 2,
          },
        })
      );

      await store.dispatch(getHackerNewsData());
      const actions = store.getActions();

      expect.assertions(1);
      expect(actions[0].type).toEqual(GET_HACKER_NEWS_DATA);
    });
  });
});
