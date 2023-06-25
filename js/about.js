let listado = [
  {
    codigo: "001",
    nombre: "Jeremias",
    mes: "6",
    anio: "2023",
    horas: "30",
    valor: "1500",
  },
  {
    codigo: "002",
    nombre: "Jeronimo",
    mes: "6",
    anio: "2023",
    horas: "30",
    valor: "1500",
  },
  {
    codigo: "003",
    nombre: "German",
    mes: "6",
    anio: "2023",
    horas: "30",
    valor: "1500",
  },
  {
    codigo: "004",
    nombre: "Javier",
    mes: "6",
    anio: "2023",
    horas: "30",
    valor: "1500",
  },
  {
    codigo: "005",
    nombre: "Jhonatan",
    mes: "6",
    anio: "2023",
    horas: "30",
    valor: "1500",
  },
  {
    codigo: "006",
    nombre: "Gabriel",
    mes: "6",
    anio: "2023",
    horas: "30",
    valor: "1500",
  },
  {
    codigo: "007",
    nombre: "Josue",
    mes: "6",
    anio: "2023",
    horas: "30",
    valor: "1500",
  },
  {
    codigo: "008",
    nombre: "Jimena",
    mes: "6",
    anio: "2023",
    horas: "30",
    valor: "1500",
  },
  {
    codigo: "009",
    nombre: "Julieta",
    mes: "6",
    anio: "2023",
    horas: "30",
    valor: "1500",
  },
  {
    codigo: "010",
    nombre: "Josefina",
    mes: "6",
    anio: "2023",
    horas: "30",
    valor: "1500",
  },
];

// <!--    ■Código empleado
// ■Nombre y Apellido
// ■Mes
// ■Año
// ■Horas Trabajadas
// ■Valor Hora -->

function agregar() {
  const _tbody = document.querySelector("tbody");

  for (i = 0; i < listado.length; i++) {
    _tbody.innerHTML += `    <tr>
                            <td> ${listado[i].codigo}  </td>
                            <td> ${listado[i].nombre}</td>
                            <td>  ${listado[i].mes} </td>
                            <td>${listado[i].anio}</td>
                            <td> ${listado[i].horas}  </td>
                            <td>$ ${listado[i].valor}  </td>
                            </tr>`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  agregar();
});
