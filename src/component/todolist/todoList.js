import {React, useState} from 'react';
import ReactDOM from 'react-dom';
import Todo from './todo';
import {useHistory } from 'react-router-dom';
import { connect } from "react-redux";
import {ADD_TODO, DEL_TODO} from '../../store/store';

const TodoList = ({list, add}) => {

    const [input, setInput] = useState('');

    const changeHandler =(value)=>{
        setInput(value);
    }
    const submitNewTodo = () =>{
        add(input);
        setInput('');
        console.log(list);
    }
    
    
    return(
    <>
        <input onChange = {e => changeHandler(e.target.value)} value = {input}></input>
        <button onClick = {submitNewTodo}></button>
        {Object.keys(list).map(key => <Todo id = {key} key = {key}/>)}
        
    </>
        
    )
}

const mStP = (state) => {
    const list = state.content;
    return {list};
}

const mapDispatchToProps = (dispatch) => {
    return {
      // dispatching actions returned by action creators
      add: (input) => dispatch(ADD_TODO(input)),
      del: (input) => dispatch(DEL_TODO(input)),
    }
}

// export default connect(mStP, {ADD_TODO})(TodoList);
export default connect(mStP, mapDispatchToProps)(TodoList);