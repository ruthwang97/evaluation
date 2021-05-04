import { createStore } from "redux";
import React from 'react';


export const changeValue = (content, num) => ({
    type: 'change',
    payload: {
        num: num,
        content: content
    }
})



const reducers = (state = {input1: '', input2: '', input3: '', input4: ''}, action) => {
    switch (action.type){
        case 'change':{
            state[action.payload.num] = action.payload.content;

            return{
                ...state
            }
            
        }
        default:
            return state;
    }
}



const store = createStore(reducers);

export default store;