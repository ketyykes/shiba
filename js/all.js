    let getHam = document.querySelector(".ham");
    let getBody = document.querySelector("body");
    let getLeaveMenu = document.querySelector(".leave-menu");
    getHam.addEventListener("click", openMenu);
    getLeaveMenu.addEventListener("click", openMenu);
    function openMenu() {
        if(getBody.className!=="menu-show")   
        {
            let att = document.createAttribute("class");
            att.value = "menu-show";
            getBody.setAttributeNode(att);
        }
        else {
            getBody.removeAttribute("class");
        }
    }




    
      

        
