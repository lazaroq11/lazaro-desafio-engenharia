import pacotes from "./../package.mjs";

export function question1(){
let centroOeste = 0;
let norte = 0;
let sudeste = 0;
let sul = 0;
let nordeste = 0;
let unknown = 0;

console.log("Pacotes por Região")
console.log("----------------------------------------------");
pacotes.forEach(pacote => {
  
  let regiao = parseInt(pacote.regiaoDestino)

  if(regiao>=201 && regiao <= 299 ){
    centroOeste++;
    console.log("Centro Oeste: " + pacote.barcodeNumber)
  }else

  if(regiao>=300 && regiao<=399){
    nordeste++
    console.log("Nordeste: " +  pacote.barcodeNumber)
  }else
  
  if(regiao>=400 && regiao<=499){
    norte++
    console.log("Norte: " +  pacote.barcodeNumber )
  }else

  if(regiao>=1 && regiao<=99){
    sudeste++
    console.log("Sudeste: " +  pacote.barcodeNumber)
  }else

  if(regiao>=100 && regiao<=199){
    sul++
    console.log("Sul: " +  pacote.barcodeNumber)
  }else{
    unknown++;
    console.log("Nenhuma região: " +  pacote.barcodeNumber);
  }
});

console.log("----------------------------------------------");
console.log("Qntd de Pacotes por Região")
 console.log("Centro Oeste:" + centroOeste + " pacote(s)");
 console.log("Nordeste:" + nordeste + " pacote(s)");
 console.log("Norte:" + norte + " pacote(s)");
 console.log("Sudeste:" + sudeste + " pacote(s)") ;
 console.log("Sul:" + sul + " pacote(s)");
 console.log("Nenhuma Região:" + unknown + " pacote(s)")
}

