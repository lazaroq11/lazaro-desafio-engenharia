import pacotes from "./../package.mjs";

export function question6(){
    let listaPacotesDestino = []

    pacotes.forEach(barcode=>{
        if(barcode.regDestino == "Centro Oeste" && barcode.isValid == true){
            listaPacotesDestino.push("Centro-Oeste: " + barcode.nomeProd + " " + barcode.barcodeNumber)
        }else
    
        if(barcode.regDestino == "Nordeste" && barcode.isValid == true){    
            listaPacotesDestino.push("Nordeste: " + barcode.nomeProd + " " + barcode.barcodeNumber)
        }else
    
        if(barcode.regDestino == "Norte" && barcode.isValid == true){
            listaPacotesDestino.push("Norte: " + barcode.nomeProd + " " + barcode.barcodeNumber)
        }else
    
        if(barcode.regDestino == "Sudeste" && barcode.isValid == true){
            listaPacotesDestino.push("Sudeste: " + barcode.nomeProd + " " + barcode.barcodeNumber)
        }else
    
        if(barcode.regDestino == "Sul" && barcode.isValid == true){
            listaPacotesDestino.push("Sul: " + barcode.nomeProd + " " + barcode.nomeProd + barcode.barcodeNumber)
        } 
    })
    console.log(listaPacotesDestino.sort())
}