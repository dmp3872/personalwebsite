import { useState } from "react";
import "./works.scss"

export default function Works() {

  const [currentslide,setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      icon: "./assests/icon3.png",
      title: "Java",
      desc:
        "Expirence with Object Oriented back-end work, Courses: Computer Science II, Intro to Java",
      img:
      "./assests/java.png",
    },
    {
      id: "2",
      icon: "./assests/icon3.png",
      title: "Python",
      desc:
        "Backend expirence with Linked Lists, Nodes, Arrays, Trees, ext. {'\n'}Course: Computer Science I",
      img:
        "./assests/python2.png",
    },
    {
      id: "3",
      icon: "./assests/icon3.png",
      title: "C++",
      desc:
        "Basic back-end expience w/ vectors, Arrays, sorting algorithms, ext. Course: Computational Problem Solving I",
      img:
      "./assests/c++.png",
    },
  ];

  const handleClick = (way)=> {
    way === "left" ? setCurrentSlide(currentslide > 0 ? currentslide-1: 2):
    setCurrentSlide(currentslide < data.length - 1 ? currentslide + 1 : 0)
  }

  return (
    <div className="works" id="works">
      <h1>Skills</h1>
        <div className="slider" style={{transform:`translateX(-${currentslide * 100}vw)` }}>
          {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left"> 
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={d.icon} alt=""/>
                  </div>
                  <h2>{d.title}</h2>
                  <p>
                  {d.desc}
                  </p>
                  <span></span>
                  </div>
                </div>
              <div className="right">
                <img 
                src={d.img}
                alt="" />
              </div>
            </div>
          </div>
          ))}
        </div>
        <img src="assests/arrow.png" className="arrow left" alt="" onClick={()=> handleClick("left")} />
        <img src="assests/arrow.png" className="arrow right" alt="" onClick={()=> handleClick()}/>
    </div>
  )
}
