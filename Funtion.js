function ObtenerFecha() {
    switch (new Date().getDay()) {
        case 0:
            document.getElementById("DiaS").textContent = "Domingo";
            break;
        case 1:
            document.getElementById("DiaS").textContent = "Lunes";
            break;
        case 2:
            document.getElementById("DiaS").textContent = "Martes";
            break;
        case 3:
            document.getElementById("DiaS").textContent = "Miércoles";
            break;
        case 4:
            document.getElementById("DiaS").textContent = "Jueves";
            break;
        case 5:
            document.getElementById("DiaS").textContent = "Viernes";
            break;
        default:
            document.getElementById("DiaS").textContent = "Sábado";
            break;
    }

    document.getElementById("Dia").textContent = new Date().getDate();

    switch (new Date().getMonth()) {
        case 0:
            document.getElementById("Mes").textContent = "Enero";
            break;
        case 1:
            document.getElementById("Mes").textContent = "Febrero";
            break;
        case 2:
            document.getElementById("Mes").textContent = "Marzo";
            break;
        case 3:
            document.getElementById("Mes").textContent = "Abril";
            break;
        case 4:
            document.getElementById("Mes").textContent = "Mayo";
            break;
        case 5:
            document.getElementById("Mes").textContent = "Junio";
            break;
        case 6:
            document.getElementById("Mes").textContent = "Julio";
            break;
        case 7:
            document.getElementById("Mes").textContent = "Agosto";
            break;
        case 8:
            document.getElementById("Mes").textContent = "Septiembre";
            break;
        case 9:
            document.getElementById("Mes").textContent = "Octubre";
            break;
        case 10:
            document.getElementById("Mes").textContent = "Noviembre";
            break;
        default:
            document.getElementById("Mes").textContent = "Diciembre";
            break;   
    }

    document.getElementById("Ano").textContent = new Date().getFullYear();
}