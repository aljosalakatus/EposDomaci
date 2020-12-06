

  function posalji(){

    var poruka = document.getElementById('porukaa').value;
    var ime=document.getElementById('imee').value;
    var br=document.getElementById('broj-telefona').value;
    var email=document.getElementById('email').value;
    var provera=/^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
    var provera2=/^\b[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}\b$/i

    if(ime == ""){
      alert('Unesite Vaše ime i prezime');
      
      /* document.getElementById('broj-telefona').value=br;
      document.getElementById('email').value=email;
      document.getElementById('porukaa').value=poruka; */
    }

    else if(br == ""){
      alert('Unesite Vaš broj telefona');
    }


    else if(poruka.length < 10){
        alert('Poruka mora imati barem 10 slova!'); 
    }
    
    if(ime !== "" && br !== "" && poruka.length >= 10 && provera.test(email) && provera2.test(br)){
      alert('Informacije su unete. Hvala na interesovanju!');
    }

  }

 