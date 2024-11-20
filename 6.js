function esElegibleParaPrestamo(salario, puntajeCredito) {
    if (salario > 30000 && puntajeCredito > 650){
        return "elegible para prestamo";
    } else {
        return "no elegible para prestamo";
    }
}

export {esElegibleParaPrestamo};