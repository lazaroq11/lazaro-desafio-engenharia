import pacotes from "./../package.mjs";

export function question10(){
    pacotes.forEach(barcode=>{
        if(barcode.isValid == false){
            console.log("Pacotes Inválidos: " + barcode.barcodeNumber);
        }
    })
}