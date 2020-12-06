

  function posalji(){

    let poruka = document.getElementById('porukaa').value;
    let ime=document.getElementById('imee').value;
    let br=document.getElementById('broj-telefona').value;
    let email=document.getElementById('email').value;
    let provera=/^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
    let provera2=/^\b[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}\b$/i

    if(ime == ""){
      alert('Unesite Vaše ime i prezime');
      
    }

    if(br == ""){
      alert('Unesite Vaš broj telefona');
    }


    if(poruka.length < 10){
        alert('Poruka mora imati barem 10 slova!'); 
    }
    
    if(ime !== "" && br !== "" && poruka.length >= 10 && provera.test(email) && provera2.test(br)){
      alert('Informacije su unete. Hvala na interesovanju!');
    }

  }

 