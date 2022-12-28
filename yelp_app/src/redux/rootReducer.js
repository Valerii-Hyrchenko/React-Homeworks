import { combineReducers } from "redux";
import { activeGroupReducer } from "./activeGroupReducer";
import { authReducer } from "./authReducer";
import { loaderReducer } from "./loaderReducer";
import { showOrHideBasketReducer } from "./showOrHideBasketReducer";
import { basketProcessingReducer } from "./basketProcessingReducer";

export const rootReducer = combineReducers({
  activeDishGroup: activeGroupReducer,
  currentAuthUser: authReducer,
  loader: loaderReducer,
  isBasketShow: showOrHideBasketReducer,
  basketProcessing: basketProcessingReducer,
});
