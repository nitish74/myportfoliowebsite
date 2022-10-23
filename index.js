var count=0;

document.getElementsByClassName("btn-div")[0].addEventListener("click",function(){

    
    if(count%2==0){

       
       document.getElementsByClassName("nav-items-div-2")[0].style.left="0";


    }

    else if(count%2!=0){
        
        
        
       document.getElementsByClassName("nav-items-div-2")[0].style.left="-100%";
      

        
 }
    

   count++;
   
})
