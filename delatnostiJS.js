function darkMode() {
    
    let r=confirm('Zelite li da predjete u Tamni režim?');
    
  
  if (r == true) {
    document.body.classList.toggle("dark-mode");
   
    document.getElementById("dugme1").style.display="none"
  }
    
    else{
        return;
    }
   
    
    
  }

  function handleButtonClick(){
        let btn = document.getElementById("btn1")
        btn.style.display="none"
           
    }
  

