import {createStore, applyMiddleware} from "redux";
import { createEpicMiddleware } from 'redux-observable';
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers/index";
import rootEpic from "../epics/index";

const createStoreWithMiddleware = applyMiddleware(rootEpic)(createStore);
const epicMiddleware = createEpicMiddleware(rootEpic);

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState,
       window.devToolsExtension ? window.devToolsExtension() : undefined
    );
    return store;
}
