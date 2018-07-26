import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  FETCH_CONFIGURATION_REQUEST,
  FETCH_CONFIGURATION_SUCCESS,
  FETCH_CONFIGURATION_FAILURE
} from "./actionTypes";
import {
  fetchConfiguration,
  fetchConfigurationRequest,
  fetchConfigurationSuccess,
  fetchConfigurationFailure
} from "./configurationActions";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("configurationActions", () => {
  it("fetches Configuration", () => {
    const initialState = {};
    const store = mockStore(initialState);
    const configuration = {
      images: {
        poster_sizes: [
          "w92",
          "w156"
        ]
      }
    };
    
    fetch = jest.fn(() =>
      Promise.resolve({
        json: () => ({ configuration })
      })
    );

    const expectedActions = [
      { type: FETCH_CONFIGURATION_REQUEST },
      { type: FETCH_CONFIGURATION_SUCCESS, body: { configuration } }
    ];

    return store.dispatch(fetchConfiguration()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
