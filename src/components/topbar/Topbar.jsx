import "./topbar.scss"
import {Person,Mail} from "@material-ui/icons"

export default function Topbar({menuOpen,setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Derek Pruski
          </a>
          <div className="itemContainer">
            <Person className="icon" />
                <span>+1-585-861-0522</span> 
              </div>
              <div className="itemContainer">
                <Mail className="icon"/>
                <span>dmp3872@rit.edu</span>
                </div>
                <div className="itemContainer">
                <img src="assests/git6.png" alt="" />
                <span>https://github.com/dmp3872</span>
                </div>
                <div className="itemContainer">
                <img src="assests/link.png" alt="" />
                <span>https://www.linkedin.com/in/derekpruski/</span>
                </div>
              </div>
            <div className="right">
                <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
                  <span> className= "line1"</span>
                  <span> className= "line2"</span>
                  <span> className= "line3"</span>
                </div>
           </div>
        </div>
    </div>
  )
}
