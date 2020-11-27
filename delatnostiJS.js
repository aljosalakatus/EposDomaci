function darkMode() {
    
    let r=confirm('Želite li da predjete u tamni režim?');
    
  
  if (r == true) {
     
    document.body.style.backgroundColor="rgb(13, 1, 29)";
    document.getElementById("header").style.backgroundColor="rgb(13, 1, 29)";
    document.getElementById("dugme1").style.display="none"
    document.getElementById("dugme2").style.display="block"
  }
    
    else{
        return;
    }
   
    
    
  }

 function whiteMode(){
    let r=confirm('Želite li da predjete u svetli režim?');
    
  
    if (r == true) {
      document.body.style.backgroundColor="white";
      document.getElementById("header").style.backgroundColor="white";
      document.getElementById("dugme2").style.display="none"
      document.getElementById("dugme1").style.display="block"
    }
      
      else{
          return;
      }

 }
  

