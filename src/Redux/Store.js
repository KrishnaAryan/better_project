import { createStore, combineReducers } from "redux";
import { auth, categoryData } from "./Reducer";

const allReducers = combineReducers({
  auth,
  categoryData,
});

let store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { store };
