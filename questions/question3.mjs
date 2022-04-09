import pacotes from "./../package.mjs";

export function question3(){
    pacotes.forEach(barcode=>{
        if(barcode.regOrigem == "Sul" && barcode.nomeProd == "Brinquedos"){
            console.log(barcode.barcodeNumber);
        }
    })
    console.log("Nenhum registro encontrado!")
}