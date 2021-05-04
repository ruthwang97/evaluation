import Button from './button'
const Intro = () => {
    return (<div class = "main">
    <div class = "container-fluid">
        <div class = "row">
            <div class = "entry-banner text-center">
                <h1 id = "hello" >Hello, I'm</h1>
                <h1 id = "name">XXXX</h1>
                <h1 id = "person-description">UI Developer. UX Desinger. Problem Solver.</h1>
            </div>
        </div>

        <div class = "row text-center">
            <div class = "banner-buttons">
                <div class = "col-sm-1 col-md-1 col-sm-offset-5 col-md-offset-5">
                    <Button href = "#about" text="Info"/>
                </div>

                <div class = "col-sm-1 col-md-1">
                    <Button href = "#projects" text = "Portfolio"/>
                </div>
            </div>
        </div>
    </div>
</div>)
}

export default Intro;