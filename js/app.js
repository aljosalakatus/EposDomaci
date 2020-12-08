
function podaci() {
   var int1 = document.getElementById("kolicina1").value;
   
    var str1= document.getElementById("proizvod1").value;

    var str2 = document.getElementById("adresa1").value;
    

    if(str2 == "") {
        alert("Unesite Adresu!");
    }

   else if(str1.includes("zupčanici")) {
     

       if(int1>0 & int1< 1000) {
       alert("Proizvod je dostupan");
       var cena = 2*int1;
       document.getElementById("cena1").value=cena + "€";
       document.getElementById("rok1").value="do 5 dana";
       }
       else {
        alert("Proizvod nije dostupan u toj kolicini");
        document.getElementById("cena1").value="";
       document.getElementById("rok1").value="";
       }
   }

   else if(str1.includes("lančanici")) {
    if(int1>0 & int1< 1000) {
    alert("Proizvod je dostupan");
    var cena = 3*int1;
    document.getElementById("cena1").value=cena + "€";
    document.getElementById("rok1").value="5-7 dana";
    }
    else {
     alert("Proizvod nije dostupan u toj kolicini");
     document.getElementById("cena1").value="";
    document.getElementById("rok1").value="";
    }
   }
    else if(str1.includes("osovine")) {
        if(int1>0 & int1< 300) {
        alert("Proizvod je dostupan");
        var cena = 5*int1;
        document.getElementById("cena1").value=cena + "€";
        document.getElementById("rok1").value="8-10 dana";
        }
        else {
         alert("Proizvod nije dostupan u toj kolicini");
         document.getElementById("cena1").value="";
        document.getElementById("rok1").value="";
        }
}

else if(str1.includes("savijeni_limovi")) {
    if(int1>0 & int1< 100) {
    alert("Proizvod je dostupan");
    var cena = 15*int1;
    document.getElementById("cena1").value=cena + "€";
    document.getElementById("rok1").value="7-10 dana";
    }
    else {
     alert("Proizvod nije dostupan u toj kolicini");
     document.getElementById("cena1").value="";
    document.getElementById("rok1").value="";
    }
}

else if(str1.includes("ograde")) {
    if(int1>0 & int1< 10) {
    alert("Proizvod je dostupan");
    var cena = 300*int1;
    document.getElementById("cena1").value=cena + "€";
    document.getElementById("rok1").value="do 21 dan";
    }
    else {
     alert("Proizvod nije dostupan u toj kolicini");
     document.getElementById("cena1").value="";
    document.getElementById("rok1").value="";
    }
}

else if(str1.includes("police")) {
    if(int1>0 & int1< 50) {
    alert("Proizvod je dostupan");
    var cena = 30*int1;
    document.getElementById("cena1").value=cena + "€";
    document.getElementById("rok1").value="do 14 dana";
    }
    else {
     alert("Proizvod nije dostupan u toj kolicini");
     document.getElementById("cena1").value="";
    document.getElementById("rok1").value="";
    }
}

else if(str1.includes("stolovi")) {
    if(int1>0 & int1< 20) {
    alert("Proizvod je dostupan");
    var cena = 50*int1;
    document.getElementById("cena1").value=cena + "€";
    document.getElementById("rok1").value="do 14 dana";
    }
    else {
     alert("Proizvod nije dostupan u toj kolicini");
     document.getElementById("cena1").value="";
    document.getElementById("rok1").value="";
    }
}

}


