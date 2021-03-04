const menuList = ["Works", "Bio"]
function loadHeader( pageName ) {
    let headerLeft = document.createElement("div");
    headerLeft.id = "header-left";
    headerLeft.classList.add("menu-wrapper");

    let logo = pageName ? '<img src = "../images/logo.png" id = "logo"/>' : '<img src = "images/logo.png" id = "logo"/>';

    headerLeft.innerHTML = pageName ? '<a href = "../index.html">' + logo + '</a>' : '<a href = "./index.html">' + logo + '</a>';

    let headerRight = document.createElement("div");
    headerRight.classList.add("menu-wrapper");
    headerRight.id = "header-right";
    
    let navIcon = document.createElement("div");
    navIcon.classList.add("nav-icon");

    for(let j = 0; j < 4 ; j++) {
        let bar = document.createElement("span");
        navIcon.appendChild(bar);
    }
    let menuWrap = document.createElement("div");
    menuWrap.classList.add("mrl-grid");
    menuWrap.classList.add("menu-wrap");

    navIcon.addEventListener("click", function(){
        if(navIcon.classList.contains("active")){
            navIcon.classList.remove("active");
            menuWrap.classList.remove("active");
            menuWrap.classList.remove("wrapper-vertical");
            setTimeout(function(){menuWrap.style.display = "none"}, 250);
            
         }else{
            menuWrap.style.display = "flex";
            setTimeout(function(){
             navIcon.classList.add("active");
            menuWrap.classList.add("active");
            menuWrap.classList.add("wrapper-vertical");
            }, 0)
        } 
    })

   
    for(let i = 0; i < menuList.length; i++) {
        let menubtn = document.createElement("a");
        menubtn.classList.add("menu");
        if(menuList[i] === pageName){
            menubtn.classList.add("active");
        }
        menubtn.href = pageName ? "../" + menuList[i] + "/" + menuList[i] + ".html" : "./" + menuList[i] + "/" + menuList[i] + ".html";
        menubtn.innerText = menuList[i].slice(0, 1).toUpperCase() + menuList[i].slice(1);
        menuWrap.appendChild(menubtn);
    }
    headerRight.appendChild(navIcon);
    headerRight.appendChild(menuWrap);

    document.getElementById("header").appendChild(headerLeft);
    document.getElementById("header").appendChild(headerRight);
}