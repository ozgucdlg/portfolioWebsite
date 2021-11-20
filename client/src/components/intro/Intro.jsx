import "./intro.scss"

export default function Intro() {
    return (
        <div className="intro"  id="intro">

            <div className="left">
                <div className="imageContainer">
                    <img src="assets/oguchi.png" alt="" />
                </div>
                
            </div>  
            
            <div className="right">
                <div className="wrapper">
                   <h1> Hi there, I'm </h1>
                  <h2> Ozguc Dalga</h2>
                    <h3> Full Stack & <span>M.E.R.N Stack </span></h3>
                </div>
                <a href="#portfolio" >
                   <center> <img src="assets/down.png"></img></center>
                </a>
                
                </div>  
           
            
        </div>
    )
}
