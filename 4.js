
function nivelRiesgo(edad, tieneEnfermedadesPrevias) {
    if (edad > 60 || tieneEnfermedadesPrevias) {
        return "Alto riesgo";
    } else if (edad >= 40 && edad <= 60 && tieneEnfermedadesPrevias) {
        return "Riesgo moderado";
    } else {
        return "Bajo riesgo";
    }
}

module.exports = { nivelRiesgo };
