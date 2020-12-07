function darkMode() {
    
    let r=confirm('Želite li da predjete u tamni režim?');
    
  
  if (r == true) {
     
    document.body.style.backgroundColor="rgb(13, 1, 29)";
    document.getElementById("header").style.backgroundColor="rgb(13, 1, 29)";
    document.getElementById("dugme1").style.display="none"
    document.getElementById("dugme2").style.display="block"
    console.log("asdads")
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
  let nizUsername = [];
  let nizLozinka = [];

 function login(){
   
   
   let ime=document.getElementById('ime').value;
   let lozinka=document.getElementById('lozinka').value;
   
   if(nizUsername.includes(ime) || nizLozinka.includes(lozinka)){
     alert("Ime ili lozinka vec postoje u bazi");
   }
   else if(ime==null || ime.length<=5 || lozinka==null || lozinka.length<=5){
    alert("Ime ili lozinka moraju biti duzi od 5 karaktera");

   }
   else {
     alert("Uspesno uneto ime i lozinka")
     nizUsername.push(ime);
     nizLozinka.push(lozinka);
     document.getElementById('ime').value="";
     document.getElementById('lozinka').value="";

   }
   
   
   console.log(nizUsername)
   
   console.log(nizLozinka)


   

   

 }



