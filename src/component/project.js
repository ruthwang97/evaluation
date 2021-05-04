import Button from './button'

const Project = (props) => {
    return (<div class = "col-sm-4 col-md-4 text-center">
    <div class = {props.group}>
        <h3>{props.title}</h3>
        <p>{props.para} </p>
        <div class = "row">
            <div class = "col-sm-4 col-md-4 col-sm-offset-4 col-md-offset-4">
                <div class = "project-more-info">
                    <Button href = "#" text="More"/>
                </div>
            </div>
        </div>
    </div>
</div>)
}
export default Project;