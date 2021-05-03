import { createStore } from "redux";
import React from 'react';


export const ADD_TODO = (content) => ({
    type: 'add',
    payload: {
        content: content
    }
})

export const DEL_TODO = (id) => ({
    type: 'del',
    payload: {
        id:id
    }
})

const reducers = (state = {tot:0, content:{}}, action) => {
    switch (action.type){
        case 'add':{
            console.log("store");
            console.log(state);

            return{
                tot : state.tot +1,
                content :{...state.content, [state.tot]:action.payload.content}
            }
            
        }
        case 'del': {
            delete state.content[action.payload.id]
            return{
                tot: state.tot,
                content: state.content
            }
        }
        default:
            return state;
    }
}



const store = createStore(reducers);

export default store;