        let num ;
        let getWrapPhoto = document.querySelector(".wrapPhoto");
        let getPhotoBox = document.getElementsByClassName("photoBox");
        
        let getLi = document.querySelectorAll(".wrapPhoto>li");
    
        // let getBody = document.querySelector(body);
        // for(i=0; i<getPhotoBox.length; i++){
        //    getPhotoBox[i].dataset.photoNum = i;
           
        // }
        // console.log(getPhotoChange)
        let modalOpen = false;
        getWrapPhoto.addEventListener("click", function(e){
            // console.log(e.target.nodeName);
            if(modalOpen==true||e.target.nodeName=="UL"){return}
            if(modalOpen==true||e.target.nodeName=="LI"){return}
            for(let i=0;i<getPhotoBox.length; i++){
                if(e.target.parentNode==getPhotoBox[i]){
                     num=i;
                     break;
                };
            }
         
            let copyNode = getPhotoBox[num].cloneNode(true);
            copyNode.classList.add("photoChange");
            // console.log(copyNode);
            getBody.appendChild(copyNode);
            let getPhotoChange = document.getElementsByClassName("photoChange");
            var styleSheets = document.styleSheets[0];  //獲取樣式表引用
            // console.log(styleSheets);
            var index = styleSheets.length;  //獲取樣式表中包含樣式的個數
            styleSheets.insertRule(`body::before{display: block;position: fixed;
                content: "";
                top: 0;
                left: 0;
                background-color: rgba(0, 0, 0, 0.651);
                width: 100%;
                height: 100%;
                z-index: 100;}`, index);

            window.setTimeout(function(){
                getPhotoChange[0].style.width = "80vw";
                modalOpen=true;
                // console.log(getPhotoChange[0]);
                // console.log("1");
            }, 1)
        },true);
        document.addEventListener("click", e => {
            console.log(modalOpen);
            console.log(e.target);
            if(modalOpen==true){
                var styleSheets = document.styleSheets[0];  //獲取樣式表引用
                
                console.log(styleSheets);
                styleSheets.deleteRule(0);
                let t  =  document.getElementsByClassName("photoChange");
                // t[0]
                t[0].innerHTML = "";
                var parentObj = t[0].parentNode;
                parentObj.removeChild(t[0]);
                modalOpen=false;
            }

          });