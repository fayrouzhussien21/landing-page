/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let sec1 =document.getElementById("section1");
let sec2 = document.getElementById("section2");
let sec3 = document.getElementById("section3");
let sec4 = document.getElementById("section4");
const sections = Array.from(document.getElementsByTagName("section"));

/**
 * build nav bar
 */
 document.addEventListener("DOMContentLoaded", function(event) { 
   /**create un ordered list and give it an id
   */
    let navl_ist = document.createElement('ul');
    navl_ist.setAttribute("id","seclist");
    var count=0;
    for(section of sections){
      count+=1;
      var id="#section"+count;
      var text="section"+count;
      
      const listItem = document.createElement('li');
      var anchor=document.createElement('a');
      anchor.classList.add("nav-bar");
      anchor.setAttribute("data-link",id);
      anchor.innerHTML=text;
      listItem.appendChild(anchor);
      navl_ist.appendChild(listItem);
    }
    document.querySelector(".navbar").append(navl_ist);

});
 

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
 * 
*/



// Add class 'active' to section when near top of viewport
//check if the currenet window within any bounding box of all sections
document.addEventListener("scroll",function isInViewport(element) {
  const rect1 = sec1.getBoundingClientRect();//get the size of each sections boundingbox
  const rect2 = sec2.getBoundingClientRect();
  const rect3 = sec3.getBoundingClientRect();
  const rect4= sec4.getBoundingClientRect();
  if( rect1.y>=0&&rect1.y< rect2.y&&rect1.y< rect3.y&&rect1.y< rect4.y)
      {
        
        document.getElementById("section2").classList.remove("active") ;
        document.getElementById("section3").classList.remove("active") ;
        document.getElementById("section4").classList.remove("active") ;
        document.getElementById("section1").classList.add("active") ;
        
      }
      else if(rect2.y>=0&&rect2.y< rect3.y&&rect2.y< rect4.y)
        {
          
          document.getElementById("section1").classList.remove("active") ;
          document.getElementById("section3").classList.remove("active") ;
          document.getElementById("section4").classList.remove("active") ;
          document.getElementById("section2").classList.add("active") ;
         
        }
        else if(rect3.y>=0&&rect3.y< rect4.y)
        {
          
          document.getElementById("section2").classList.remove("active") ;
          document.getElementById("section1").classList.remove("active") ;
          document.getElementById("section4").classList.remove("active") ;
          document.getElementById("section3").classList.add("active") ;
         
        }
        else if(rect4.y>=0)
        {
         
          document.getElementById("section2").classList.remove("active") ;
          document.getElementById("section3").classList.remove("active") ;
          document.getElementById("section1").classList.remove("active") ;
          document.getElementById("section4").classList.add("active") ;
         
        }
      
  
});
		



// Scroll to anchor ID using scrollTO event
//an button to scroll back to the start of the page
function Scroll_Back() {
    window.scrollTo(0, 0);
  }
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 



// Scroll to section on link click
//wait until all the code to be read by using onload function
window.onload = function () {
  //select all sections links with the same class 
const links=document.querySelectorAll(".nav-bar");
 links.forEach((item)=>
{
  //scroll to an appropriate section when click on its navigation bar
item.addEventListener('click',(e)=>
{
   let l= document.querySelector(item.getAttribute("data-link"));
   e.preventDefault();
   l.scrollIntoView({behavior:"smooth",block:"start"});
})
});


// Set sections as active when click on it

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {

    var activesection = document.querySelector(".active");
    
    if( activesection === null) //if it null 
      { 
      
      }
    else
    {
      document.querySelector('.active').classList.remove('active');

    }
      
      this.classList.add('active');
    
 
  });


}
};
