
var count=0;

document.getElementsByClassName("btn-div")[0].addEventListener("click",function(){

    
    if(count%2==0){

        document.getElementsByClassName("nav-items-div")[0].style.left="0";
       // document.getElementsByClassName("nav-bar")[0].style.height="100vh";
       document.getElementsByClassName("nav-bar")[0].style.zIndex="999";
    


    }

    else if(count%2!=0){
        
        
        document.getElementsByClassName("nav-items-div")[0].style.left="-100%";
       // document.getElementsByClassName("nav-bar")[0].style.height="10vh";
       document.getElementsByClassName("nav-bar")[0].style.zIndex="0";
       
      

        
 }
    

   count++;
   
})
