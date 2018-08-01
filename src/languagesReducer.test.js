import { FETCH_LANGUAGES_REQUEST, FETCH_LANGUAGES_SUCCESS, FETCH_LANGUAGES_FAILURE } from "./actionTypes";
import { languages, isLanguagesLoading, isLanguagesError, getLanguageName } from "./languagesReducer";

describe("languagesReducer", () => {
  it("updates state on success", () => {
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
    const initialState = {};
    const action = {
      type: FETCH_LANGUAGES_SUCCESS,
      body: body
    };
    expect(languages(initialState, action)).toEqual(body);
  });

  it("toggles loading state on actions", () => {
    const requestAction = {
      type: FETCH_LANGUAGES_REQUEST
    };
    const successAction = {
      type: FETCH_LANGUAGES_SUCCESS
    };
    const failureAction = {
      type: FETCH_LANGUAGES_FAILURE
    };

    expect(isLanguagesLoading(false, requestAction)).toBe(true);
    expect(isLanguagesLoading(true, successAction)).toBe(false);
    expect(isLanguagesLoading(true, failureAction)).toBe(false);
  });

  it("toggles error state on actions", () => {
    const requestAction = {
      type: FETCH_LANGUAGES_REQUEST
    };
    const successAction = {
      type: FETCH_LANGUAGES_SUCCESS
    };
    const failureAction = {
      type: FETCH_LANGUAGES_FAILURE,
      error: "error"
    };

    expect(isLanguagesError(false, requestAction)).toBe(false);
    expect(isLanguagesError(false, successAction)).toBe(false);
    expect(isLanguagesError(false, failureAction)).toBe(true);
  });

  it("selects language", () => {
    const englishName = "English";
    const code = "en";
    const state = {
      languages: [
        {
          iso_639_1: "xx",
          english_name: "No Language",
          name: "No Language"
        },
        {
          iso_639_1: code,
          english_name: englishName,
          name: englishName
        }
      ]
    };
    expect(getLanguageName(state, code)).toBe(englishName);
  });
});
