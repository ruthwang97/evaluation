import { useParams } from "react-router-dom"
import {connect} from "react-redux"
import {useHistory } from 'react-router-dom';
import {DEL_TODO} from '../../store/store'
const Todo = ({id, content, DEL_TODO}) => {
    let history = useHistory();
    const handleClick = (e) => {
        let url = e.target.id;
        history.push("/todo/"+url)
    }
    const handleDelete =(e)=>{
        DEL_TODO(e.target.id);
    }
    return(
        <div>
            <div onClick = {e=>handleClick(e)} id = {id}>{content}</div>
            <button onClick = {e=>handleDelete(e)} id = {id}>delete</button>
        </div>
    )
}
const mapStP = (state, ownProps) => {
    const list = state.content;
    const {id} = ownProps;
    const content = state.content[id];
    return { id, content }
}
export default connect(mapStP, {DEL_TODO})(Todo)