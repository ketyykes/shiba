let getPhotoBox = document.getElementsByClassName("wrapPhoto")[0];
const getFixed = document.querySelector(".fixed");
const getClickedBox = document.querySelector(".clickedBox");
getPhotoBox.addEventListener("click",function(e){
    console.log("get");
    if(e.target.nodeName=="LI"){return}
    if(e.target.nodeName=="UL"){return}
    const obj ={};
    obj.src = e.target.parentNode.childNodes[1].getAttribute("src");
    obj.h2 = e.target.parentNode.childNodes[3].textContent;
    obj.p = e.target.parentNode.childNodes[5].textContent;
    getClickedBox.childNodes[1].setAttribute("src", obj.src);
    getClickedBox.childNodes[3].textContent = ("src", obj.h2);
    getClickedBox.childNodes[5].textContent = ("src", obj.p);
    getFixed.style.display = "block";
});

getFixed.addEventListener("click", function() {
    if( getFixed.style.display == "block"){
        getFixed.style.display ="none";
    }
})














// var el = document.querySelector(".wrapPhoto");
// console.log(el);
// el.addEventListener("click", function (e) {

//     console.log(e);
// }, false);
