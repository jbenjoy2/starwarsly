import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import thunk from "redux-thunk";
import root from "./reducers/root";
import { createStore, applyMiddleware } from "redux";

// redux-persist config object; uses key of 'root' and localStorage persistance (for web), with automerge level 2 to merge initial and incoming state
const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2
};

// create persisted reducer using root reducer and config object
const persistedReducer = persistReducer(persistConfig, root);

// export store using persisted reducer and using thunk middleware
export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));

// export persisted store for use with persistGate component
export const persistedStore = persistStore(store);
