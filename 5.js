function esBisiesto(año) {
    if ((año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0)) {
        return "Es bisiesto";
    } else {
        return "No es bisiesto";
    }
}

export {esBisiesto}