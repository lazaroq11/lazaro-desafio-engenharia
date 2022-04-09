import pacotes from "./../package.mjs";

export function question4(){
    let listaPacotes = []
    pacotes.forEach(barcode=>{
    
    if(barcode.regDestino == "Centro Oeste" && barcode.isValid == true){
        listaPacotes.push("Centro-Oeste: " + barcode.barcodeNumber)
    }else

    if(barcode.regDestino == "Nordeste" && barcode.isValid == true){    
        listaPacotes.push("Nordeste: " + barcode.barcodeNumber)
    }else

    if(barcode.regDestino == "Norte" && barcode.isValid == true){
        listaPacotes.push("Norte: " + barcode.barcodeNumber)
    }else

    if(barcode.regDestino == "Sudeste" && barcode.isValid == true){
        listaPacotes.push("Sudeste: " + barcode.barcodeNumber)
    }else

    if(barcode.regDestino == "Sul" && barcode.isValid == true){
        listaPacotes.push("Sul: " + barcode.barcodeNumber)
    }
    
});
console.log(listaPacotes.sort())
}