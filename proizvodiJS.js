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
 var brojac=0;
  function promeniSliku(){
      var str=document.getElementById("slika1").src;
      console.log(str);
      if( str== "file:///D:/domaciEposSajt/EposDomacii/images/plazma.jpg"){

        document.getElementById("slika1").src = "images/savijanje.jpg";

        document.getElementById("text1").innerHTML =" Raspolažemo sa 3 CNC abkant prese raznih dužina i snaga./n4100 mm od 350 t, 4800 mm od 110 t, 2000 mm od 8t./nTakođe posedujemo 3 hidraulične multifunkcionalne probijačice i 2 excentar prese."
     
    }
      if(str == "file:///D:/domaciEposSajt/EposDomacii/images/savijanje.jpg"){
        document.getElementById("slika1").src = "images/robot.jpg";
        document.getElementById("text1").innerHTML ="Raspolažemo sa 20 varilačkih radnih mesta i robotom za varenje.\nPosedujemo sertifikat za varenje EN ISO 3834-2, \nizdat od instituta za varenje u Sloveniji."

      }

      if(str == "file:///D:/domaciEposSajt/EposDomacii/images/robot.jpg"){
        document.getElementById("slika1").src = "images/strug.jpg";
        document.getElementById("text1").innerHTML ="Vršimo obradu raznih materijala na CNC strugovima i CNC glodalicama."

      }

      if(str == "file:///D:/domaciEposSajt/EposDomacii/images/strug.jpg"){
        document.getElementById("slika1").src = "images/plazma.jpg";
        document.getElementById("text1").innerHTML =" Raspoložive mašine:    \nFiberlaser snage od 3kW; max dimenzije table 3000 x 1500mm\nCNC plazma 450A dimenzija table 2000x6000mm\nCNC makaze širine 3100 mm dužine i debljine sečenja do 16 mm\nCNC makaze širine 4100 mm dužine i debljine sečenja do 6 mm \nCNC testere za sečenje profila cevi i punih materijala"

      }


  }