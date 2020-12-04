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

  const name=document.getElementById('ime')
  //let password = document.getElementById('lozinka').value
  console.log(name)
  // const form = document.getElementById('form')
  // console.log(form.password)

  // const errorElement = document.getElementById('error')
  // form.addEventListener('submit', (e) => {
  //   let messeges = []
  //   if ( name.value === '' || name.value==null){
  //     messages.push('Popuniti polje ime')
  //   }
  //   if(password.value.length<=6){
  //     //messeges.push('Lozinka mora da ima više od 6 karaktera')
  //     let aler= alert("lozinka mora biti duza od 6")
  //   }
  //   if(password.value.length<=15){
  //     messeges.push('Lozinka mora da ima manje od 15 karaktera')
  //   }
  //   if (password.value === 'lozinka'){
  //     messages.push('Lozinka ne sme biti \'lozinka\' ')
  //   }
  //   if(messages.length > 0){
  //     e.preventDefault()
  //     errorElement.innerText=messeges.join(', ')
  //   }
  //   e.preventDefault()
  // })