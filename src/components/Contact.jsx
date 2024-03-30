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
    markers: true
}});
   tl.to("#top",{
    top: "-100%", 
    ease:"power1.in"
 },'a') 

/*  
.to("#bottom",{
  bottom: "-50%",
  ease:"power1.in"

},'a') 
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
      <div id="main" >
        <div id="top" className="bg-gray-300">
          <h1 id="top-h1">CONTACT</h1>
        </div>
        <div id="center">
          <div className="content flex flex-col justify-center items-center">

            <h3 className="text-8xl text-title font-semibold text-gray-200">
              Lets Talk
            </h3>
            <p className="font-normal text-sm text-center max-w-xl text-gray-400 block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium obcaecati necessitatibus consectetur natus minus libero fuga quidem iure eaque pariatur ex praesentium delectus totam rerum non quos, deserunt explicabo repellat?
            </p>
          </div>
        </div>
       
      </div>
     
    </>
  );
};
export default Contact;
