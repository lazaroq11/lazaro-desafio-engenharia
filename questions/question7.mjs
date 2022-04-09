import pacotes from "./../package.mjs";

export function question7(){
    pacotes.forEach(barcode=>{
        let regiao = parseInt(barcode.regiaoDestino)

        if(regiao>=201 && regiao<=499 && barcode.isValid == true){
            console.log("Pacotes: " + barcode.barcodeNumber);
        }
    })
}