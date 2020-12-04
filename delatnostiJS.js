function darkMode() {
    
  let r=confirm('Želite li da predjete u tamni režim?');
  

if (r == true) {
   
  document.body.style.backgroundColor="rgb(13, 1, 29)";
  document.getElementById("header").style.backgroundColor="rgb(13, 1, 29)";
  document.getElementById("dugme1").style.display="none"
  document.getElementById("dugme2").style.display="block"
  document.getElementById("dugme3").style.backgroundColor="transparent";
  document.getElementById("dugme4").style.backgroundColor="transparent";
  document.getElementById("textDiv").style.backgroundColor="#0c2838";
  // document.getElementById("textDiv").style.color="#3b9cd6";
  document.getElementById("naslov").style.color="white";


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
  document.getElementById("dugme4").style.backgroundColor="#3b9cd6";
  document.getElementById("dugme3").style.backgroundColor="#3b9cd6";
  document.getElementById("textDiv").style.backgroundColor="#3b9cd6";
  document.getElementById("naslov").style.color="black";



  }
    
    else{
        return;
    }

}

function promeniSliku(){
    var str=document.getElementById("slika1").src;
    
    if( str.includes("images/plazma.jpg")){

      document.getElementById("slika1").src = "images/savijanje.jpg";

      document.getElementById("text1").innerHTML ="Raspolažemo sa 3 CNC abkant prese raznih dužina i snaga.4100 mm od 350 t, 4800 mm od 110 t, 2000 mm od 8t./nTakođe posedujemo 3 hidraulične multifunkcionalne probijačice i 2 excentar prese."
      /* document.getElementById("naslof").innerHTML ="Savijanje limova"; */
      document.getElementById("dugme3").disabled=false;
      document.getElementById("naslov").innerHTML ="Savijanje limova";
      
    }
    if(str.includes("images/savijanje.jpg")){
      document.getElementById("slika1").src = "images/robot.jpg";
      document.getElementById("text1").innerHTML ="Raspolažemo sa 20 varilačkih radnih mesta i robotom za varenje.\nPosedujemo sertifikat za varenje EN ISO 3834-2, \nizdat od instituta za varenje u Sloveniji."
      /* document.getElementById("naslof").innerHTML ="Varenje"; */
      document.getElementById("naslov").innerHTML ="Varenje";
   
    }

    if(str.includes("robot")){
      document.getElementById("slika1").src = "images/strug.jpg";
      document.getElementById("text1").innerHTML ="Vršimo obradu raznih materijala na CNC strugovima i CNC glodalicama."
      /* document.getElementById("naslof").innerHTML ="Mašinska obrada"; */
      document.getElementById("naslov").innerHTML ="Mašinska obrada";
      
      document.getElementById("dugme4").disabled=true;

    }

}

function promeniSlikuUnazad(){
  var str=document.getElementById("slika1").src;

  if(str.includes("strug")){
    document.getElementById("slika1").src = "images/robot.jpg";
    document.getElementById("text1").innerHTML ="Raspolažemo sa 20 varilačkih radnih mesta i robotom za varenje.Posedujemo sertifikat za varenje EN ISO 3834-2, izdat od instituta za varenje u Sloveniji."
    document.getElementById("dugme4").disabled=false;
    /* document.getElementById("naslof").innerHTML ="Varenje"; */
    document.getElementById("naslov").innerHTML ="Varenje";
    


  }

  if(str.includes("robot")){
    document.getElementById("slika1").src = "images/savijanje.jpg";
    document.getElementById("text1").innerHTML ="Raspolažemo sa 3 CNC abkant prese raznih dužina i snaga.\n4100 mm od 350 t, 4800 mm od 110 t, 2000 mm od 8t.\nTakođe posedujemo 3 hidraulične multifunkcionalne probijačice i 2 excentar prese."
    /* document.getElementById("naslof").innerHTML ="Savijanje limova" */
    document.getElementById("naslov").innerHTML ="Savijanje limova"
    

  }
  if(str.includes("images/savijanje.jpg")){
    document.getElementById("slika1").src = "images/plazma.jpg";
    document.getElementById("dugme3").disabled=true;
    document.getElementById("text1").innerHTML ="Raspoložive mašine:    \nFiberlaser snage od 3kW; max dimenzije table 3000 x 1500mm\nCNC plazma 450A dimenzija table 2000x6000mm\nCNC makaze širine 3100 mm dužine i debljine sečenja do 16 mm\nCNC makaze širine 4100 mm dužine i debljine sečenja do 6 mm \nCNC testere za sečenje profila cevi i punih materijala"
    /* document.getElementById("naslof").innerHTML ="CNC sečenje limova"; */
    document.getElementById("naslov").innerHTML ="CNC sečenje limova";

  }


}