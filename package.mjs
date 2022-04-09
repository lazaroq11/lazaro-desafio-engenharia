import {config} from "./config.mjs"
 let pacotes = []
config.barcodes.forEach(barcode => {
let pacote = {
    barcodeNumber: barcode,
    regiaoOrigem:barcode.substr(0, 3),
    regiaoDestino:barcode.substr(3,3),
    codigoLoggi: barcode.substr(6,3), 
    codigoVendedor: barcode.substr(9,3),
    tipoProd:barcode.substr(12,3),
    nomeProd:'',
    regOrigem: '',
    regDestino: '',
    isValid: ''
}

 pacote.nomeProd=productType(pacote.tipoProd),
 pacote.regOrigem = regTypelocalization(pacote.regiaoOrigem),
 pacote.regDestino = regTypelocalization(pacote.regiaoDestino),
 pacote.isValid = validPackage(pacote.nomeProd,pacote.regOrigem,pacote.regDestino,pacote.codigoVendedor)
 pacotes.push(pacote);
});

function productType(product){
    if(product == "001"){
        return  "Jóia"
    }else

    if(product == "111"){
        return "Livros"
    }else
    if(product == "333"){
        return "Eletrônicos"
    }else
    
    if(product == "555"){
        return "Bebidas"
    }else
      
    if(product == "888"){
        return "Brinquedos"
    }else{
        return "Produto Inválido"
    }
}

function regTypelocalization(localization){
   localization = parseInt(localization)
   if(localization>=201 && localization<=299){
       return "Centro Oeste"
   }else
   
   if(localization>=300 && localization<=399){
       return "Nordeste"
   }else
   
   if(localization>=400 && localization<=499){
       return "Norte"
   }else

   if(localization>=1 && localization<=99){
       return "Sudeste"
   }else
   if(localization>=100 && localization<=199){
       return "Sul"
   }else{
       return "Região Inválida"
   }
}

function validPackage(name,regOrigin, regDestiny, vendorCod){
    return(name != "Produto Inválido" && regOrigin != "Região Inválida" && regDestiny!="Região Inválida" && vendorCod!="367" && !(name == "Jóia" && regOrigin =="Centro Oeste"))    
}

export default pacotes

