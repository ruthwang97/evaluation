const Button = (props) =>{
    if(props.black){
        return <a class = "btn btn-default btn-black-border" href ={props.href}>{props.text}</a>
    }
    return <a class = "btn btn-default btn-border" href ={props.href}>{props.text}</a>
}

export default Button;