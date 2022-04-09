import pacotes from "./../package.mjs";

export function question9(){
    let listaProd = []
    let listaJoia = []
    pacotes.forEach(barcode=>{
        let regiao = parseInt(barcode.regiaoDestino)
        if(regiao>=201 && regiao<=499 && barcode.isValid == true){
            listaProd.push("Pacotes: " + barcode.regDestino + " " + barcode.barcodeNumber);
        }
        if(barcode.nomeProd == "Jóia" && barcode.isValid == true){
            listaJoia.push("Pacotes: " + barcode.regDestino + " " + barcode.barcodeNumber)
        }
    })
    console.log(listaProd.concat(listaJoia))
   

}