const Media = (props) => {
    return (
<div class = {`col-sm-1 col-md-1 ${props.first ? 'col-sm-offset-4 col-md-offset-4':''}`}>
    <div class = {props.group}>
        <a href = "#"><img class = "img-responsive" src = {props.src} /></a>
    </div>
</div>
        
    )
}
export default Media;