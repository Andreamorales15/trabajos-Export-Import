let enRango = (num) => {
    let res = (num> 10 & num< 50)?"esta dentro del rango":
    "esta fuera de rango ";
    return res;
}
    console.log (enRango(10));
    console.log (enRango(50));

    export{enRango}
