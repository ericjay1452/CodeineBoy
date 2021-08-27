// All my html variables;

const Bug = document.querySelector("#Bug");
const burgerLine = document.querySelector(".burgerLine");
const listWrapper = document.querySelector(".listWrapper");
const mobileUl = document.querySelector(".mobileUl");
const mobileLists = document.querySelectorAll(".mobileList");
const panels = document.querySelectorAll(".panel");
const mobileListItems = document.querySelectorAll(".mobileListItem");
const fixedSearch = document.querySelector(".mobileAnchor");
const mobileSearch = document.querySelector(".mobileSearch");


// EventListener for my Bug (Hamburger);
Bug.addEventListener("click", hamburgerEffect)

// extending my listWrapper to 100% on mouseover
function move() {
    if (listWrapper.classList.contains("wide") ) {
        listWrapper.classList.remove("wide");
        for (let k = 0; k < panels.length; k++) {
            panels[k].style.display = "none";
            }
    }
}

// hamburger function
function hamburgerEffect() {
let index;
burgerLine.classList.toggle("slideIn");

  if (listWrapper.classList.contains("extendWidth") ) {
      listWrapper.classList.remove("extendWidth");
      mobileUl.classList.remove("extendWidth");
      listWrapper.classList.contains("wide")
      
    // Loops through all my mobileList on Mouseover event
    for (index = 0; index < mobileLists.length; index++) {
        mobileLists[index].addEventListener("mouseover",  move())
        
    }
  }

  else {
      listWrapper.classList.add("extendWidth");
      mobileUl.classList.add("extendWidth");
      
      for (index = 0; index < mobileLists.length; index++) {
          mobileLists[index].addEventListener("mouseover", ()=>{
            listWrapper.classList.add("wide");
            for (let k = 0; k < panels.length; k++) {
                panels[k].style.display = "inline-block";
                   }
          })
          
      }
  }

}



