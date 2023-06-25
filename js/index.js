/*


■Código empleado
■Nombre y Apellido
■Mes
■Año
■Horas Trabajadas
■Valor Hora



*/

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

class Empleado {
  constructor(codigo, nombre, mes, anio, horas, valor) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.mes = mes;
    this.anio = anio;
    this.horas = horas;
    this.valor = valor;
  }
}

function recuperar() {
  let codigo = document.getElementById("codigoE").value;

  let nombre = document.getElementById("nYa").value;

  let mes = document.getElementById("mes").value;
  let anio = document.getElementById("anio").value;

  let horas = document.getElementById("horas").value;

  let valor = document.getElementById("valor").value;

  let emp = new Empleado(codigo, nombre, mes, anio, horas, valor);
  return emp;
}

function verificar(ejemplo) {
  if (
    ejemplo.codigo == 0 ||
    ejemplo.anio == 0 ||
    ejemplo.mes == 0 ||
    ejemplo.valor == 0 ||
    ejemplo.nombre == ""
  ) {
    return "No se realiza la operacion por error de carga";
  } else {
    return 1;
  }
}

function auxiliar(elemento, e1) {
  if (elemento !== 1) {
    Swal.fire({
      title: "Error!",
      text: "Do you want to continue",
      icon: "error",
      confirmButtonText: "Cool",
    });
  } else {
    Swal.fire({
      title: "Perfecto",
      text: "Carga Completa",
      icon: "success",
    });

    listado.push(e1);
  }
}

function resolucionA() {
  let emp1 = recuperar();
  let empl = verificar(emp1);
  auxiliar(empl, emp1);
  agregar();
}

// Total de empleados liquidados su sueldo por año actual
// Total de empleados liquidados por mes y año actual
// Acumulados de sueldos por año actual
// Acumulados de sueldos por mes y año actual○
// Promedio de sueldos por año actual
function resolucionUno() {
  let contador = 0;

  for (let i = 0; i < listado.length; i++) {
    if (listado[i].anio === "2023") {
      contador++;
    }
  }

  Swal.fire({
    text: "La cantidad de empleados del año 2023 es de:" + contador,
    icon: "success",
  });
}
function resolucionDos() {
  let contador = 0;

  for (let i = 0; i < listado.length; i++) {
    if (listado[i].anio === "2023" && listado[i].mes === "6") {
      contador++;
    }
  }

  Swal.fire({
    text: "La cantidad de empleados del año 2023 en junio es de:" + contador,
    icon: "success",
  });
}
function resolucionTres() {
  let acumulador = 0;

  for (let i = 0; i < listado.length; i++) {
    if (listado[i].anio === "2023") {
      acumulador += parseInt(listado[i].valor) * parseInt(listado[i].horas);
    }
  }

  Swal.fire({
    text:
      "La cantidad sueldo acumulado de empleados del año 2023  es de:$" +
      acumulador,
    icon: "success",
  });
}
function resolucionCuatro() {
  let acumulador = 0;

  for (let i = 0; i < listado.length; i++) {
    if (listado[i].anio === "2023" && listado[i].mes === "6") {
      acumulador += parseInt(listado[i].valor) * parseInt(listado[i].horas);
    }
  }

  Swal.fire({
    text:
      "La cantidad de sueldo de empleados del año 2023 en junio es de:" +
      acumulador,
    icon: "success",
  });
}
function resolucionCinco() {
  let acumulador = 0;
  let contador = 0;

  for (let i = 0; i < listado.length; i++) {
    if (listado[i].anio === "2023") {
      acumulador += parseInt(listado[i].valor) * parseInt(listado[i].horas);
      contador++;
    }
  }

  Swal.fire({
    text: "El sueldo promedio 2023 es de:" + acumulador / contador,
    icon: "success",
  });
}

function agregar() {
  const _tbody = document.querySelector("tbody");
  _tbody.innerHTML = "";

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
