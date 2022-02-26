import "./testimonials.scss"

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Santinos Pizzaria",
      title: "Cook/ Order Taker",
      img:
        "assests/Santinos.avif",
      icon: "assets/twitter.png",
      desc:
        "Assisted costumers with orders in-person and over the phone orders. Followed procedures for food preparation, handling, and inventory stocking."
    },
    {
      id: 2,
      name: "Proguides",
      title: "Online Coach",
      img:
        "assests/proguides.png",
      icon: "assets/youtube.png",
      desc:
        "Worked 1 on 1 with clients through discord to help them improve upon in game stategies, physical mechanics such as aim, and overall skill.",
      featured: true,
    },
    {
      id: 3,
      name: "Youtube Channel",
      title: "Youtuber",
      img:
        "assests/yt.jpg",
      icon: "assets/linkedin.png",
      desc:
        "Grew a youtube channel to 2.6k subscribers, learning editing, script writing, and audience engagement skills.",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
        <h1>Work Expirence</h1>
        <div className="container">
          {data.map((d)=>(
          <div className= {d.featured ? "card featured": "card" }>
            <div className="top">
              <img src="assests/work.png" className = "left" alt="" />
              <img
              className = "user"
              src={d.img}  
              alt="" />
              <img 
              className="right"
              src={d.icon}
              alt="" />
            </div>
            <div className="center">
              {d.desc}
              </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
          ))}
        </div>
        </div>
  )
}
