import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { FETCH_LANGUAGES_REQUEST, FETCH_LANGUAGES_SUCCESS, FETCH_LANGUAGES_FAILURE } from "./actionTypes";
import {
  fetchLanguages,
  fetchLanguagesRequest,
  fetchLanguagesSuccess,
  fetchLanguagesFailure
} from "./languagesActions";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("languagesActions", () => {
  it("fetches languages", () => {
    const initialState = {};
    const store = mockStore(initialState);
    const body = [
      {
        iso_639_1: "xx",
        english_name: "No Language",
        name: "No Language"
      },
      {
        iso_639_1: "aa",
        english_name: "Afar",
        name: ""
      }
    ];

    fetch = jest.fn(() =>
      Promise.resolve({
        json: () => body
      })
    );

    return store.dispatch(fetchLanguages()).then(() => {
      expect(store.getActions()).toEqual([
        {
          type: FETCH_LANGUAGES_REQUEST
        },
        {
          type: FETCH_LANGUAGES_SUCCESS,
          body
        }
      ]);
    });
  });
});
