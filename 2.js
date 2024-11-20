
function calcularDescuento(precio) {
    let descuento;

    if (precio > 1000) {
        descuento = 0.20; 
    } else if (precio >= 500 && precio <= 1000) {
        descuento = 0.10;  
    } else {
        descuento = 0;  
    }

    
    let precioFinal = precio - (precio * descuento);
    return precioFinal;
}

export { calcularDescuento };
