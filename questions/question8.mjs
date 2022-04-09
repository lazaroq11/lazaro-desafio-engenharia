import pacotes from "./../package.mjs";

export function question8(){
    let listaRegiao = [];
    pacotes.forEach(barcode=>{
    let regiao = parseInt(barcode.regiaoDestino)
    
    if(regiao>=201 && regiao<=499 && barcode.isValid == true){
       listaRegiao.push("Pacotes: " + barcode.regDestino + " " + barcode.barcodeNumber);  
    }
        listaRegiao.sort();
    })
    console.log(listaRegiao.reverse())
}