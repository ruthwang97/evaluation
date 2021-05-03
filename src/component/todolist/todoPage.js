import { useParams } from "react-router-dom"
import {connect} from "react-redux"
import {useHistory } from 'react-router-dom';
const TodoPage = ({id, content}) => {
    return(
        <div id = {id}>{content}</div>
    )
}
const MapStP = (state, ownProps) => {
    const {id} = useParams();
    const list = state.content;
  
    const content = state.content[id];
    return { content }
}
export default connect(MapStP)(TodoPage)