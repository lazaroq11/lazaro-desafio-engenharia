import pacotes from "./../package.mjs";
export function question2(){
    pacotes.forEach(barcode =>{
       
       let validaPacote = barcode.isValid
       if(validaPacote == true){
          console.log("Válidos: " + barcode.barcodeNumber)
       }else{
          console.log("Inválidos: " + barcode.barcodeNumber)
       }
      

    })
 }

