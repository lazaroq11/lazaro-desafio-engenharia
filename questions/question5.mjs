import pacotes from "./../package.mjs";

export function question5(){
    let vendedores = []
    pacotes.forEach(barcode=>{
        if(vendedores.filter(function(e){return e.vendedorId == barcode.codigoVendedor}).length==0){
            vendedores.push({vendedorId:barcode.codigoVendedor,total:0});
                    
        }
    })

    pacotes.forEach(barcode=>{
        vendedores.forEach(vendedor=>{
            if(barcode.isValid == true && vendedor.vendedorId == barcode.codigoVendedor){
                vendedor.total++;
            }
        })

    })
    vendedores.forEach(vendedor=>{
        console.log("Código do vendedor: " + vendedor.vendedorId + " " +"Total de pacotes: "+ vendedor.total)
    })
    
}