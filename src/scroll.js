import logo from "./images/logo.svg";
import pic1 from "./images/developerdesign.svg";
import pic2 from "./images/responsivedesign.svg";
import pic3 from "./images/innovativesolutions.svg";
import pic4 from "./images/passion.svg";
import pic5 from "./images/facebook.svg";
import pic6 from "./images/linkedin.svg";
import pic7 from "./images/pinterest.svg";
import pic8 from "./images/email.svg";
import React, { useState } from 'react';
import Summary from './component/summary';
const Scroll = () =>{
    const [input1 ,setInput1] = useState('');
    const [input2 ,setInput2] = useState('');
    const [input3 ,setInput3] = useState('');
    const [input4 ,setInput4] = useState('');
    const [filled, setFilled] = useState(true)

    const handleClick = ()=> {
        if (input1 === '' || input2 === '' || input3 === '' || input3 === ''){
            setFilled(false);
        }

    }

    const changeHandler =(target)=>{
        console.log(target.id)
        if (input1 != '' && input2 !== '' && input3 !== '' && input3 !== ''){
            setFilled(true);
        }
        if(target.id === "4"){
            setInput4(target.value);
        }if(target.id === "1"){
            setInput1(target.value);
        }if(target.id === "2"){
            setInput2(target.value);
        }if(target.id === "3"){
            setInput3(target.value);
        }
        return
    }

    return(<div>
        <div class = "navigation">
			<div class = "container-fluid">
				<div class = "row">
					<div class = "col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center">
						<div class = "logo">
							<a href = "index.html"><img src = {logo} /></a>
						</div>
					</div>

					<div class = "col-xs-11 col-sm-11 col-md-11 col-lg-11 text-right">
						<div class = "primary-nav">
							<ul>
								<li><a href = "index.html">Home</a></li>
								<li><a href = "portfolio.html">Portfolio</a></li>
								<li><a href = "contact.html">Contact</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
        <div class = "main">
			<div class = "container-fluid">
				<div class = "row">
					<div class = "entry-banner text-center">
						<h1 id = "hello">Hello, I'm</h1>
						<h1 id = "name">XXXX</h1>
						<h1 id = "person-description">UI Developer. UX Desinger. Problem Solver.</h1>
					</div>
				</div>

				<div class = "row text-center">
					<div class = "banner-buttons">
						<div class = "col-sm-1 col-md-1 col-sm-offset-5 col-md-offset-5">
							<a class = "btn btn-default btn-border" href = "#about">Info</a>
						</div>

						<div class = "col-sm-1 col-md-1">
							<a class = "btn btn-default btn-border" href = "#projects">Portfolio</a>
						</div>
					</div>
				</div>
			</div>
		</div>
        <div class = "about" id="about">
			<div class = "container-fluid">
				<div class = "row">
					<div class = "col-sm-12 col-md-12 text-center">
						<div class = "about-header">
							<h1>About Me</h1>
						</div>
					</div>
				</div>

				<div class = "row">
					<div class = "col-sm-12 col-md-12 text-center">
						<div class = "about-header-quote">
							<h3>Sharing a little bit of my story...</h3>
						</div>
					</div>
				</div>

				<div class = "row">
					<div class = "about-general-description ">
						<div class = "col-sm-8 col-md-8 ">
							<h2>General Overview</h2>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
						</div>
					</div>
				</div>

				<div class = "row">
					<div class = "statistic-row">
					<div class = "about-statistic-description">
						<div class = "col-sm-8 col-md-8">
							<h2>Statistics</h2>
							<h5><em>And for those that don't fancy reading:</em></h5>
                            <div> </div>
							<p>Male, 200 years old.</p>
							<p>Five feet 110 inches</p>
							<p>Favorite fonts:Roboto </p>
							<p>Loves to learn new things</p>
	
						</div>
					</div>
					</div>
				</div>

				<div class = "row">
					<div class = "about-option-buttons">
						<div class = "col-sm-2 col-md-2">
							<a href = "#contact" class = "btn btn-default btn-black-border">Contact</a>
						</div>
					</div>
				</div>

			</div>
		</div>

        <div class = "summary">
			<div class = "container-fluid">
				<div class = "row">
					<div class = "development-summary">
						<div class = "col-sm-1 col-md-1">
							<div class = "development-img">
								<img class = "img-responsive" src = {pic1} />
							</div>
						</div>

						<div class = "col-sm-4 col-md-4">
							<div class = "development-description">
                                <Summary title ="Development and Design" para = "I aim to put my creativity to the test, designing and building unique, meaningful products for clients or merely for my own interests." />
							
							</div>
						</div>
					</div>

					<div class = "responsive-summary">
						<div class = "col-sm-1 col-md-1 col-sm-offset-2 col-md-offset-2">
							<div class = "responsive-img">
								<img class = "img-responsive" src = {pic2} />
							</div>
						</div>

						<div class = "col-sm-4 col-md-4">
							<div class = "responsive-description">
                                <Summary para = "Development and design isn't merely putting information on the site or preferred media outlet. I organize content and present information in an engaging fashion, driving new and unique layouts in tandem with novel solutions and cool animations." title="Responsive Layouts"/>
								
							</div>
						</div>
					</div>
				</div>

				<div class = "row">
					<div class = "ideas-summary">
						<div class = "col-sm-1 col-md-1">
							<div class = "idea-img">
								<img class = "img-responsive" src = {pic3}/>
							</div>
						</div>

						<div class = "col-sm-4 col-md-4">
							<div class = "idea-description">
                                <Summary para = "There are still many problems that exist in today's society, including laziness. Luckily, I hope to combat these issues by innovating, developing easy-to-use programs, solutions, or products." title = "Ideas and Solutions" />
							</div>
						</div>
					</div>

					<div class = "passion-summary">
						<div class = "col-sm-1 col-md-1 col-sm-offset-2 col-md-offset-2">
							<img class = "img-responsive" src = {pic4} />
						</div>

						<div class = "col-sm-4 col-md-4">
							<div class = "passion-description">
                                <Summary title = "Passion and Dedication" para = "With my profound interest and commitment to my field of study, my projects rarely go unfinished and my problems are never left unresolved."/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
        <div class = "projects" id="projects">
			<div class = "container-fluid">
				<div class = "row">
					<div class = "col-sm-12 col-md-12 text-center">
						<div class = "projects-header">
							<h1>Projects and Portfolio</h1>
						</div>
					</div>
				</div>

				<div class = "row">
					<div class = "col-sm-12 col-md-12 text-center">
						<div class = "projects-header-quote">
							<h3>Sharing my endeavors and passions...</h3>
						</div>
					</div>
				</div>

				<div class = "row">
					<div class = "col-sm-4 col-md-4 text-center">
						<div class = "luvtalk-project">
							<h3>LUV TALK Website</h3>
							<p>Website, created during my first internship, which utilized HTML, CSS, PHP, Ajax, Javascript/jQuery, and Wordpress. </p>
							<div class = "row">
								<div class = "col-sm-4 col-md-4 col-sm-offset-4 col-md-offset-4">
									<div class = "project-more-info">
										<a class = "btn btn-default btn-border" href = "#">More</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class = "col-sm-4 col-md-4 text-center">
						<div class = "personal-website-project">
							<h3>Personal Website</h3>
							<p>Enjoyable side project that was created to experiment with more HTML and CSS, but also provided an outlet to showcase my abilities and interests.</p>
							<div class = "row">
								<div class = "col-sm-4 col-md-4 col-sm-offset-4 col-md-offset-4">
									<div class = "project-more-info">
										<a class = "btn btn-default btn-border" href = "#">More</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class = "col-sm-4 col-md-4 text-center">
						<div class = "strike-zone-project">
							<h3>Strike Zone Analysis</h3>
							<p>Data analytics project completed during my time at the Illinois Math and Science Academy which studied the baseball strike zone based on the state of the game.</p>
							<div class = "row">
								<div class = "col-sm-4 col-md-4 col-sm-offset-4 col-md-offset-4">
									<div class = "project-more-info">
										<a class = "btn btn-default btn-border" href = "#">More</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class = "row">
					<div class = "col-sm-2 col-md-2 col-sm-offset-5 col-md-offset-5">
						<div class = "see-more-button">
							<a class = "btn btn-default btn-border" href = "#">More Projects</a>
						</div>
					</div>
				</div>
			</div>
		</div>
        <div class = "contact" id="contact">
			<div class = "container-fluid">
				<div class = "row">
					<div class = "col-sm-12 col-md-12 text-center">
						<div class = "contact-header">
							<h1>Contact</h1>
						</div>
					</div>
				</div>

				<div class = "row">
					<div class = "col-sm-12 col-md-12 text-center">
						<div class = "contact-header-quote">
							<h4>"XXXXX"</h4>
							<h4>-XXX</h4>
						</div>
					</div>
				</div>

				<div class = "row">
					<div class = "col-sm-6 col-md-6">
						<div class = "contact-instructions">
							<h2>Reaching out to me</h2>
							<p>Don't be afraid to contact me! I'm happy to answer any questions, provide more information, or just have a nice conversation! Fill out the form below to being reaching out to me. If you prefer another email client other than your default, which will appear after clicking the button and have all of the information you just entered, you can email me at XXXXX.</p>
							<div> </div>
                            <div> </div>
							<div> </div>
							<h2>Contact Information</h2>
							<p>XXXX</p>
							<p>XXXX</p>
							<p>(XXXX)-445-7747</p>
							<p>XXXXXX@gmail.com</p>
						</div>
					</div>

					<div class = "col-sm-6 col-md-6">
						<div class = "contact-form-body">
							<form>
								<div class = "row">
									<div class = "col-sm-6 col-md-6">
										<div class = "firstname">
											<h4>Full Name *</h4>
											<input type = "text" placeholder= "First Name" onChange = {e => changeHandler(e.target)} id = "1" value = {input1} />
										</div>
									</div>

									<div class = "col-sm-6 col-md-6">
										<div class = "lastname">
											<h4>Full Name *</h4>
											<input type = "text" placeholder= "Last Name" onChange = {e => changeHandler(e.target)} id = "2" value = {input2}/>
										</div>
									</div>
								</div>

								<div class = "row">
									<div class = "col-sm-12 col-md-12">
										<div class = "email">
											<h4>Email *</h4>
											<input type = "text" placeholder= "Email" onChange = {e => changeHandler(e.target)} id = "3" value = {input3}/>
										</div>
									</div>
								</div>

								<div class = "row">
									<div class = "col-sm-12 col-md-12">
										<div class = "message">
											<h4>Message *</h4>
											<textarea placeholder= "Message" onChange = {e => changeHandler(e.target)} id="4" value = {input4}></textarea>
										</div>
									</div>
								</div>

								<div class = "row">
									<div class = "col-sm-4 col-md-4 col-sm-offset-4 col-md-offset-4">
										<div class = "submit-contact">
											<a class = "btn btn-default btn-border" onClick={handleClick} >Submit</a>
                                            {!filled && <div className="red">All fields must be filled!</div>}
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
        <div class = "footer">
			<div class = "container-fluid">
				<div class = "row">
					<div class = "media-links">
						<div class = "col-sm-1 col-md-1 col-sm-offset-4 col-md-offset-4">
							<div class = "facebook">
								<a href = "#"><img class = "img-responsive" src = {pic5} /></a>
							</div>
						</div>

						<div class = "col-sm-1 col-md-1">
							<div class = "linkedin">
								<a href = "#"><img class = "img-responsive" src = {pic6} /></a>
							</div>
						</div>

						<div class = "col-sm-1 col-md-1">
							<div class = "pinterest">
								<a href = "#"><img class = "img-responsive" src = {pic7}/></a>
							</div>
						</div>

						<div class = "col-sm-1 col-md-1">
							<div class = "email-icon">
								<a href = "#"><img class = "img-responsive" src = {pic8} /></a>
							</div>
						</div>
					</div>
				</div>

				<div class = "row">
					<div class = "col-sm-6 col-md-6 text-right">
						<div class = "personal-contact phone">
							<h4>Phone: XXXXXX</h4>
						</div>
					</div>

					<div class = "col-sm-6 col-md-6 text-left">
						<div class = "personal-contact email-personal-contact">
							<h4>Email: XXXXX@gmail.com</h4>
						</div>
					</div>
				</div>

				<div class = "row">
					<div class = "col-sm-4 col-md-4 text-center">
						<div class = "company-information">
							<h3>XXXX</h3>
							<h4>Copyright &copy; 2021</h4>
							<h4>NY</h4>
						</div>
					</div>

					<div class = "col-sm-2 col-md-2 text-center">
						<div class = "home-footer">
							<h4><a href = "#">Home</a></h4>
						</div>
					</div>

					<div class = "col-sm-2 col-md-2 text-center">
						<div class = "portfolio-footer">
							<h4><a href = "#">Portfolio</a></h4>
							<ul>
								<li><a href = "#">Project1</a></li>
								<li><a href = "#">Project2</a></li>
								<li><a href = "#">Project3</a></li>
								<li><a href = "#">See All</a></li>
							</ul>
						</div>
					</div>

					<div class = "col-sm-2 col-md-2 text-center">
						<div class = "resume-footer">
							<h4><a href = "#">Resume</a></h4>
							<ul>
								<li><a href = "#">Download</a></li>
							</ul>
						</div>
					</div>

					<div class = "col-sm-2 col-md-2 text-center">
						<div class = "contact-footer">
							<h4><a href = "#">Contact</a></h4>
						</div>
					</div>
				</div>
			</div>
		</div>
    </div>
    
    
    )
}
export default Scroll;