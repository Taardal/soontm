import { FETCH_LANGUAGES_REQUEST, FETCH_LANGUAGES_SUCCESS, FETCH_LANGUAGES_FAILURE } from "./actionTypes";

export const languages = (state = [], action) => {
  switch (action.type) {
    case FETCH_LANGUAGES_SUCCESS:
      return action.body;
    default:
      return state;
  }
};

export const isLanguagesLoading = (state = false, action) => {
  switch (action.type) {
    case FETCH_LANGUAGES_REQUEST:
      return true;
    case FETCH_LANGUAGES_SUCCESS:
      return false;
    case FETCH_LANGUAGES_FAILURE:
      return false;
    default:
      return state;
  }
};

export const isLanguagesError = (state = false, action) => {
  switch (action.type) {
    case FETCH_LANGUAGES_REQUEST:
      return false;
    case FETCH_LANGUAGES_SUCCESS:
      return false;
    case FETCH_LANGUAGES_FAILURE:
      console.error(FETCH_LANGUAGES_FAILURE + " [" + action.error + "]");
      return true;
    default:
      return state;
  }
};

export const getLanguageName = (state, code) =>
  state.languages ? state.languages.find(language => code === language.iso_639_1).english_name : "";
