import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {
  open: false,
};

const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN":
      return {
        open: true,
      };
    case "CLOSE":
      return {
        open: false,
      };
    default:
      return state;
  }
};

const initialMenuSate = false;

const menuReducer = (state = initialMenuSate, action) => {
  switch (action.type) {
    case "OPEN_MENU":
      return true;
    case "CLOSE_MENU":
      return false;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  quote: quoteReducer,
  menu: menuReducer,
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
