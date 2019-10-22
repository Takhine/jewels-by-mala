import { 
    createStore, 
    applyMiddleware
} from 'redux'; 

import {composeWithDevTools} from 'redux-devtools-extension'; 

const intialState = {}; 


const store = createStore(
    rootReducer, 
    intialState, 
    composeWithDevTools()
)
