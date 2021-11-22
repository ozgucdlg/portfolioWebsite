import "./works.scss"
import {useState} from 'react';



export default function Works() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data= [ 
        {
            id: 0,
            title: "Content Social Media App",
            img:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU",
          },
          {
            id: 1,
            title: "Content Rampa UI Design",
            img:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU",
          },
          {
            id: 2,
            title: "Content E-commerce Web Design",
            img:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU",
          },

         
    ];

    const handleClick = (way) =>{

        way === "left" 
        ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2 ) 
        : setCurrentSlide(currentSlide < data.length -1 ? currentSlide + 1 : 0 );
    }


    return (
        <div className="works"  id="works">

            <div className="slider"   style={{transform:`translateX( -${currentSlide * 100}vw)` }} >
               
                {data.map((d) => ( 
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt="" />
                                </div>
                                <h2>{d.title} </h2>
                                <p>
                                   {d.description}
                                    
                                </p>
                                <span>Projects</span>
                            </div>
                        </div>

                        <div className="right">
                            <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930" alt="" />
                        </div>
                    </div>
                       
                </div>  ))} 
            </div>  
            <img src="assets/arrow.png" className="arrow left" alt=""  onClick={() => handleClick("left")} />      
            <img src="assets/arrow.png" className="arrow right" alt=""  onClick={() => handleClick()} />      
        </div>
    );
}
