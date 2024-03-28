import { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {

 useLayoutEffect(()=> {
  new ScrollTrigger({});
  const tl = gsap.timeline({scrollTrigger:{
    trigger:"#main",
    start:"97% 97%",
    end:"5% 40%",
    scrub:2, 
    pin:true,  
}});
   tl.to("#top",{
    top: "-50%", 
    ease:"power1.in"
 },'a') 
 .to("#bottom",{
  bottom: "-50%",
  ease:"power1.in"

},'a') 
/*  

.to(".content",{
 delay: 5,
 marginTop: "0%"
},">")  

.to("#center",{
  height: "100vh",
  delay:2
},'a')  */ 


  },[])

  return (
    <>
      <div id="main">
        <div id="top">
          <h1 id="top-h1">GRAVITY</h1>
        </div>
        <div id="center">
          <div class="content">
            <h4>GRAVITY</h4>
            <h3>
              <i>Browse</i> 
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium obcaecati necessitatibus consectetur natus minus libero fuga quidem iure eaque pariatur ex praesentium delectus totam rerum non quos, deserunt explicabo repellat?
              </p>
            </h3>
            <h2>(17)</h2>
          </div>
        </div>
        <div id="bottom">
          <h1 id="bottom-h1">GRAVITY</h1>
        </div>
      </div>
     
    </>
  );
};
export default Contact;
