
const Summary = (props) => {

    return(
    <>
<div class = {props.group1}>
    <div class = {`col-sm-1 col-md-1 ${props.left?" ":"col-sm-offset-2 col-md-offset-2"}`}>
        <div class = {props.imgGroup}>
            <img class = "img-responsive" src = {props.src} />
        </div>
    </div>

    <div class = "col-sm-4 col-md-4">
        <div class = {props.group2}>
            <h3>{props.title}</h3>
            <p>{props.para}</p>
        
        </div>
    </div>
</div>
    
    </>
    
        
    )
}
export default Summary;