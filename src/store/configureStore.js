import {createStore, applyMiddleware} from "redux";
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from "../reducers/index";
import rootEpic from "../epics/index";

const epicMiddleware = createEpicMiddleware(rootEpic);
const createStoreWithMiddleware = applyMiddleware(epicMiddleware)(createStore);


export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState,
       window.devToolsExtension ? window.devToolsExtension() : undefined
    );
    return store;
}
