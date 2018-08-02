import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { GET_DIMENSIONS } from "./actionTypes";
import { getDimensions } from "./dimensionsActions";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("dimensionsActions", () => {
  it("dispatches find action", () => {
    const initialState = {};
    const store = mockStore(initialState);

    store.dispatch(getDimensions());
    
    expect(store.getActions()).toEqual([
      {
        type: GET_DIMENSIONS
      }
    ]);
  });
});
